import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet}  from 'react-native'
import NavBar from '../page-common/component/NavBar'
//import { removeStoreData } from '../page-common/auth-helper/authSaver'
const Home = (props) => {
     //console.warn("home",props)
    return (
        <View>
            <NavBar Title="HOME" props={{...props}} />
            <View style={styles.container} >
            {/* <Text>HOME PAGE</Text> */}
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
export default Home;