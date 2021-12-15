import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet, ScrollView,Dimensions,Image}  from 'react-native'
import NavBar from '../page-common/component/NavBar'
import ProductComponent from '../page-product/Product-c'
import product from '../constant/product-list'
import CourseComponent from '../components/course-c'
import gallery from '../constant/gallery-list'
import Gallery from './galley'
import JoinNow from './join-now'
const {width,height}=Dimensions.get('screen')
const Products = (props) => {
     //console.warn("Products",props)
    return (

                <View>
                    <View style={styles.productHeader}>
                        <Text style={{fontSize:16,fontWeight:"700"}}>Products</Text>
                    <TouchableOpacity> 
                        <Text style={styles.link}>
                            View all
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <ScrollView horizontal={true} disableScrollViewPanResponder={false}>
                        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',  paddingVertical:3}}>
                        
                            {product.map((item)=>{
                                        return (
                                            <View style={{paddingHorizontal:5}}>
                                                <ProductComponent product={item}/>
                                            </View>
                                        )
                                    })}
                        </View>
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
export default Products;