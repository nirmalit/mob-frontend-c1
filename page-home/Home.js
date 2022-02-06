import React,{useEffect,useState} from 'react'
import {Text ,View,TouchableOpacity,StyleSheet, ScrollView,}  from 'react-native'
import { set } from 'react-native-reanimated';
import NavBar from '../page-common/component/NavBar'
import ProductComponent from '../page-product/Product-c'
//import product from '../constant/product-list'
import { getData } from './../page-common/auth-helper/authSaver';
import { getHomePageDetail } from './common/apiHelper';
//import CourseComponent from './../page-course/Course-c';
import WhatsAppCard from './WhatsAppCard';
import CourseView from './../page-course/Course-h';
import SubLoadingAnimation from './../page-common/component/SubLoading';
const Home = (props) => {
     
    const [values,setValues]=useState({
        error:"",
        loading:false,
        product:[],
        course:[]
    })
     useEffect(async()=>{
         setValues({
             ...values,
             loading:true
         })
        let data=await getData()
        let homeData=await getHomePageDetail()
        if(homeData.success){
            setValues({
                ...values, 
                loading:false,
                product:homeData.data.products,
                course:homeData.data.courses
            })
        }
        else{
            setValues({
                ...values,
                loading:false,
                error:true
            })
        }
        
        
        //console.log("---",data)
        // //let temp=JSON.parse(data)
        // temp=data
        if(data.userToken===undefined){
            props.navigation.navigate('OTP')
        }
     },[])
    return (
        <ScrollView>

            <NavBar Title="HOME" props={{...props}} />
            {values.loading?(<SubLoadingAnimation message="best deals for you" />):( <><View style={{marginTop:15,display:'flex',flexDirection:'row', justifyContent:'space-evenly',  paddingVertical:3,marginBottom :15}}>
            <Text style={styles.textStyle}>Hot Deals</Text>
                
                {values.product.map((item,i)=>{
                            return (
                                <View style={{paddingHorizontal:5,top:10}} key={item.productid}>
                                    <ProductComponent product={item} props={{...props}} />
                                </View>
                            )
                        })}
            </View>
            <WhatsAppCard />
            <View  style={{ flex:1,justifyContent:'space-evenly',flexDirection:'row',marginTop :90}}>
                {values.course.map((item,i)=>{
                            return (
                                <View key={item.courseid}>
                                    <CourseView course={item} props={{...props}} />
                                </View>
                            )
                        })}
                </View></>)}
               
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
    },
    textStyle:{
        fontFamily:'',
        fontSize:20,
        fontWeight:'bold',
        left:15,
        position:'absolute',
        
    }
})
export default Home;