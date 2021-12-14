import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet, ScrollView}  from 'react-native'
import NavBar from '../page-common/component/NavBar'
import ProductComponent from '../page-product/Product-c'
import product from '../constant/product-list'
const Home = (props) => {
     //console.warn("home",props)
    return (
        <View>

            <NavBar Title="HOME" props={{...props}} />
 
            <ScrollView horizontal={true}>
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
    }
})
export default Home;