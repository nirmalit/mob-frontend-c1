import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet}  from 'react-native'
import NavBar from '../page-common/component/NavBar'

//import { removeStoreData } from '../page-common/auth-helper/authSaver'


const Gallery = (props) => {
   
    return (
        <View>
            <NavBar  Title="GALLERY" props={{...props}}  />
            <View style={styles.container}>
                {/* <Text>Gallery PAGE</Text> */}
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
export default Gallery;