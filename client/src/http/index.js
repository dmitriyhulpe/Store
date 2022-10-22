import axios from 'axios'
import { REACTAPI } from '../utils/consts'

const $host = axios.create({
    baseURL: REACTAPI
})

const $authHost = axios.create({
    baseURL: REACTAPI
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}