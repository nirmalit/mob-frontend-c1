import React,{useState,useEffect} from 'react';
import {Text,View,Dimensions,Image,TouchableOpacity}  from 'react-native'
import { getCourseData } from './apiHelper';
import EachCourseRegister from './subComponent/EachCourseRegister';
import back_icon from '../image/common/back_icon.png'


const {width}=Dimensions.get('screen')
const Mycourses = props => {

    const [allValue,setAllValue]=useState({
        loading:false,
        myCourses:[],
        success:"",
        error:""
    })
    useEffect(async() => {
        setAllValue({...allValue,loading:true})
        for (const eachCourse of props.route.params.courseData){
            //console.log('<<<--',eachCourse)
            let eachCourseDetail=await getCourseData(eachCourse)
            if(eachCourseDetail.success){

                let temp=allValue.myCourses
                temp.push(eachCourseDetail.data)
                setAllValue({
                ...allValue,
                myCourses:temp
                })
                //console.log("--<<<>>>>",JSON.stringify(temp.name));
            }
            
        }
        setAllValue({...allValue,loading:false})

    }, []);
    if(allValue.loading){
        return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Loading...</Text>
        </View>
        )
    }else{
        return(
            <View>
                <TouchableOpacity
                style={{
                    position: "absolute",
                    alignSelf: "flex-start",
                    top: 10,
                    left: 20,
                }}
                onPress={() => props.navigation.goBack()}
            >
                <Image source={back_icon} />
            </TouchableOpacity>
                <Text style={{top:20,alignSelf:'center',fontWeight:'bold'}}>All My Register Courses</Text>
                <View style={{top:30,width:width,flexDirection:'row',flex:1,flexWrap:'wrap',justifyContent:'space-evenly'}}>
                {allValue.myCourses.map((eachCourse,i)=>{
                    return <View key={i}style={{marginTop:20}}>
                        <EachCourseRegister course={eachCourse} />
                    </View>
                })}
                </View>   
            </View>
            )

    }
};
export default Mycourses;