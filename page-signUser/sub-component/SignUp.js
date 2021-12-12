import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity, Image} from 'react-native'
import backIcon from '../../image/common/back_icon.png';
//import { Col, Grid } from "react-native-easy-grid"
import { storeData } from './../../page-common/auth-helper/authSaver';

const SignUp = props => {
    const [value,setValue]=useState({
        name:"",
        email:"",
        phoneNumber:"",
        password:"",
        confirmPassword:"",
        error:"",
        loading:false
    })
    const changeHandler=(field_name,field_value)=>{
        setValue({
            ...value,
            [field_name]:field_value
        })
    }
    const passwordMatch=()=>{
        if(value.password!==value.confirmPassword){
            setValue({
                ...value,
                password:"",
                confirmPassword:"",
                error:"Missmatch Password in the two Field"
            })
        }else{
            return true
        }
        //console.warn("value",JSON.stringify(value))
    }
    const phoneNumberCheck=()=>{
        if(value.phoneNumber.toString().length!==10){
            setValue({
                ...value,
                phoneNumber:"",
                error:"Enter Valid Mobile Number"
            }) 
        }else{
            return true
        }
        //console.warn("value",JSON.stringify(value))
    }
    const validateField=()=>{
        const {name,email,phoneNumber,password,confirmPassword}=value
        if(name.length==0){
            setValue({
                ...value,
                error:"Name Field is Empty"
            })
            return false
        }
        else if(email.length==0){
            setValue({
                ...value,
                error:"Email Field is Empty"
            })
            return false
        }
        else if(phoneNumber.toString().length==0){
            setValue({
                ...value,
                error:"Phone Number field is Empty"
            })
            return false
        }
        else if(password.length==0){
            setValue({
                ...value,
                error:"Password Field is Empty"
            })
            return false
        }
        else if(confirmPassword.length==0){
            setValue({
                ...value,
                error:"Confirm Password Field is Empty"
            })
            return false
        }
        else{ 
            if(!phoneNumberCheck()){
                return false
            }
            else if(!passwordMatch()){
                return false
            }
            else{
                return true
            }
        }  
    }
    const allValidator=()=>{
        if(validateField()){
            //Hit the backend route here
            storeData({token:"asdfg",id:"1234"})
            //console.warn("s_Up",JSON.stringify(props))
            props.onSignedSuccess()
        }
    }
    if(value.error===""){
        const {name,email,password,confirmPassword,phoneNumber}=value
        return (
            <View style={style.container}>
                <View style={style.form_style}>
                    <TextInput style={style.input_field} 
                        placeholder="Name" 
                        placeholderTextColor="#FFFFFF" 
                        textContentType="name" 
                        onChangeText={(text)=>changeHandler('name',text)} 
                        value={name}
                    />
                    <TextInput style={style.input_field} 
                        placeholder="Email" 
                        placeholderTextColor="#FFFFFF" 
                        textContentType="emailAddress" 
                        onChangeText={(text)=>changeHandler('email',text)} 
                        value={email}
                    />
                    <TextInput style={style.input_field} 
                        placeholder="Phone Number" 
                        placeholderTextColor="#FFFFFF" 
                        keyboardType={'numeric'} 
                        onChangeText={(text)=>changeHandler('phoneNumber',text)} 
                        value={phoneNumber.toString()}
                    />
                    <TextInput style={style.input_field} 
                        placeholder="Password" 
                        placeholderTextColor="#FFFFFF" 
                        textContentType="password" 
                        secureTextEntry={true} 
                        onChangeText={(text)=>changeHandler('password',text)} 
                        value={password}
                    />
                    <TextInput style={style.input_field} 
                        placeholder="Confirm Password" 
                        placeholderTextColor="#FFFFFF" 
                        textContentType="password" 
                        secureTextEntry={true} 
                        onChangeText={(text)=>changeHandler('confirmPassword',text)}
                        value={confirmPassword}
                    />
                </View>
                <View style={style.bottom}>
                    <TouchableOpacity style={style.green_button} onPress={allValidator}>
                        <Text style={style.text_in_green_button}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }else{
        return(
            <View style={style.container_error}>
                <View>
                    <TouchableOpacity  onPress={()=>setValue({...value,error:""})} >
                        <Image source={backIcon} /> 
                    </TouchableOpacity>
                </View>
                <View style={style.show_error}>
                    <Text style={style.error_text}>{value.error}</Text>
                </View>
            </View>
        )
    }
    
}
const style=StyleSheet.create({
    container:{
        paddingLeft:30,
        paddingRight:30,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    container_error:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:30,
        margin:10
    },
    show_error:{
        borderColor:'#ffe6e6',
        backgroundColor:"#ffb3b3",
        borderWidth:1,
        height:200,
        borderRadius:20,
        justifyContent:'center',
        margin:10,
        marginTop:40
    },
    error_text:{
        color:"#e60000",
        textAlign:'center',
    },
    input_field:{
        color:'#FFFFFF',
        borderBottomColor:"#FFFFFF",
        borderBottomWidth:2,
        marginTop:10,
        marginBottom:10,
        width:300
    },
    green_button:{
        backgroundColor:'#09B44D',
        borderRadius:20,
        justifyContent:'center',
        width:305,
        height:45
    },
    text_in_green_button:{
        textAlign:'center',
        color:'#FFFFFF'
    },
    empty_button:{
        color:'#FFFFFF',
        justifyContent:'center',
        width:340,
        height:45
    },
    bottom:{
        marginTop:50
    },
    form_style:{
        marginTop:10,
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})

export default SignUp;