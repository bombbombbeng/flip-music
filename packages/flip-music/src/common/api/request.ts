import axios from 'axios'

interface axiosConfig {
    baseURL: string;
    timeout?: number;
    headers?: object;
}

function handleError(response: object) {
  return {
    code: 500
  }
}

function createAxios(config: axiosConfig) {
  const defalutConfig = {
    baseURL: '',
    timeout: 10000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
    }
  }
  Object.assign(defalutConfig, config)
  const instance = axios.create(defalutConfig)
  instance.interceptors.response.use((response) => {
    if (response.status !== 200) {
      const error = handleError(response)
      return Promise.reject(error)
    }
    return response.data
  }, (error) => Promise.reject(error))
  return instance
}

export { createAxios }
export default createAxios
