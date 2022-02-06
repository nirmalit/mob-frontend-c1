import React,{useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Loading = (props) => {
    //const [seconds, setSeconds] = useState(1);
    //console.warn(props)
    useEffect(() => {
        const timer = setTimeout(() => {
          //setSeconds(seconds + 1);
          //if(seconds===1){
              //setSeconds(1)
              props.navigation.navigate(props.route.params.nextPage)
          //}
        }, props.route.params.loadTime*1000);
                   // clearing interval
        return () => clearInterval(timer);
      });
    return (
        <View style={styles.container}>
            <Text style={styles.load_text}>Loading...</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#262626"
    },
    load_text:{
        color:'white',
        fontWeight:'bold'
    }
})
export default Loading;