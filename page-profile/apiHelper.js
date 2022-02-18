const api='https://manvaasm.herokuapp.com'
import { getData } from './../page-common/auth-helper/authSaver';

export const getUserData=async ()=>{
    let {email,userToken}=await getData()
    let temp={}
    temp['email']=email
    let resultFromServer=await fetch(`${api}/user/profile`,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${userToken}`,
            Accept:'application/json',
            "Content-Type":'application/json'
        },
        body:JSON.stringify(temp)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}

export const getCourseData=async(eachCourse)=>{
    //console.log("getcourseData",JSON.stringify(eachCourse))
    let resultFromServer=await fetch(`${api}/course/getcourse`,{
        method:"POST",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(eachCourse)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}

export const getProductData=async(eachProduct)=>{
   //console.log("geteachProductData--",JSON.stringify(eachProduct))
    let resultFromServer=await fetch(`${api}/product/getproduct`,{
        method:"POST",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(eachProduct)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.log("product Data---*",resultFromServer)
    return resultFromServer
}

