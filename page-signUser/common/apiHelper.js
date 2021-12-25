const api='https://manvaasm.herokuapp.com'
export const apiSignIn=async (values)=>{
    //console.warn("apiSignIn",values)
    let resultFromServer=await fetch(`${api}/auth/login`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}

export const apiSignUp=async(values)=>{
    console.log(JSON.stringify( values))
    let resultFromServer=await fetch(`${api}/user/registeruser`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}

export const apiVerifyOtp=async(values)=>{
    console.log(JSON.stringify(values))
    let resultFromServer=await fetch(`${api}/otp/verifyotp`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    console.warn("result otp API",resultFromServer)
    return resultFromServer
}

export const demo=async()=>{
    let resultFromServer=await fetch(`${api}/user/demo`).then(response=>{return response.json()}).catch(err=>console.warn(err))
    console.warn("result demo",resultFromServer)
    return resultFromServer
}