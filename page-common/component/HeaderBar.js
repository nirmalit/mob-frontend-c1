import React,{useState} from 'react'
import {View,Text,Image,Dimensions,StyleSheet,TouchableOpacity} from 'react-native'
import close from '../../image/common/close.png'
import logo from '../../image/common/logo.png'
import logOut from '../../image/common/log_out1.png'

const {width,height}=Dimensions.get('screen')
const HeaderBar = (props) => {

    const [showButton,setShowButton]=useState(false)
    console.warn("hB",props)
    return (
        <View style={styles.container}> 
            <View style={styles.header_logo}><Image source={logo} style={styles.image_logo}/></View>
            {showButton &&( 
                <View style={styles.sign_out_container}>
                    <TouchableOpacity onPress={props.onSignOut} style={styles.sign_out_btn}><Text>SIGN OUT</Text></TouchableOpacity>
                    <View style={{marginLeft:20}}><TouchableOpacity onPress={()=>setShowButton(false)} ><Image source={close} /></TouchableOpacity></View>
                </View>)}
            {showButton==false && props.children==="Profile" && <View style={styles.sign_out_hover}><TouchableOpacity onPress={()=>setShowButton(true)}><Image source={logOut} /></TouchableOpacity></View>}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:width,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around'
    },
    header_logo:{
        //marginLeft:width/5
    },
    image_logo:{
        width:79,
        height:34
    },
    sign_out_btn:{
        backgroundColor:'#ffb3b3',
        borderColor:'#ffe6e6',
        borderWidth:2,
        borderRadius:20,
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    sign_out_container:{
        flexDirection:'row',
        alignItems:'center'
    },
    sign_out_hover:{
        //
    }
})

export default HeaderBar; 