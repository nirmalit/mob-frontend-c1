import React from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'


const SignIn = () => {
    return (
        <View style={style.container}>
            <TextInput style={style.input_field} placeholder="Email" placeholderTextColor="#FFFFFF" textContentType="emailAddress" />
            <TextInput style={style.input_field} placeholder="Password" placeholderTextColor="#FFFFFF" textContentType="password" secureTextEntry={true} />
            <View style={style.bottom}>
                <TouchableOpacity style={style.green_button}>
                    <Text style={style.text_in_green_button}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.bottom}>
                    <Text style={{textAlign:'center',color:'#FFFFFF'}}>FORGET PASSWORD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        paddingLeft:30,
        paddingRight:30
    },
    input_field:{
        borderBottomColor:"#FFFFFF",
        borderBottomWidth:2,
        marginTop:20,
        marginBottom:10
    },
    green_button:{
        backgroundColor:'#09B44D',
        borderRadius:20,
        justifyContent:'center',
        width:340,
        height:45
    },
    text_in_green_button:{
        textAlign:'center',
        color:'#FFFFFF'
    },
    empty_button:{
        color:'#FFFFFF',
        justifyContent:'center',
        width:340,
        height:45
    },
    bottom:{
        marginTop:75
    }
})
export default SignIn;