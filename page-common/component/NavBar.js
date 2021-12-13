import React from 'react'
import {Text,View,StyleSheet,Dimensions,Image} from 'react-native'
import home_icon from '../../image/common/home.png'
import course_icon from '../../image/common/course.png'
import gallery_icon from '../../image/common/gallery.png'
import about_us_icon from '../../image/common/about_us.png'
const {width,height}=Dimensions.get('screen')

const NavBar = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.black_background}>
                <View style={styles.header_list_container}>
                    <View style={styles.icon_container}>
                        <Image source={home_icon} style={styles.icon} />
                    </View>
                    <View  style={styles.icon}>
                        <Image source={course_icon} style={styles.icon}/>
                    </View>
                    <View  style={styles.icon}>
                        <Image source={gallery_icon} style={styles.icon}/>
                    </View>
                    <View  style={styles.icon}>
                        <Image source={about_us_icon} style={styles.icon}/>
                    </View>
                </View>
            </View>
            <Text>{props.Title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    black_background:{
        backgroundColor:"#262626",
        width:width/4,
        height:height/8,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        transform: [{ scaleX: 5 }],
    },
    header_list_container:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    icon_container:{
       // padding:2
    },
    icon:{
        width:10,
        height:20
    }
})
export default NavBar;