import React,{useState,useEffect} from 'react'
import { Text ,View,TouchableOpacity,StyleSheet,ScrollView,Dimensions }  from 'react-native'
import NavBar from '../page-common/component/NavBar'
import SubLoadingAnimation from '../page-common/component/SubLoading';
import CourseView from './Course-h';
import { apiGetAllCourses } from './common/apiHelper';

const {width}=Dimensions.get('screen')
//import { removeStoreData } from '../page-common/auth-helper/authSaver'
import CourseContent from './sub-component/CourseContent';

const Course = (props) => {
    
    const [allValues,setAllValues]=useState({
        error:"",
        loading:false,
        allCourses:[]
    });

    useEffect(async()=>{
        setAllValues({
            ...allValues,
            loading:true
        })
        let resultValue=await apiGetAllCourses()
        if(resultValue.success){
            setAllValues({
                ...allValues,
                loading:false,
                allCourses:resultValue.data
            })
        }else{
            setAllValues({
                ...allValues,
                loading:false,
                error:"Error in Loading Data, Try after some times"
            })
        }
    },[])

    return (
        <ScrollView>
            <NavBar  Title="COURSE" props={{...props}}  />
            <View style={styles.container}>
            <Text style={styles.headerFont}>Our Course and Training Programs</Text>
                <View style={{width:width,flexDirection:'row',flex:1,flexWrap:'wrap',justifyContent:'space-evenly'}}>
                    {(allValues.loading)?(<SubLoadingAnimation message="All Latest Course" />):(allValues.allCourses.map((eachCourse,i)=>{
                        return(
                            <View key={eachCourse.courseid} style={{marginTop:20}}>
                                <CourseView course={eachCourse} props={{...props}} />
                            </View>
                        )
                    }))}
                </View>
                <CourseContent />
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        padding:2,
    },
    header:{
        paddingVertical:20,
        fontWeight:"bold"
    },
    headerFont:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:16,
    },
})
export default Course;