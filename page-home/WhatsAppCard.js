import React from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import whatsAppIcon from '../image/home/home_whatsApp_icon.png'
const WhatsAppCard = () => {
    return (
        <View style={{alignItems:'center',justifyContent:'center', top:50}}>
            <View style={styles.backgroundShade}>   
            </View>
            <View style={styles.backgroundBox}>
                <View>
                    <Image source={whatsAppIcon} />
                </View>
                <View>
                    <Text style={styles.textStyle}>To Join to our</Text>
                    <Text style={styles.textStyle}>Whatsapp Group?</Text>
                    <TouchableOpacity style={{top:10,backgroundColor:'#09B44D',width:108,height:25,display:'flex',justifyContent:"center",alignItems:"center",borderRadius:10}}> 
                            <Text style={styles.button} > Join Now </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        
    )
}
const styles=StyleSheet.create({
    backgroundShade:{
        width:369,
        height:153,
        backgroundColor:"#09B44D",
        opacity:0.15,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute'
    },
    backgroundBox:{
        backgroundColor:'#FFFFFF',
        width:347,
        height:129,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    button:{
        color:"#ffffff"
    },
    textStyle:{
        fontFamily:'',
        fontSize:20,
        fontWeight:'bold',
    }
})
export default WhatsAppCard;