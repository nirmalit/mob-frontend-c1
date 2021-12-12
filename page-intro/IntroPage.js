import React from 'react'
import { FlatList,View,StyleSheet,Image } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';
const IntroPage = (props) => {
    //const img1 ='../image/intro-1.png'
    return (
        <Onboarding
            onDone={props.onChangeLoginFlag}
            pages={[
                {title:"WELCOME",subtitle:"We are Happy to see you here",image:<Image source={require('../image/intro/intro-1.png')} style={styles.image_1} />,backgroundColor: '#58AA58FA'},
                {title:"BE A CHANGER",subtitle:"\n\t\tIndividual, We are one drop.\n#TOGETHER, We are an Ocean",image:<Image source={require('../image/intro/intro-2.png')} style={styles.image_1} />,backgroundColor: '#68D869'},
                {title:"Be a #MANVAASAMIST",subtitle:"One step to start your journey",image:<Image source={require('../image/intro/intro-3.png')} style={styles.image_1} />,backgroundColor: '#75DC75FA'}
            ]}
        />
    )
}

const styles=StyleSheet.create({
    image_1:{
        width:300,
        height:300
    },
    image_2:{
        width:400,
        height:400
    }
})

export default IntroPage;