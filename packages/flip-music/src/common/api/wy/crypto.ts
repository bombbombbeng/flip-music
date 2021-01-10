const Buffer = require('buffer')
const randomBytes = require('randombytes')
const CryptoJS = require('crypto-js')

const base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const publicKey = '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB\n-----END PUBLIC KEY-----'
const iv = CryptoJS.enc.Utf8.parse('0102030405060708')
const presetKey = CryptoJS.enc.Utf8.parse('0CoJUm6Qyw8W8jud')

// const aesEncrypt = async (text: any, mode: 'CBC' | 'CFB' | 'CTR' | 'OFB' | 'ECB', key: any, iv: any ) => {
//     const src = CryptoJS.enc.Utf8.parse(text)
//     const encrypted = await CryptoJS.AES.encrypt(src, key, {iv: iv, mode: CryptoJS.mode[mode], padding: CryptoJS.pad.Pkcs7})
//     const rs = encrypted.ciphertext.toString().toUpperCase()
//     console.log('aesEncrypt', encrypted, encrypted.ciphertext)
//     return rs
// }

function aesEncrypt(data: any, key: any, iv: any) {
  const encrypted = CryptoJS.AES.encrypt(data, key, { iv, mode: CryptoJS.mode.CBC })
  const rs = encrypted.ciphertext.toString().toUpperCase()
  console.log('aesEncrypt', rs)
  return rs
}

const rsaEncrypt = (buffer: any, key: CryptoKey): any => {
  // buffer = Buffer.concat([Buffer.alloc(128 - buffer.length), buffer])
  const rs = crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, buffer)
  console.log('rsaEncrypt', rs, 'key', key, 'buffer', buffer)
  return rs
}

function base64ToArrayBuffer(b64: string): Uint8Array {
  const byteString = window.atob(b64)
  const byteArray = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i += 1) {
    byteArray[i] = byteString.charCodeAt(i)
  }
  return byteArray
}

function removeLines(str: string): string {
  return str.replace('\n', '')
}

function pemToArrayBuffer(pem: string): Uint8Array {
  const b64Lines = removeLines(pem)
  const b64Prefix = b64Lines.replace('-----BEGIN PUBLIC KEY-----', '')
  const b64Final = b64Prefix.replace('-----END PUBLIC KEY-----', '')
  return base64ToArrayBuffer(b64Final)
}

function importPublicKey(key: string) {
  const binaryDer = pemToArrayBuffer(key)
  console.log('binaryDer', binaryDer)
  return window.crypto.subtle.importKey(
    'spki',
    binaryDer,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256'
    },
    true,
    ['encrypt']
  )
}

function buf2hex(buffer: any) {
  console.log('buf2hex', buffer, new Uint8Array(buffer))
  return Array.prototype.map.call(new Uint8Array(buffer), (x: any) => (`00${x.toString(16)}`).slice(-2)).join('')
}

const wyapi = async (object: any) => {
  const text = JSON.stringify(object)
  const secretKey = randomBytes(16).map((n: any) => (base62.charAt(n % 62).charCodeAt(0)))
  const publicCryptoKey = await importPublicKey(publicKey)
  const ciphertext = await rsaEncrypt(secretKey.reverse(), publicCryptoKey)
  const rs = {
    params: aesEncrypt(
      aesEncrypt(text, presetKey, iv),
      presetKey,
      iv
    ),
    encSecKey: buf2hex(ciphertext)
  }
  console.log('weapi rs', rs)
  return rs
}

export { wyapi }
export default {
  wyapi
}
