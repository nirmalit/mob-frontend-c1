import React, { useState, useEffect } from 'react';
import {Text,View ,StyleSheet,Dimensions,Image,TouchableOpacity,TextInput} from 'react-native'
import backIcon from '../image/common/back_icon.png'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { getData, storeData } from './../page-common/auth-helper/authSaver';
import { apiVerifyOtp } from './../page-signUser/common/apiHelper';
const {width,height}=Dimensions.get('screen')
const CELL_COUNT = 6;
const Otp = prop => {
    const [others,setOthers]=useState({
        error:"",
        userOTP:'',
        loading:false
    })
    
    const [value,setValue]=useState(others.userOTP)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const sendOtpForValidation= async() => {
        let data=await getData()
        setOthers({
            ...others,
            loading:true
        })
        if(data.email){
            console.warn("TO SSS--",value)
            let resultFromServer=await apiVerifyOtp({email:data.email,otp:value})
            console.warn("--->r--",resultFromServer)
            if(resultFromServer.success===false){
                setOthers({
                    ...others,
                    loading:false,
                    error:resultFromServer.msg
                })
            }else{
                storeData({email:data.email,useToken:resultFromServer.data.token})
                setOthers({
                    ...others,
                    loading:false,
                    error:""
                })
                prop.navigation.navigate('Home')
            }
        }
    }
    console.warn("stst--",JSON.stringify(others))
    if(others.error==="" & others.loading===false){
        return (
            <View  style={style.body}>
                
                <View style={style.content}>
                    <View>
                        <Text style={style.header}>Verification Code</Text>
                        <Text style={style.guide}>We sended verification code to your email.</Text>
                        <Text style={style.guide}>Please enter it below.</Text>
                    </View>
                    <View style={style.fields}>
                        <View>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={style.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <View
                                        onLayout={getCellOnLayoutHandler(index)}
                                        key={index}
                                        style={[style.cellRoot, isFocused && style.focusCell]}>
                                        <Text style={style.cellText}>
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={style.guideOtp} >We are verifiying your account by</Text>
                            <Text style={style.guideOtp}>the code you enterd it.</Text>
                            <View style={{display:"flex",flexDirection:"row",marginTop:10,alignItems:"center"}}> 
                                    <Text style={style.guideOtp}>Didn???t get a code?</Text> 
                                     <TouchableOpacity> 
                                         <Text style={style.resend}> Resend code. </Text>
                                    </TouchableOpacity>
                            </View>
                        <View style={{width:250, marginTop:20}}>
                            <TouchableOpacity style={{backgroundColor:"#09B44D",height:35,display:'flex',justifyContent:"center",alignItems:"center",borderRadius:10}} onPress={sendOtpForValidation}> 
                                <Text style={style.verify} > Verify </Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                        
                    </View>
                </View>
            </View>
        )
    }
    else if(others.error!==""){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 <TouchableOpacity style={{backgroundColor:"#09B44D",height:35,display:'flex',justifyContent:"center",alignItems:"center",borderRadius:10}} onPress={()=>setOthers({...others,error:""})}> 
                                <Text style={style.verify} > Back </Text>
                            </TouchableOpacity>
                <Text style={{color:"black",fontWeight:'bold'}}>{others.error}</Text>
            </View>
        ) 
    }
    else if(others.loading){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"black",fontWeight:'bold'}}>LOADING...</Text>
            </View>
        )
    }

}

const style=StyleSheet.create({
    body:{
        backgroundColor:"#262626",
        width:width,
        height:height
    },
   header:{
    color:"#fff",
    paddingVertical:20,
    fontSize:16,
    fontWeight:"bold"
   },
   guide:{
    color:"#fff",
    fontSize:15
   },
   guideOtp:{
    color:"#fff",
    alignItems:"center",
    fontSize:16,
   },
   fields:{
        height:"50%",
        alignItems:"center",
        display:"flex",
        justifyContent:"space-around",
   },
   content:{
       paddingVertical:"10%",
       paddingHorizontal:"5%",
       width:width,
       height:height,
       display:"flex",
   },
   resend:{
       color:"#09B44D",
       alignItems:"center"
   },
   verify:{
       color:"#fff",
       alignItems:"center",
       fontWeight:"bold",
       fontSize:17 
   },root: {
    flex: 1,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center'
},
title: {
    textAlign: 'left',
    fontSize: 20,
    marginStart: 20,
    fontWeight:'bold'
},
subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop: 10
},
codeFieldRoot: {
    marginTop: 40,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    
},
cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
 },
 cellText: {
    color:"#fff",
    fontSize: 28,
    textAlign: 'center',
},
focusCell: {
    borderBottomColor: '#09B44D',
    borderBottomWidth: 2,
},

button: {
    marginTop: 20
},

resendCodeText: {
    marginStart: 20,
    marginTop: 40,
},
resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
}


})

export default Otp;

