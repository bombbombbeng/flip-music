import createAxios from '../request'
import { searchFunc } from '../types'

const tx = createAxios({
  baseURL: 'tx/',
  headers: { origin: 'https://c.y.qq.com' }
})

// 关键词搜索
const TX_SEARCH: searchFunc = async (str: string, page: number) => {
  const limit = 30
  const rs = await tx.get(`/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=sizer.yqq.song_next&searchid=49252838123499591&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=${page}&n=${limit}&w=${encodeURIComponent(str)}&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`)
  console.log('TX_SEARCH', rs)
  return rs
}

export {
  TX_SEARCH
}
export default {
  TX_SEARCH
}
