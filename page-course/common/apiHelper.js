const api='https://manvaasm.herokuapp.com'
import { getData } from './../../page-common/auth-helper/authSaver';

export const apiGetAllCourses=async ()=>{
    //console.warn("apiSignIn",values)
    let resultFromServer=await fetch(`${api}/course/getallcourses`,{
        method:"GET"
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}

export const purchaseCourse=async(courseId)=>{
    let {email,userToken}=await getData()
    let bodyValue={}
    bodyValue['courseid']=courseId
    bodyValue['email']=email

    let resultFromServer=await fetch(`${api}/course/purchasecourse`,{
        method:"POST",
        headers:{
            'Authorization':`Bearer ${userToken}`,
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(bodyValue)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    console.warn("result in purchase",resultFromServer,"body",JSON.stringify(bodyValue))
    return resultFromServer
}