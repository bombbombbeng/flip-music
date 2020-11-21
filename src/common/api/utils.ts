export function urlencoded(form: {[index: string]: any}): string {
    // 请求数据格式转换：对象转换成键值对格式, 对应请求头'content-type': 'application/x-www-form-urlencoded'
    const arr = Object.keys(form).reduce((acc: string[], cur: string) => {
        const str = encodeURI(form[cur]);
        acc.push(`${cur}=${str}`)
        return acc
    }, [])
    return arr.join('&')
}