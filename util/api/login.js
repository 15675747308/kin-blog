import {get,post} from "../request"

export default {
    login(username, pwd){
    return post('/admin/login/login', {
        username,
        pwd
    })
}
}
