import React,{useState,useEffect} from 'react';
import {Text ,View,StyleSheet,Image}  from 'react-native'
import Base64 from '../../page-common/component/Base64';
import { getProductData } from './../apiHelper';

const EachProductRegister = props => {
    const [allValue,setAllValue]=useState({
        loading:false,
        error:"",
        productImage:"",
        productName:""
    })
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

    useEffect(async() => {
        setAllValue({
            ...allValue,
            loading:true
        })
        //props.item.count=undefined
        let result=await getProductData({...props.item,count:undefined})
        if(result.success){
            setAllValue({
                ...allValue,
                productName:result.data.name,
                productImage:arrayBufferToBase64(result.data.image.data),
                loading:false
            })
        }else{
            setAllValue({
                ...allValue,
                loading:false,
                error:"error in server"
            })
        }  
    }, [])

    return(
        <View style={{height:200,justifyContent:'space-evenly'}}>   
            <View style={{width:120,height:120,alignItems:'center',justifyContent:'center',backgroundColor:'#E9E9E9'}}>
                {allValue.loading? <Text>Loading</Text>: <Image source={{uri:'data:image/png;base64,'+allValue.productImage}} style={{width:100,height:100}} />}
            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.heading_text}>Product Name:</Text>
                    <Text style={{left:5}}>{allValue.productName}</Text>  
                </View> 
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.heading_text}>Quantity:</Text>
                    <Text style={{left:5}}>{props.item.count}</Text> 
                </View> 
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    heading_text:{
        fontWeight:'bold'
    }
})


export default EachProductRegister;