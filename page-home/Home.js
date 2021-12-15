import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet, ScrollView,Dimensions,Image}  from 'react-native'
import NavBar from '../page-common/component/NavBar'
import ProductComponent from '../page-product/Product-c'
import product from '../constant/product-list'
import CourseComponent from '../components/course-c'
import gallery from '../constant/gallery-list'
import Gallery from './galley'
import JoinNow from './join-now'
import Products from './products'
import Courses from './course'
const {width,height}=Dimensions.get('screen')
const Home = (props) => {
     //console.warn("home",props)
    return (
        <View style={{height:height}}>

            <NavBar Title="HOME" props={{...props}} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:90}}>
                <Products/>
                <JoinNow/>
                <Gallery/>
                <Courses/>  
            </ScrollView>
            
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
    },
    productHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:5,
    
    },
    link:{
        color:'green',
        textDecorationLine:'underline',
        fontSize:16,
        fontWeight:"700"
    },
    whatsapp:{
        width: 340,
        height:100,
        backgroundColor: "rgba(9, 180, 77, 0.15)",
        borderRadius:10,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    galleryWrapper:{
        padding:5
    },
    courses:{
        width:width,
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        flex:1

    }, button:{
        color:'#fff'
    },
})
export default Home;