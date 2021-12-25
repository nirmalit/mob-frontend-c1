import React,{useEffect} from 'react'
import {Text ,View,TouchableOpacity,StyleSheet, ScrollView}  from 'react-native'
import NavBar from '../page-common/component/NavBar'
import ProductComponent from '../page-product/Product-c'
import product from '../constant/product-list'
import { getData } from './../page-common/auth-helper/authSaver';
const Home = (props) => {
     //console.warn("home",props)
    //  const preLoader=async ()=>{
    //     let temp=await 
    //     return temp
    //  }
     useEffect(async()=>{
        let data=await getData()
        //console.log("---",data)
        // //let temp=JSON.parse(data)
        // temp=data
        if(data.userToken===undefined){
            props.navigation.navigate('OTP')
        }
     },[])
    return (
        <View>

            <NavBar Title="HOME" props={{...props}} />
 
            <ScrollView horizontal={true}>
            <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',  paddingVertical:3}}>
                {product.map((item,i)=>{
                            return (
                                <View style={{paddingHorizontal:5}}>
                                    <ProductComponent product={item} key={i} />
                                </View>
                            )
                        })}
                </View>
            </ScrollView>
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
    }
})
export default Home;