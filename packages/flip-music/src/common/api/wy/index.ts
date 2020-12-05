import { wyapi } from './crypto'
import { searchType } from './enum'
import createAxios from '../request'
import { searchFunc } from '../types'
import { urlencoded } from '../utils'

const wy = createAxios({
  baseURL: 'wy/',
  headers: { origin: 'https://music.163.com' }
})

export const WY_SEARCH: searchFunc = async (str: string, page: number) => {
  const limit = 30
  const params = {
    s: str,
    type: searchType.SONG,
    limit,
    offset: limit * (page - 1),
  }
  const p = await wyapi(params)
  console.log('WY_SEARCH', params, p, urlencoded(p))
  // const p = {
  //     params: 'zZ2ngHNrGADyNAP9X2aToZ2opFfr6c5Lc5u/G+/LERMkIKLTA1i20WKQVhSFdZW6NCpf+j9yucBmNdHteJYdcE8GrixzuJNtx1+ZbP800DQjWI8VVn1VjkhsDFRJiU/y4d+3vRYqHmiq60aLN1VMFTEpeM5xoNPgX6KKOUxH35vZepySoJGnulhcr6JaYZdvMO87UnUmgMdhKnwDI8T2qQ==',
  //     encSecKey: '80339ec4618cb5fa2d2f9795d62b08326ebfaf1202022bdb2b3917660d4e6d0fe012b1188775502856758eb9b9f06d3818b9c9a5513845e9e9e8ac347145bed929dc78f043e8945f53917691a4f714c516f35f404cc57ce6b9a0489a90f2981847f1f97dc862533182cc72301f3c71143a41a2386f211a305744e5e8a458a8f0'
  // }
  const rs = await wy.post('search/get', urlencoded(p))
}

export default {
  WY_SEARCH
}
