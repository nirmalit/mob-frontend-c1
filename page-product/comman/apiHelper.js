const api='https://manvaasm.herokuapp.com'
import { getData } from './../../page-common/auth-helper/authSaver';

export const apiGetAllProducts=async ()=>{
    //console.warn("apiSignIn",values)
    let resultFromServer=await fetch(`${api}/product/getallproducts`,{
        method:"GET"
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}
export const purchaseProduct=async (bodyValue)=>{

    let {email,userToken}=await getData()
    bodyValue['email']=email
    console.warn("rr",JSON.stringify(bodyValue))
    let resultFromServer=await fetch(`${api}/order/addorder`,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${userToken}`,
            Accept:'application/json',
            "Content-Type":'application/json'
        },
        body:JSON.stringify(bodyValue)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}