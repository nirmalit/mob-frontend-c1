const api='https://manvaasm.herokuapp.com'

export const getHomePageDetail=async ()=>{

    let resultFromServer=await fetch(`${api}/user/home_page`,{
        method:"POST"
    }
    ).then(response=>{return response.json()}).catch(err=>console.warn(err))
    //console.warn("result in ApiSign IN",resultFromServer)
    return resultFromServer
}