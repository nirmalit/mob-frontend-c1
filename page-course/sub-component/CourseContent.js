import React from 'react';
import { Text ,View,TouchableOpacity,StyleSheet, }  from 'react-native'


const CourseContent = () => {
  return(
  <View style={styles.container}>
       
        <View style={styles.bottomWrapper}>
            <Text style={styles.contentFont}>Are you an Industrial Expert..?</Text>
            <Text style={styles.contentFont}>Looking for perfect place to share your Knowledge</Text>
            <Text style={styles.contentFont}>Come, Let us work together...</Text>
        </View>
        <TouchableOpacity style={{marginTop:10,backgroundColor:'#09B44D',height:45,width:166,borderRadius:25,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Reach Out</Text>
        </TouchableOpacity>
  </View>)
};

const styles=StyleSheet.create({
    container:{
        marginTop:40,
        flex:1,
        padding:1,
        alignItems:'center',
        justifyContent:'center'
    },
    bottomWrapper:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    headerFont:{
        fontWeight:'bold',
        fontSize:16,
    },
    contentFont:{
        fontWeight:'bold',
        fontSize:14
    }
});

export default CourseContent;