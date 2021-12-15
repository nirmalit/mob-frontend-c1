import React from 'react'
import reactDom from 'react-dom'
import {Text ,View,TouchableOpacity,StyleSheet}  from 'react-native'
import NavBar from '../page-common/component/NavBar'

//import { removeStoreData } from '../page-common/auth-helper/authSaver'
const Course = (props) => {
    
    return (
        <View>
            <NavBar  Title="COURSE" props={{...props}}  />
            <View style={styles.container}>
                
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        paddingVertical:20,
        fontWeight:"bold"
    },
    
})
export default Course;