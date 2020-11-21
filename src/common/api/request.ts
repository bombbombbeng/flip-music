import axios, {AxiosInstance} from 'axios'

interface axiosConfig {
    baseURL: string;
    timeout?: number;
    headers?: object;
}

function createAxios(config: axiosConfig): AxiosInstance {
    const defalutConfig = {
        baseURL: '',
        timeout: 10000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
        }
    }
    Object.assign(defalutConfig, config)
    return axios.create(defalutConfig)
}

export { createAxios }
export default createAxios