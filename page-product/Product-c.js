import { View,StyleSheet, Text,TouchableOpacity, Image } from "react-native"
import React, { useEffect } from 'react'

const ProductComponent = (props) => {

    return(
        <View style={{position:'relative',paddingVertical:6}}>
            <View style={style.productImgWrapper}>
                <Image source={props.product.imgUrl} style={style.productImg}/>
            </View>
            <View style={style.productInfo}>
                <View style={style.productDetailWrapper}>
                    <Text style={style.productDetail}>{props.product.productName}</Text>
                    <Text style={style.productDetail}>₹ {props.product.price}</Text>
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
        height:120,
        width:100,
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
        left:6,
        top:7

    }
})
export default ProductComponent