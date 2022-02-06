import React from "react";
import { Text, View } from "react-native";
const SubLoadingAnimation = (props) => {
  return (
    <View style={{ flex: 1,height:400, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading..</Text>
      <Text>Fetching {props.message}</Text>
    </View>
  );
};

export default SubLoadingAnimation;
