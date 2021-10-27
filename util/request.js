import axios from "axios";
import {config} from "./config";
import {ElMessage} from "element-plus";


axios.defaults.baseURL = config.baseURL;
axios.defaults.timeout = 10000;
axios.defaults.proxy = {
    host: '127.0.0.1',
    port: 8080,
    }


axios.interceptors.request.use(success => {
    console.log('请求前置方法成功: ', success);
    return success;
}, error => {
    console.error('请求前置方法失败 ', error);
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log('请求后置方法成功： ', response);
    return response;
}, error => {
    //console.error('请求后置方法失败 ', error);
    return Promise.reject(error)
})

export function post(url, data){

    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data,
            headers:{
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => successHandel(res, resolve))
            .catch(res => errorHandel(res, reject))
    })

}


export function get(url, data){

    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            data
        }).then(res => successHandel(res, resolve))
            .catch(res => errorHandel(res, reject))
    })

}

function successHandel(res, resolve){
    if(res.code !== 0){
        return ElMessage.error(res.message)
    }
    return resolve(res);
}

function errorHandel(error, reject){
    return reject(error)
}
