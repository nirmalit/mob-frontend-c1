import React, { useState,useEffect } from 'react'
import { View,StyleSheet, Text,TouchableOpacity, Image } from "react-native"
import Base64 from './../page-common/component/Base64';

const CourseView = (props) => {
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
        <View style={style.courseInfo}>   
                <View style={style.courseImgWrapper}>
                    <Image source={{
                        uri:'data:image/png;base64,'+courseImage
                    }} style={style.courseImg}/>
                </View>
                <View style={style.courseDetailWrapper}>
                    <Text style={style.courseTitle}>{props.course.name}</Text>
                    <TouchableOpacity onPress={()=>props.props.navigation.navigate('CourseDetails',{courseData:props.course})} 
                     style={{marginTop:10,backgroundColor:'#ffffff',height:20,width:100,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#B8AFAF'}}>View Details</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )

}

const style=StyleSheet.create({
    courseInfo:{
        height:180,
        width:130,
        borderRadius:8,
        padding:10,
        backgroundColor:'#E9E9E9',
        alignItems:'center',
    },
    courseDetailWrapper:{
        //width:200,
    },
    courseTitle:{
        fontWeight:'bold',
        textTransform:'uppercase',
        alignSelf:'center',
        marginTop:5
        
    },
    wrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        color:'#09B44D'
    },
    courseImgWrapper:{
        width:100,
        height:100,
    },
    courseImg:{
        width:100,
        height:100,
        // zIndex:10,
        //marginLeft:10,
        //position:'absolute',

    },
    grayBackground:{
        backgroundColor:'#E9E9E9',
        flex:1
    }
})

export default CourseView;


    // return(
    //     <View style={{position:'relative',paddingVertical:6}}>
    //         <View style={style.productImgWrapper}>
    //             <Image source={{
    //                 uri:'data:image/png;base64,'+courseImage
    //             }} style={style.productImg}/>
    //         </View>
    //         <View style={style.productInfo}>
    //             <View style={style.productDetailWrapper}>
    //                 <Text style={style.productDetail}>{props.course.name}</Text>
    //                 <Text style={style.productDetail}>₹ {props.course.instructor}</Text>
    //             </View>
    //             <TouchableOpacity style={{backgroundColor:"#fff",height:25,display:'flex',justifyContent:"center",alignItems:"center",borderRadius:10}}> 
    //                         <Text style={style.button} > View details </Text>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // )