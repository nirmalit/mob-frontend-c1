import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet}  from 'react-native'
import NavBar from '../page-common/component/NavBar'

//import { removeStoreData } from '../page-common/auth-helper/authSaver'


const AboutUs = (props) => {
   
    return (
        <View>
            <NavBar  Title="ABOUT US" props={{...props}}  />
            <View style={styles.container}>
                {/* <Text>about us PAGE</Text> */}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default AboutUs;