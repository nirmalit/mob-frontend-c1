import React,{useState} from 'react'
import {View,Text,Dimensions,StyleSheet,Image} from 'react-native'
import logo from '../image/common/logo.png';
import TogglerTab from './common/TogglerTab';
import SignIn from './sub-component/SignIn';
import SignUp from './sub-component/SignUp';
const {width,height}=Dimensions.get('screen')
const SignUser = (props) => {
    const [activeTab,setActiveTab]=useState('sign in');
    const onChangeToggler=(value)=>{
        setActiveTab(value)
    }
    const myChangeHandler=()=>{
        console.warn("S_user",props)
        props.onchangeReloadFlag()
    }
    return (
        <View>
            <View style={style.white_box}>
                <Image source={logo} />
            </View>
            <View style={style.black_box}>
                <View style={style.mini_white_box_container}> 
                    <TogglerTab actives={activeTab} onChangeToggle={onChangeToggler} />
                </View>
                {activeTab==='sign in' && <SignIn onSignedSuccess={myChangeHandler} />}
                {activeTab==='sign up' && <SignUp onSignedSuccess={myChangeHandler} />}
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    black_box:{
        backgroundColor:"#262626",
        width:width,
        height:height/1.5,
        borderTopRightRadius:50,
        borderTopLeftRadius:50
    },
    white_box:{
        width:width,
        height:height/3,
        justifyContent:'center',
        alignItems:'center',
        
    },
    mini_white_box_container:{
        alignItems:'center'
    }

})
export default SignUser;