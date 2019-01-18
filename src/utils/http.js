import axios from 'axios'

const http = axios.create({
    timeout:1000,
    withCredentials: true,//发送跨域请求凭证
    baseURL: 'http://192.168.0.122/api'
})

export default http