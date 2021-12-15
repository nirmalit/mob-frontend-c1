import React from 'react'
import {Text ,View,TouchableOpacity,StyleSheet, ScrollView,Dimensions,Image}  from 'react-native'
const {width,height}=Dimensions.get('screen')
const Courses = (props) => {
     //console.warn("Courses",props)
    return (
        <View>
            <View style={styles.productHeader}>
                <Text style={{fontSize:16,fontWeight:"700"}}>Course</Text>
                <TouchableOpacity> 
                    <Text style={styles.link}>
                        View all
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.coursesWrapper}>
                <View style={{  height:180, backgroundColor:"#fff",  margin:10,borderRadius:10,padding:10,}}>
                <View style={styles.courses}>
                    <View >
                        <Image style={styles.courseImage} source={require('../image/common/cyber-security.jpeg')}/>
                    </View>
                    <View style={{paddingHorizontal:30}}>
                        <Text>CYBER SECURITY</Text>
                        <View style={styles.courseInfo}>
                            <View style={styles.schedule}>
                                <Image style={styles.sceduleIcon}  source={require('../image/common/calendar.png')}/> 
                                <Text style={styles.scheduleText}>10-10-2021</Text>
                            </View>
                            <View style={styles.schedule}>  
                                <Image style={styles.sceduleIcon}   source={require('../image/common/clock.png')}/>
                                <Text style={styles.scheduleText}>7PM to8PM</Text>
                            </View>
                        </View>
                        
                    </View>
                    
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={{backgroundColor:"#fff",height:25,width:100,alignItems:"center",borderRadius:10,borderWidth:1,borderColor:'#09B44D'}}> 
                        <Text style={styles.button} >View details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#fff",height:25,width:100,alignItems:"center",borderRadius:10,borderWidth:1,borderColor:'#09B44D'}}> 
                        <Text style={styles.button} >Register now</Text>
                    </TouchableOpacity>
                </View>
                </View>
               
                
              
            </View>

            
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:2,
    },
    productHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:5,
    
    },
    link:{
        color:'green',
        textDecorationLine:'underline',
        fontSize:16,
        fontWeight:"700"
    },
    courseInfo:{
        width: 170,
        height:60,
        backgroundColor: "#E9E9E9",
        borderRadius:10,
        marginTop:20,
        justifyContent:'space-evenly'
    },
    courseImage:{
        padding:5,
        width:100,
        height:100,
        borderRadius:10
    },
    courses:{
        width:width-40,
        flexDirection:'row'

    }, button:{
        color:'#09B44D',
        alignContent:'center',
        justifyContent:'center'
    },
    schedule:{
        flexDirection:'row',
        alignItems:'center'
    },
    sceduleIcon:{
        marginHorizontal:8
        ,width:15,
        height:15
    },
    scheduleText:{
        fontWeight:'bold'
    },

    coursesWrapper:{
        width:width-20,
        height:200,
        backgroundColor:"rgba(9, 180, 77, 0.15)",
        margin:10,
        borderRadius:10
    },
    buttonWrapper:{
        flexDirection:'row',
        paddingVertical:20,
        justifyContent:'space-evenly'

    }

})
export default Courses;