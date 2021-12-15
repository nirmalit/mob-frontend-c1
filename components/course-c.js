import React, { useState, useEffect } from 'react';
import {Text,View,ScrollView,StyleSheet,Dimensions,Image,TouchableOpacity,TextInput} from 'react-native'

const CourseComponent = (props) => {
    return(
        <View style={styles.course}>
            <View >
                <Image style={{width:90,height:100, borderRadius:10}} source={props.item.imgUrl}/>
            </View>
            <Text style={styles.title}>
                {props.item.name}
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:2,
        alignItems:'center',
        justifyContent:'center',
    },
    course:{
        height:150,
        width:110,
        backgroundColor:"#E9E9E9",
        padding:10,
        borderRadius:10,
        marginBottom:10
        
        
    },
    title:{
        fontSize:14,
        fontWeight:"600"
    }

})
export default CourseComponent