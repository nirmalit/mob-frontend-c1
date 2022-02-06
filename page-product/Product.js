import React,{useState,useEffect} from 'react'
import {Text,View,TextInput,StyleSheet,Image,ScrollView,Dimensions} from 'react-native'
import NavBar from '../page-common/component/NavBar'
import ProductComponent from './Product-c'
import { apiGetAllProducts } from './comman/apiHelper';
import SubLoadingAnimation from './../page-common/component/SubLoading';

const {width,height}=Dimensions.get('screen')



const Product = (props) => {
    const [allValues,setAllValues]=useState({
        error:"",
        loading:false,
        allProducts:[]
    });
    useEffect(async()=>{
        setAllValues({
            ...allValues,
            loading:true
        })

        let value=await apiGetAllProducts()
        console.warn(value.success)
        if(value.success){
            setAllValues({
                ...allValues,
                loading:false,
                allProducts:value.data
            })
        }else{

            setAllValues({
                ...allValues,
                error:"Try Again Later",
                loading:false
            })

        }
        
    },[])
    return (
        <ScrollView>
            <NavBar Title="PRODUCT" props={{...props}} />
            <View style={style.filterWrapper}>
                <View style={{position:'relative'}}>
                    <TextInput style={style.input_field} placeholder="Search" placeholderTextColor="#BEBEBE" textContentType="emailAddress" />
                    <View style={style.searchWrapper}>
                        <Image source={require('../image/common/search.png')} style={style.searchLogo} />
                    </View>
                </View>
                <View style={style.filter}> 
                    <Image source={require('../image/common/filter.png')} style={style.filterLogo} />
                </View>
            </View>
            {(allValues.loading)?(<SubLoadingAnimation message="All Product Data" />):(
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:90}}>
                    <View style={style.productWrapper}>
                        {allValues.allProducts.map((item,i)=>{
                            return (<ProductComponent product={item} key={item.productid} props={{...props}}/>)
                        })}
                    </View>
                </ScrollView>)}
           
           
        </ScrollView>
    )
}


const style=StyleSheet.create({
    container:{
        paddingRight:30,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    input_field:{
        color:'#FFFFFF',
        backgroundColor: '#E9E9E9',
        marginTop:10,
        marginBottom:10,
        width:290,
        borderRadius:8,
        height:40,
        paddingHorizontal:20
    },
    filterWrapper:{
        marginTop:40,
        display:"flex",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-around",
        flexWrap:'wrap'
    },
    filter:{
        backgroundColor:"#262626",
        width:40,
        height:40,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    filterLogo:{
        width:25,
        height:25,
        alignItems:"center",
        justifyContent:'center',
    },
    searchLogo:{
        position:'absolute',
        right:6,
        width:15,
        height:15,
        top:7,
    },
    searchWrapper:{
        position:'absolute',
        width:30,
        height:30,
        backgroundColor:'#09B44D',
        right:12,
        top:15,
        borderRadius:8
    },
    productWrapper:{
        width:width,
        // height:height,
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        flex:1

       
    }
})
export default Product;