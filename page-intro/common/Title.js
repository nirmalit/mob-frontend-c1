import React from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'
const Title = ({title,description}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.descriptionStyle}>{description}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
   container:{
        margin:0
   },
   titleStyle:{
       fontSize:50,
   },
   descriptionStyle:{
       fontSize:20,
   }
})
export default Title;