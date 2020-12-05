import createAxios from '../request'
import { searchFunc } from '../types'

const kg = createAxios({
  baseURL: 'kg/',
  headers: { origin: 'http://ioscdn.kugou.com' }
})

// 关键词搜索
const KG_SEARCH: searchFunc = async (str: string, page: number) => {
  const limit = 30
  const rs = await kg.get(`/api/v3/search/song?keyword=${encodeURIComponent(str)}&page=${page}&pagesize=${limit}&showtype=10&plat=2&version=7910&tag=1&correct=1&privilege=1&sver=5`)
  console.log('KG_SEARCH', rs)
  return rs
}

export {
  KG_SEARCH
}
export default {
  KG_SEARCH
}
