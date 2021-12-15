import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet, ScrollView,Dimensions,Image}  from 'react-native'
import NavBar from '../page-common/component/NavBar'
import ProductComponent from '../page-product/Product-c'
import product from '../constant/product-list'
import CourseComponent from '../components/course-c'
import gallery from '../constant/gallery-list'
import Gallery from './galley'
const {width,height}=Dimensions.get('screen')
const JoinNow = (props) => {
     //console.warn("home",props)
    return (

                <View style={styles.whatsapp}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:70,height:70, alignItems:'center'}} source={require('../image/common/whatsapp.png')}/> 
                    </View>
                    <View style={{alignItems:'center',justifyContent:'space-evenly'}}>
                        <View>
                            <Text style={{fontSize:20}}> 
                                To Join to our 
                            </Text>
                            <Text style={{fontSize:20}}>Whatsapp Group?</Text>
                        </View>
                      
                        <TouchableOpacity style={{backgroundColor:"#09B44D",height:25,width:100,display:'flex',justifyContent:"center",alignItems:"center",borderRadius:10}}> 
                            <Text style={styles.button} > Join now </Text>
                        </TouchableOpacity>
                    </View>
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
export default JoinNow;