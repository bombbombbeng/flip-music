import createAxios from '../request'
import { searchFunc } from '../types'

const xm = createAxios({
  baseURL: 'xm/',
  headers: { origin: 'https://www.xiami.com' }
})

// 关键词搜索
const XM_SEARCH: searchFunc = async (str: string, page: number) => {
  const limit = 30
  const rs = await xm.get('/api/search/searchSongs', {

  })
  console.log('XM_SEARCH', rs)
  return rs
}

export {
  XM_SEARCH
}
export default {
  XM_SEARCH
}
