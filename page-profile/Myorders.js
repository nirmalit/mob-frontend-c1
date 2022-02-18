import React from 'react';
import {Text ,View,ScrollView,StyleSheet,Dimensions,TouchableOpacity,Image}  from 'react-native'
import EachProductRegister from './subComponent/EachProductRegister';
import back_icon from '../image/common/back_icon.png'

const {width}=Dimensions.get("screen")
const Myorders = props => {
   // console.warn("--<-->>",props.route.params.productData)
    return(
        <View style={{flex:1}}>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    alignSelf: "flex-start",
                    top: 10,
                    left: 20,
                }}
                onPress={() => props.navigation.goBack()}
            >
                <Image source={back_icon} />
            </TouchableOpacity>
            <Text style={{alignSelf:'center',fontWeight:'bold',top:10,fontSize:20}}>My Orders</Text>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <ScrollView style={{top:40}}>
                    {props.route.params.productData.map((eachPlacedProduct,i)=>{
                        let d=new Date(eachPlacedProduct.createdAt)
                        return(<View style={styles.card} key={eachPlacedProduct.orderid}>
                            <View>
                                <EachProductRegister item={eachPlacedProduct.Items[0]}/>
                            </View>
                            <View style={{justifyContent:'space-evenly'}}>
                                <View>
                                    <Text style={{color:'black',fontWeight:'bold'}}>Delivery Address :</Text>
                                    <Text style={{color:'black'}}>{eachPlacedProduct.Address}</Text>
                                </View>
                                <View>
                                    <Text style={{color:'black',fontWeight:'bold'}}>Order Status :</Text>
                                    <Text style={{color:'black'}}>{eachPlacedProduct.Status}</Text>
                                </View>
                                <View>
                                    <Text style={{color:'black',fontWeight:'bold'}}>Order Placed At:</Text>
                                    <Text style={{color:'black'}}>{d.toDateString()}</Text>
                                </View>
                            </View>
                            </View>)
                    })}
                </ScrollView>
            </View>
        </View>
        )
};

const styles=StyleSheet.create({
    card:{
        marginTop:10,
        width:width-10,
        height:200,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderRadius:20
    }
})
export default Myorders;