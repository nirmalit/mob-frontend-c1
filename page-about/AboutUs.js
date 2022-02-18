import NavBar from "../page-common/component/NavBar";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
const { width, height } = Dimensions.get("screen");

import aboutus_profession from "../image/common/profession.png";
import aboutus_farmer from "../image/common/farmer.png";
import aboutus_asset from "../image/common/team.png";
import student from "../image/common/student.png";
import { Linking } from "react-native";
//import { removeStoreData } from '../page-common/auth-helper/authSaver'

const AboutUs = (props) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <NavBar Title="ABOUT US" props={{ ...props }} />

      <View style={styles.container}>
        <View style={styles.bg}>
          <Text style={styles.main_content}>
            Started By A Group Of Volunteers
          </Text>
          <Text style={styles.abouttext}>
            On 14th February 2020, MANVAASAM was founded by a group of
            volunteers [Farmers, working professionals] as an organization,
            which is involved in social, environmental, training, and technical
            activities. The goal of the organization is to uplift the lifestyle
            of the farmers and provide them a monthly salary.
            
          </Text>
          <Text style={styles.abouttext}>
            "The motto of MANVAASAM is to plant 1lakh trees before 2023"
          </Text>
        </View>
        <Text style={styles.content}>Are You </Text>
        <View style={{ height: 550 }}>
          <View style={styles.bg_image}>
            <View style={styles.imagewrapper}>
              <Text style={styles.occupation}>Student?</Text>
              <Image style={styles.image_size} source={student} />
            </View>
          </View>
          <View style={styles.bg_image}>
            <View style={styles.imagewrapper}>
              <Text style={styles.occupation}>Professional?</Text>
              <Image style={styles.image_size} source={aboutus_profession} />
            </View>
          </View>
          <View style={styles.bg_image}>
            <View style={styles.imagewrapper}>
              <Text style={styles.occupation}>Farmer?</Text>
              <Image style={styles.image_size} source={aboutus_farmer} />
            </View>
          </View>
        </View>

        <View style={styles.conclusion}>
          <Text style={styles.content}>No Matter what you are</Text>
          <View style={{ marginTop: 10 }}>
            <Image style={styles.image_size} source={aboutus_asset} />
          </View>
          <Text style={styles.content}>
            Let us work together for the Change
          </Text>
          <View style={styles.joinus_wrapper}>
            <TouchableOpacity style={styles.joinus}>
              <Text style={styles.verify}> Join with us </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <View>
            <View style={styles.footer_admininfo}>
              <Image
                style={styles.footerImage}
                source={require("../image/common/whatsapp.png")}
              />
              <Text
                style={styles.footertext}
                onPress={() =>
                  Linking.openURL(
                    "https://api.whatsapp.com/send?phone=+916380091001"
                  )
                }
              >
                +91 6380091001
              </Text>
            </View>
            <View style={styles.footer_admininfo}>
              <Image
                style={styles.footerImage}
                source={require("../image/common/gmail.png")}
              />
              <Text
                style={styles.footertext}
                onPress={() => Linking.openURL("mailto:training@manvaasam.com")}
              >
                training@manvaasam.com
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.footer_admininfo}>
              <Image
                style={styles.footerImage}
                source={require("../image/common/fb.png")}
              />
              <Text
                style={styles.footertext}
                // onPress={() => Linking.openURL("mailto:no-reply@example.coms")}
              >
                Facebook
              </Text>
            </View>
            <View style={styles.footer_admininfo}>
              <Image
                style={styles.footerImage}
                source={require("../image/common/insta.png")}
              />
              <Text
                style={styles.footertext}
                onPress={() =>
                  Linking.openURL("instagram://user?username=manvaasam_")
                }
              >
                manvaasam_
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.footertext}> </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#808080",
    height: 300,
    width: width - 10,
    display: "flex",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  joinus_wrapper: {
    width: 150,
    marginTop: 10,
  },
  conclusion: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  joinus: {
    backgroundColor: "#09B44D",
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  bg_image: {
    backgroundColor: "#fff",
    height: 180,
    width: width,
    display: "flex",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: "center",
    paddingTop: 15,
  },
  container: {
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  abouttext: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontStyle: "italic",
    lineHeight: 18,
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    width: 350,
    height: 250,
  },

  imagewrapper: {
    alignItems: "center",
    width: 120,
    height: 100,
  },
  image_asset1: {
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 14,
  },

  content: {
    paddingTop: 5,
    alignItems: "center",
    fontSize: 25,
    textAlign: "center",
    // backgroundColor:'#fff',
    width: width,
  },
  main_content: {
    paddingTop: 40,
    alignItems: "center",
    fontSize: 25,
    textAlign: "center",
    textShadowColor: "#fff",
  },
  occupation: {
    marginBottom: 10,
    alignItems: "center",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "italic",
  },
  image_size: {
    width: 180,
    height: 150,
    borderRadius: 15,
  },
  verify: {
    color: "#fff",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  footer: {
    backgroundColor: "#09B44D",
    height: 75,
    width: width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: 10,
  },
  footerImage: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  footer_admininfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  footertext: {
    color: "#000",
  },
});
export default AboutUs;
