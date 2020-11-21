import createAxios from '../request'
import { searchFunc } from '../types'

const kw = createAxios({
    baseURL: 'kw/',
    headers: { 'origin': 'http://search.kuwo.cn' }
})

// 关键词搜索
const KW_SEARCH: searchFunc = async (str: string, page: number) => {
    const limit = 30
    const rs = await kw.get(`/r.s?client=kt&all=${encodeURIComponent(str)}&pn=${page - 1}&rn=${limit}&uid=794762570&ver=kwplayer_ar_9.2.2.1&vipver=1&show_copyright_off=1&newver=1&ft=music&cluster=0&strategy=2012&encoding=utf8&rformat=json&vermerge=1&mobi=1&issubtitle=1`)
    console.log('KW_SEARCH', rs)
    return rs
}

export {
    KW_SEARCH
}