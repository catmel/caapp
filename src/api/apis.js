import axios from "axios";//引入axios

const red =axios.create({
    baseURL:"http://172.16.6.200:3000/api/",//设置默认地址
    timeout:10000//请求超时时间
}) 

//获取商家信息
export function seller(){
    return red.get("seller")
}
//获取商品信息
export function goods(){
    return red.get("goods")
}
//获取评价信息
export function ratings(){
    return red.get("ratings")
}