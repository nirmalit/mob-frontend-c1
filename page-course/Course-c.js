import { View,StyleSheet, Text,TouchableOpacity, Image } from "react-native"
import React, { useState,useEffect } from 'react'
import Base64 from '../page-common/component/Base64';

const CourseComponent = (props) => {
    const [courseImage,setCourseImage]=useState('')

    useEffect(() => {
        const arrayBufferToBase64=(buffer)=>{
            let binary = '';
            let bytes = new Uint8Array(buffer);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            //console.warn('nb',binary)
            
            return Base64.btoa(binary)
        }
        setCourseImage(arrayBufferToBase64(props.course.image.data))
    }, [])
   

    return(
        <View style={{position:'relative',paddingVertical:6}}>
            <View style={style.productImgWrapper}>
                <Image source={{
                    uri:'data:image/png;base64,'+courseImage
                }} style={style.productImg}/>
            </View>
            <View style={style.productInfo}>
                <View style={style.productDetailWrapper}>
                    <Text style={style.productDetail}>{props.course.name}</Text>
                    <Text style={style.productDetail}>₹ {props.course.instructor}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:"#fff",height:25,display:'flex',justifyContent:"center",alignItems:"center",borderRadius:10}}> 
                            <Text style={style.button} > View details </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    productInfo:{
        height:125,
        width:120,
        backgroundColor:'#09B44D',
        borderRadius:8,
        padding:5,
        justifyContent:'flex-end',
        marginTop:10
    },
    productDetail:{
        color:'#fff',
        textTransform:'capitalize',
        fontWeight:'bold'
    },
    productDetailWrapper:{
        padding:10
    },
    button:{
        color:'#09B44D'
    },
    productImgWrapper:{
        width:20,
        height:20
    },
    productImg:{
        width:70,
        height:70,
        zIndex:10,
        marginLeft:10,
        position:'absolute',
        left:15,
        top:7

    }
})
export default CourseComponent