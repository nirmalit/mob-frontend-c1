import React from 'react'
import {Text,View,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native'
import home_icon from '../../image/common/home.png'
import course_icon from '../../image/common/course.png'
import gallery_icon from '../../image/common/gallery.png'
import about_us_icon from '../../image/common/about_us.png'
import profile_icon from '../../image/common/profile.png'
import product_icon from '../../image/common/product.png'
const {width,height}=Dimensions.get('screen')

const NavBar = (props) => {
    const activeIcon=()=>{
        if(props.Title==='HOME'){
            return <Image source={home_icon} style={styles.icon} />
        }
        if(props.Title==='PROFILE'){
            return <Image source={profile_icon} style={styles.icon} />
        }
        if(props.Title==='COURSE'){
            return <Image source={course_icon} style={styles.icon}/>
        }
        if(props.Title==='GALLERY'){
            return <Image source={gallery_icon} style={styles.icon}/>
        }
        if(props.Title==='ABOUT US'){
            return <Image source={about_us_icon} style={styles.icon}/>
        }
        if(props.Title==='PRODUCT'){
            return  <Image source={product_icon} style={styles.icon} />

        }
    }
    //console.warn(props)
    return (
        <View style={styles.container}>
            <View style={styles.black_background}></View>
                <View style={styles.header_list_container}>    
                <View style={styles.header_list}>
                        {props.Title!='HOME' && (<TouchableOpacity style={styles.icon_container}  onPress={()=>props.props.navigation.navigate('Loading',{nextPage:"Home"})}>
                            <Image source={home_icon} style={styles.icon} />
                            <Text style={styles.icon_text}>HOME</Text> 
                        </TouchableOpacity>)}
                        
                        {props.Title!='PROFILE' && (<TouchableOpacity style={styles.icon_container} onPress={()=>props.props.navigation.navigate('Loading',{nextPage:"Profile"})}>
                            <Image source={profile_icon} style={styles.icon} />
                            <Text style={styles.icon_text}>PROFILE</Text> 
                        </TouchableOpacity>)}
                        {props.Title!='PRODUCT' && (<TouchableOpacity style={styles.icon_container} onPress={()=>props.props.navigation.navigate('Loading',{nextPage:"Product"})}>
                            <Image source={product_icon} style={styles.icon} />
                            <Text style={styles.icon_text}>PRODUCT</Text> 
                        </TouchableOpacity>)}
                        {props.Title!='COURSE' && (<TouchableOpacity  style={styles.icon_container}  onPress={()=>props.props.navigation.navigate('Loading',{nextPage:"Course"})}>
                            <Image source={course_icon} style={styles.icon}/>
                            <Text style={styles.icon_text}>COURSES</Text> 
                        </TouchableOpacity>)}
                        {props.Title!='GALLERY' && (<TouchableOpacity  style={styles.icon_container}  onPress={()=>props.props.navigation.navigate('Loading',{nextPage:'Gallery'})}>
                            <Image source={gallery_icon} style={styles.icon}/>
                            <Text style={styles.icon_text}>GALLERY</Text> 
                        </TouchableOpacity>)}
                        {props.Title!='ABOUT US' && (<TouchableOpacity  style={styles.icon_container}  onPress={()=>props.props.navigation.navigate('Loading',{nextPage:'AboutUs'})}>
                            <Image source={about_us_icon} style={styles.icon}/>
                            <Text style={styles.icon_text}>ABOUT US</Text> 
                        </TouchableOpacity>)}
                    </View>
                </View>
                <View style={styles.active_header}>
                    {activeIcon()}
                </View>
            <Text style={styles.main_title}>{props.Title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40
    },
    black_background:{
        top:0,
        position:"absolute",
        backgroundColor:"#262626",
        width:width/4,
        height:height/6,
        alignItems:'center',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        transform: [{ scaleX: 4 }],
    },
    header_list_container:{
       top:20,
       //backgroundColor:'white',
       width:width-20,
       height:height/12,
    },
    header_list:{
        flex:1,
        flexDirection:'row'
    },
    active_header:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#09B44D",
        width:width/6,
        height:height/14,
        borderRadius:50,
        top:height/25
    },
    icon_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        //backgroundColor:'red',
        //borderWidth:2,
        //borderColor:'black',
        //width:width/21
    },
    icon_text:{
        color:"white",
        fontWeight:'bold',
        fontSize:10
    },
    icon:{ 
        //width:14,
        //height:25
    },
    main_title:{
        top:height/20
    }
})
export default NavBar;