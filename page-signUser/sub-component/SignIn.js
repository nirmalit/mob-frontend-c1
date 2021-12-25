import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Keyboard
} from "react-native";
import backIcon from "../../image/common/back_icon.png";
import validator from 'validator'
import { apiSignIn, demo } from "./../common/apiHelper";
import { storeData } from "./../../page-common/auth-helper/authSaver";

const { width, height } = Dimensions.get("screen");
const SignIn = (props) => {
  const [allValue, setAllValue] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false
  });
 
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      props.onKeyboardFlag(true)
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      props.onKeyboardFlag(false)
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const changeHandler = (name, inputValue) => {
    setAllValue({
      ...allValue,
      [name]: inputValue,
    });
  };

  const checkField = (email, password) => {
    if (email === "") {
      setAllValue({
        ...allValue,
        loading: false,
        error: "Email Field is empty",
      });
      return false;
    }
    if(!validator.isEmail(email)){
      setAllValue({
        ...allValue,
        loading: false,
        error: "Enter Valid Email ID"
      });
      return false;
    }
    if (password === "") {
      setAllValue({
        ...allValue,
        loading: false,
        error: "Password Field is empty",
      });
      return false;
    }
    
    return true;
  };

  const performSignIn = async () => {
    const { email, password } = allValue;

    let isFieldAreValid = checkField(email, password);
    if (isFieldAreValid) {
      setAllValue({
        ...allValue,
        loading: true,
      });
      //let rr=await demo()
      let result = await apiSignIn({ email, password });
      if (result.success === false) {
        setAllValue({
          ...allValue,
          loading: false,
          error: result.msg,
        });
      } else {
        let temp={ email: email, userToken: result.data.Token }
        //console.warn("sign IN",temp)
        storeData(temp);
        setAllValue({
          ...allValue,
          loading: false,
          success: true,
        });
        props.onSignedSuccess();
      }
    }

    //console.warn("result",result)
  };

  const keyBoardActive=()=>{

  }
  if (allValue.error === "" && allValue.loading === false) {
    return (
      <View style={style.container}>
        <TextInput
          style={style.input_field}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          textContentType="emailAddress"
          onChangeText={(text) => changeHandler("email", text)}
        />
        <TextInput
          style={style.input_field}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          textContentType="password"
          onChangeText={(text) => changeHandler("password", text)}
          secureTextEntry={true}
        />
        <View style={style.bottom}>
          <TouchableOpacity style={style.green_button} onPress={performSignIn}>
            <Text style={style.text_in_green_button}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.bottom}>
            <Text style={{ textAlign: "center", color: "#FFFFFF" }}>
              FORGET PASSWORD?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } 
  else if (allValue.error !== "") {
    return (
      <View style={style.container_error}>
        <View>
          <TouchableOpacity
            onPress={() => setAllValue({ ...allValue, error: "" })}
          >
            <Image source={backIcon} />
          </TouchableOpacity>
        </View>
        <View style={style.show_error}>
          <Text style={style.error_text}>{allValue.error}</Text>
        </View>
      </View>
    );
  } else if (allValue.loading) {
    return (
      <View style={style.loading_container}>
        <Text
          style={{ textAlign: "center", color: "#FFFFFF", fontWeight: "bold" }}
        >
          LOADING ....
        </Text>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  input_field: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 10,
    color: "#fff",
  },
  green_button: {
    backgroundColor: "#09B44D",
    borderRadius: 20,
    justifyContent: "center",
    width: 305,
    height: 45,
  },
  text_in_green_button: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  empty_button: {
    color: "#FFFFFF",
    justifyContent: "center",
    width: 340,
    height: 45,
  },
  bottom: {
    marginTop: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  container_error: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    width: 305,
  },
  show_error: {
    borderColor: "#ffe6e6",
    backgroundColor: "#ffb3b3",
    borderWidth: 1,
    height: 200,
    borderRadius: 20,
    justifyContent: "center",
    margin: 10,
    marginTop: 40,
  },
  error_text: {
    color: "#e60000",
    textAlign: "center",
  },
  loading_container: {
    width: width - width / 5,
    height: height / 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignIn;
