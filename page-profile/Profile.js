import React,{useEffect,useState} from 'react'
import {Text ,View,TouchableOpacity,StyleSheet,Image,Dimensions}  from 'react-native'
import NavBar from '../page-common/component/NavBar'
//import { removeStoreData } from '../page-common/auth-helper/authSaver'
import { getUserData } from './apiHelper';
import profile_icon from '../image/profile/profile_icon.png'
import phone_icon from '../image/profile/phone_icon.png'
import email_icon from '../image/profile/email_icon.png'

const {width,height}=Dimensions.get('screen')
const Profile = (props) => {
     console.warn("home",props)
     const [allValue,setAllValue]=useState({})
     useEffect(async()=>{
        let result=await getUserData()
        if(result.success){
            setAllValue({...result.data})
        }
        console.warn("profileData",JSON.stringify(result.data))
     },[])
     const userDataCard=()=>{
         if(allValue?.user_profile){
            return(<View style={styles.userCard}>
                <View style={{flexDirection:'row',width:300}}>
                    <View style={{width:20,height:20}}>
                        <Image source={profile_icon} style={{width:20,height:20}} />
                    </View>
                    <Text style={{left:20}}>{allValue.user_profile.name}</Text>
                </View>
                <View style={{flexDirection:'row',width:300}}>
                    <View style={{width:20,height:20}}>
                        <Image source={email_icon} style={{width:20,height:23}} />
                    </View>
                    <Text style={{left:20}}>{allValue.user_profile.email}</Text>
                </View>
                <View style={{flexDirection:'row',width:300}}>
                    <View style={{width:20,height:20}}>
                        <Image source={phone_icon} style={{width:20,height:23}} />
                    </View>
                    <Text style={{left:20}}>{allValue.user_profile.mobile}</Text>
                </View> 
            </View>)
         }else{
             return null
         }
        
     }
    return (
        <View>
            <NavBar Title="PROFILE" props={{...props}} />
            <View style={styles.container} >
                {userDataCard()}
                <View style={{height:height/3,justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('MyOrderDetails',{productData:allValue.myorders})} style={styles.greenButton}>
                        <Text>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('MyCourseDetails',{courseData:allValue.mycourse})}  style={styles.greenButton}>
                        <Text>My Courses</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
        alignItems:'center',
        justifyContent:'center',
    },
    userCard:{
        top:20,
        width:370,
        height:180,
        borderLeftColor:"#09B44D",
        borderLeftWidth:5,
        borderRadius:1,
        shadowColor:'#A4A4A3',
        elevation:0.8,
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:30
        // borderBottomWidth:1,
        // borderRightWidth:1,
        // borderTopWidth:1,
        // borderRightWidth:1,
        // borderRadius:5
    },
    greenButton:{
        borderColor:"#09B44D",
        borderWidth:2,
        width:310,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15
    }
})
export default Profile;