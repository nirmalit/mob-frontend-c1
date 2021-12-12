import React from 'react'
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import { Col, Grid } from "react-native-easy-grid"
const {width,height}=Dimensions.get('screen')

const TogglerTab = (props) => {
    return (
        <View style={style.mini_white_box}>
            <Grid>
                <Col style={(props.actives==='sign in')?style.green_button:style.white_button}>
                    <TouchableOpacity onPress={()=>props.onChangeToggle('sign in')}>
                        <Text style={(props.actives==='sign in')?style.text_in_green_button:style.text_in_white_button}>SIGN IN</Text>
                    </TouchableOpacity>
                </Col>
                <Col style={(props.actives==='sign up')?style.green_button:style.white_button}>
                    <TouchableOpacity onPress={()=>props.onChangeToggle('sign up')}>
                        <Text style={(props.actives==='sign up')?style.text_in_green_button:style.text_in_white_button}>SIGN UP</Text>
                    </TouchableOpacity>
                </Col>
            </Grid>
        </View>
    )
}

const style=StyleSheet.create({
    mini_white_box:{
        width:340,
        height:51,
        padding:2,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginLeft:width/13,
        marginTop:width/11
    },
    green_button:{
        backgroundColor:'#09B44D',
        borderRadius:20,
        justifyContent:'center'
    },
    white_button:{
        justifyContent:'center'
    },
    text_in_green_button:{
        textAlign:'center',
        color:'#FFFFFF'
    },
    text_in_white_button:{
        textAlign:'center',
        color:'#09B44D'
    }
})

export default TogglerTab;