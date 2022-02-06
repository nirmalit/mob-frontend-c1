import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Value } from "react-native-reanimated";
import back_icon from "../image/common/back_icon.png";
import instructor_icon from "../image/course/instructor.png";
import Base64 from "../page-common/component/Base64";
import { purchaseCourse } from "./common/apiHelper";
//import { getData } from './../page-common/auth-helper/authSaver';

const CourseDetails = (props) => {
  const [allValue, setAllValue] = useState({
    error: "",
    loading: "",
    coursePurchased: false,
    courseImage: "",
  });

  useEffect(async () => {
    const arrayBufferToBase64 = (buffer) => {
      let binary = "";
      let bytes = new Uint8Array(buffer);
      let len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      //console.warn('nb',binary)

      return Base64.btoa(binary);
    };
    setAllValue({
      ...allValue,
      courseImage: arrayBufferToBase64(
        props.route.params.courseData.image.data
      ),
    });
    //console.warn(JSON.stringify(await getData()))
  }, []);

  const registerCourse = async () => {
    setAllValue({
      ...Value,
      loading: true,
    });
    let purchaseResult = await purchaseCourse(
      props.route.params.courseData.courseid
    );
    if (purchaseResult.success) {
      setAllValue({
        ...Value,
        loading: false,
        coursePurchased: true,
      });
    } else {
      setAllValue({
        ...Value,
        error: "You had been register already...",
        loading: false,
      });
    }
  };
  const courseInfo = () => {
    return (
      <>
        <View
          style={{
            width: 320,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#ffffff",
              textTransform: "capitalize",
            }}
          >
            {props.route.params.courseData.name}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#ffffff",
              textTransform: "capitalize",
            }}
          >
            ₹{props.route.params.courseData.price}
          </Text>
        </View>
        <View style={style.horizontalLine}></View>
        <Text
          style={{
            alignSelf: "flex-start",
            fontWeight: "bold",
            color: "#262626",
          }}
        >
          Course Details
        </Text>
        <Text
          style={{
            alignSelf: "flex-start",
            color: "#ffffff",
            textTransform: "capitalize",
          }}
        >
          {props.route.params.courseData.description}
        </Text>
        <View style={{width:300,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
            <View style={{width:20,height:20,right:20}}>
                <Image source={instructor_icon} style={{width:30,height:30}} />
            </View>
          <Text style={{fontWeight:'bold',top:5}}>{props.route.params.courseData.instructor}</Text>
        </View>
        <TouchableOpacity
          onPress={registerCourse}
          style={{
            width: 172,
            height: 45,
            borderRadius: 20,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
      </>
    );
  };
  if (allValue.coursePurchased || allValue.loading || allValue.error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={allValue.loading?{display:'none'}:{
            position: "absolute",
            alignSelf: "flex-start",
            top: 30,
            left: 20,
          }}
          onPress={() => props.navigation.goBack()}
        >
          <Image source={back_icon} />
        </TouchableOpacity>
        {allValue.coursePurchased ? (
          <Text style={{ color: "black", fontWeight: "bold" }}>
            Successfully Register for this course,We will contact you soon..
          </Text>
        ) : allValue.error ? (
          <Text style={{ color: "red" }}>{allValue.error}</Text>
        ) : (
          <Text style={{ color: "#B8AFAF" }}>LOADING..</Text>
        )}
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          style={{ alignSelf: "flex-start", top: 30, left: 20 }}
          onPress={() => props.navigation.goBack()}
        >
          <Image source={back_icon} />
        </TouchableOpacity>
        <View
          style={allValue.loading ? { display: "none" } : style.imageContainer}
        >
          <View style={style.courseImgWrapper}>
            <Image
              source={{
                uri: "data:image/png;base64," + allValue.courseImage,
              }}
              style={style.courseImg}
            />
          </View>
        </View>
        <View style={style.greenWrapper}>{courseInfo()}</View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  horizontalLine: {
    backgroundColor: "#FFFFFF",
    width: 336,
    height: 1,
  },
  greenWrapper: {
    backgroundColor: "#09B44D",
    width: 369,
    height: 490,
    borderRadius: 20,
    top: 20,
    alignItems: "center",
    padding: 10,
    justifyContent: "space-evenly",
  },
  courseImgWrapper: {
    width: 100,
    height: 100,
  },
  courseImg: {
    width: 100,
    height: 100,
    // zIndex:10,
    //marginLeft:10,
    //position:'absolute',
  },
  imageContainer: {
    marginTop: 50,
    width: 200,
    height: 150,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    //borderRadius:,
    //backgroundColor:'yellow',
    elevation: 5,
    shadowColor: "#B8AFAF",
    borderWidth: 0.1,
  },
});

export default CourseDetails;
