import NavBar from '../page-common/component/NavBar'
import React, { useState, useEffect } from 'react';
import {Text,View,ScrollView,StyleSheet,Dimensions,Image,TouchableOpacity,TextInput} from 'react-native'
const {width,height}=Dimensions.get('screen')
import aboutus from '../image/common/aboutus.png'
import aboutus_student from '../image/common/aboutus_student.png'
import aboutus_profession from '../image/common/aboutus_profession.png'
import aboutus_farmer from '../image/common/aboutus_farmer.png'
import aboutus_asset from '../image/common/aboutus_assest.png'
//import { removeStoreData } from '../page-common/auth-helper/authSaver'


const AboutUs = (props) => {
   
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={aboutus} />
                <Text style={styles.content}>Are You</Text>
                <View style={styles.image_asset} >
                    <View style={styles.imagewrapper}>
                        <Text style={styles.occupation}>Student?</Text>
                        <Image style={styles.image_size}source={aboutus_student}/>
                    </View>
                    <View style={styles.imagewrapper}>
                        <Text style={styles.occupation}>Profession?</Text>
                        <Image style={styles.image_size} source={aboutus_profession}/>
                    </View>
                    <View style={styles.imagewrapper}> 
                        <Text style={styles.occupation}>Farmer?</Text>
                        <Image style={styles.image_size} source={aboutus_farmer}/>
                    </View>
 
                </View>
                <Text style={styles.abouttext}>On 14th February 2020, MANVAASAM was founded by a group of volunteers [Farmers, working professionals] as an organization, 
                    which is involved in social, environmental, training, and technical activities. 
                    The goal of the organization is to uplift the lifestyle of the farmers and provide them a monthly salary. 
                    The motto of MANVAASAM is to plant 1lakh trees before 2023</Text>
                <Text style={styles.content}>No Matter what you are</Text>
            
                <View> 
                    <Image style={styles.image_asset1}  source={aboutus_asset}/>
                </View>
                <Text style={styles.content}>Let us work together for the Change</Text>
                <View style={{width:150, marginTop:10}}>
                <TouchableOpacity style={{backgroundColor:"#09B44D",height:35,display:'flex',justifyContent:"center",alignItems:"center",borderRadius:10}}> 
                    <Text style={styles.verify} > Join with us </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View>
                    <View style={styles.footer_admininfo}>
                        <Image style={styles.footerImage} source={require('../image/common/whatsapp.png')}/>
                        <Text style={styles.footertext} >+91 6380091001</Text>
                    </View>
                    <View style={styles.footer_admininfo}>
                        <Image style={styles.footerImage} source={require('../image/common/gmail.png')}/>
                        <Text style={styles.footertext} >training@manvaasam.com</Text>
                    </View>
              
                </View>
                <View>
                    <Text style={styles.footertext} > Join with us </Text>
                </View>
            </View>
            
            
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
        alignItems:'center',
        justifyContent:'center',
    },
    abouttext:{
        paddingVertical:15,
        paddingHorizontal:10,
        fontWeight:"bold",
        lineHeight:18
    },
    image:{
        alignItems:'center',
        width:350,
        height:250
    },
    imagewrapper:{
        alignItems:'center',
        width:120,
        height:100
    },
    image_asset1:{
        alignItems:'center',
        width:150,
        height:150
    },
    image_asset:{
        display:'flex',
        paddingTop:5,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    content:{
        paddingTop:5,
        alignItems:'center',
        fontSize:25
    },
    occupation:{
        marginHorizontal:10,
        alignItems:'center',
        fontSize:16,
        fontWeight:"500"
    },
    image_size:{
        width:80,
        height:80
    },
    verify:{
        color:"#fff",
        alignItems:"center",
        fontWeight:"bold",
        fontSize:17 
    },
    footer:{
        backgroundColor:"#09B44D",
        height:75,
        width:width,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:10,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        marginTop:10
    },
    footerImage:{
        width:10,
        height:10,
        marginRight:6
    },
    footer_admininfo:{
        flexDirection:'row',
        alignItems:'center',
       
    
    }

})
export default AboutUs;