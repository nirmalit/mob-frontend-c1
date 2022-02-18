import React,{useState,useEffect} from 'react';
import {Text,View} from 'react-native'
import { isSignedIn, removeStoreData, storeEmptyData } from './page-common/auth-helper/authSaver';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './page-home/Home';
import IntroPage from './page-intro/IntroPage';
//import SignUp from './page-signUp/SignUp';
import SignUser from './page-signUser/SignUser';
import { isUserSigned } from './page-common/auth-helper/userValidation';
import Product from './page-product/Product';
import HeaderBar from './page-common/component/HeaderBar';
import Course from './page-course/Course';
import Gallery from './page-gallery/Gallery';
import AboutUs from './page-about/AboutUs';
import Otp from './page-otp/Otp';
import Profile from './page-profile/Profile';
import Loading from './page-loading/Loading';
import CourseDetails from './page-course/CourseDetails';
import ProductDetails from './page-product/ProductDetails';
import Myorders from './page-profile/Myorders';
import Mycourses from './page-profile/Mycourses';


const Stack = createNativeStackNavigator();
const App=()=>{
  const [loginScreenFlag,setLoginScreenFlag]=useState(true)
  const [reloadFlag,setReloadFlag]=useState(true)
  const [fromLocation,setFromLocation]=useState("")
  
  const preLoader=async ()=>{
    let isSign=await isSignedIn()
    // console.warn("check",isSign)
      if(isSign==false){
        storeEmptyData()
        setReloadFlag(false)
        setLoginScreenFlag(false)
      }
  }
  const signOutHandler=()=>{
    removeStoreData()
    // console.warn("sign Out")
    setLoginScreenFlag(false)
    setReloadFlag(false)
  }
  useEffect(()=>{
    preLoader()
  },[])
  const changeLoginFlag=()=>{
    setLoginScreenFlag(~(loginScreenFlag))
  }
  const changeReloadFlag=(fromAction)=>{
    if(fromAction==='sign In'){
      setLoginScreenFlag(true)
      setReloadFlag(true)
      setFromLocation('sign In')
    }else{
      setLoginScreenFlag(true)
      setReloadFlag(true)
      setFromLocation('sign Up')
    }
    //console.warn(JSON.stringify(reloadFlag))
  }
  
  
 if(loginScreenFlag===false){
    return(<IntroPage onChangeLoginFlag={changeLoginFlag} />)
  }
  else if(reloadFlag===false){
    return(
    <SignUser onchangeReloadFlag={changeReloadFlag} />)
  }
 else{
    return(
      <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Home" 
          component={Home} 
          options={{ headerBackVisible:false ,
                     headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} />
                  }}
        />
        <Stack.Screen name="OTP" 
          component={Otp} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> 
                    }}
        />
        <Stack.Screen name="Profile" 
          component={Profile} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} displaySignOut={true} />
                    }}
        />
         <Stack.Screen name="Loading" 
          component={Loading} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => null,
                      headerShown:false 
                    }}
        />
        <Stack.Screen name="Product" 
          component={Product} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> 
                    }}
        />
        <Stack.Screen name="Course" 
          component={Course} 
          options={{  headerBackVisible:false, 
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> 
                    }}
        />
        <Stack.Screen name="Gallery" 
          component={Gallery} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> 
                    }}
        />
        <Stack.Screen name="AboutUs" 
          component={AboutUs} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> }}
        />     
        <Stack.Screen name="CourseDetails" 
          component={CourseDetails} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> }}
        />     
        <Stack.Screen name="ProductDetails" 
          component={ProductDetails} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> }}
        />     
        <Stack.Screen name="MyOrderDetails" 
          component={Myorders} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> }}
        />     
        <Stack.Screen name="MyCourseDetails" 
          component={Mycourses} 
          options={{  headerBackVisible:false,
                      headerTitle: (props) => <HeaderBar {...props} onSignOut={signOutHandler} /> }}
        />     
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
export default App; 
