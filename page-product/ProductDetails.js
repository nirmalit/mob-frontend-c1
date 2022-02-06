import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,Dimensions,TextInput} from 'react-native'
import back_icon from '../image/common/back_icon.png'
import Base64 from '../page-common/component/Base64';
import { purchaseProduct } from './comman/apiHelper';

const {width,height}=Dimensions.get('screen')
const ProductDetails = (props) => {const [allValue, setAllValue] = useState({
    error: "",
    loading: "",
    productPurchased: false,
    productImage: "",
    quantity:1,
    getAddress:false,
    doorNo:"",
    street:"",
    area:"",
    pincode:"",
    landmark:""
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
      productImage: arrayBufferToBase64(
        props.route.params.productData.image.data
      ),
    });
    //console.warn(JSON.stringify(await getData()))
  }, []);

  const registerProduct = async () => {
    setAllValue({
      ...allValue,
      loading: true,
      getAddress:false
    });
    let tempValue={}
    tempValue['productid']=props.route.params.productData.productid
    tempValue['count']=allValue.quantity
    tempValue['address']=allValue.doorNo+','+allValue.street+','+allValue.area+','+allValue.pincode+','+allValue.landmark
    //console.warn("value",JSON.stringify(tempValue))
    
    let purchaseResult = await purchaseProduct(
      tempValue
    );
    if (purchaseResult.success) {
      setAllValue({
        ...allValue,
        loading: false,
        productPurchased: true,
      });
    } else {
      setAllValue({
        ...allValue,
        error: "Please try again after some times...",
        loading: false,
      });
    }
  };
  const quantityManager=(type)=>{
    let temp=allValue.quantity
    if(type==="plus"){
      setAllValue({
        ...allValue,
        quantity:temp+1
      })
    }else{
      if(temp!==1){
        setAllValue({
          ...allValue,
          quantity:temp-1
        })
      }  
    }
  }
  const productInfo = () => {
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
            {props.route.params.productData.name}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#ffffff",
              textTransform: "capitalize",
            }}
          >
            ₹{props.route.params.productData.price*allValue.quantity}
          </Text>
        </View>
        <View style={{width:320,flexDirection:'row'}}>
          <Text style={{top:10,fontWeight:'bold',color:'#FFFFFF'}}>Quantity</Text>
          <View style={{left:30,width:100,flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>quantityManager('minus')}><Text style={{fontWeight:'bold',color:'#FFFFFF',fontSize:30}}>-</Text></TouchableOpacity>
            <View style={{top:5,backgroundColor:'#FFFFFF',width:48,height:33,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',color:'black',fontSize:15}}>{allValue.quantity}</Text>
            </View>
            <TouchableOpacity onPress={()=>quantityManager('plus')}><Text style={{fontWeight:'bold',color:'#FFFFFF',fontSize:30}}>+</Text></TouchableOpacity>
          </View>
        </View>
        <View style={style.horizontalLine}></View>
        <Text
          style={{
            alignSelf: "flex-start",
            fontWeight: "bold",
            color: "#262626",
          }}
        >
          product Details
        </Text>
        <Text
          style={{
            alignSelf: "flex-start",
            color: "#ffffff",
            textTransform: "capitalize",
          }}
        >
          {props.route.params.productData.description}
        </Text>
        <View style={{width:300,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
            {/* <View style={{width:20,height:20,right:20}}>
                <Image source={instructor_icon} style={{width:30,height:30}} />
            </View>
          <Text style={{fontWeight:'bold',top:5}}>{props.route.params.productData.instructor}</Text> */}
        </View>
        <TouchableOpacity
          onPress={()=>setAllValue({...allValue,getAddress:true})}
          style={{
            width: 172,
            height: 45,
            borderRadius: 20,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Buy</Text>
        </TouchableOpacity>
      </>
    );
  };
  if (allValue.productPurchased || allValue.loading || allValue.error) {
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
        {allValue.productPurchased ? (
          <Text style={{ color: "black", fontWeight: "bold" }}>
            Successfully Order Placed,dedicated service agent will be contact you soon..
          </Text>
        ) : allValue.error ? (
          <Text style={{ color: "red" }}>{allValue.error}</Text>
        ) : (
          <Text style={{ color: "#B8AFAF" }}>LOADING..</Text>
        )}
      </View>
    );
  }
  else if(allValue.getAddress){
    return(
    <View style={{flex:1,padding:10,alignItems:"center",justifyContent:'center'}}>
        <View style={{width:width-20,height:height/2,backgroundColor:'#09B44D',borderRadius:20}}>
          <TouchableOpacity
          onPress={()=>setAllValue({...allValue,getAddress:false})}
          style={{
            alignSelf:'flex-start',
            left:20,
            top:20,
            marginBottom:20
          }}
          >
            <Image source={back_icon} />
          </TouchableOpacity>
          <Text style={{alignSelf:'center'}}>Delivery Address</Text>
          <View style={{flex:1,alignSelf:'center',justifyContent:'space-evenly'}}>
            
            <TextInput 
              placeholder='Ex: Doorno' 
              placeholderTextColor="#FFFFFF" 
              style={{
                borderBottomColor:'#FFFFFF',
                borderBottomWidth:2,
                width:width-(width/3)
              }}
              onChangeText={(text)=> setAllValue({...allValue,doorNo:text}) }
            />
            <TextInput 
              placeholder='Ex: street' 
              placeholderTextColor="#FFFFFF" 
              style={{
                borderBottomColor:'#FFFFFF',
                borderBottomWidth:2
              }}
              onChangeText={(text)=> setAllValue({...allValue,street:text}) }
            />
            <TextInput 
              placeholder='Ex: city/village' 
              placeholderTextColor="#FFFFFF" 
              style={{
                borderBottomColor:'#FFFFFF',
                borderBottomWidth:2
              }}
              onChangeText={(text)=> setAllValue({...allValue,area:text}) }
            />
            <TextInput 
              placeholder='Ex: pincode' 
              placeholderTextColor="#FFFFFF" 
              style={{
                borderBottomColor:'#FFFFFF',
                borderBottomWidth:2
              }}
              onChangeText={(text)=> setAllValue({...allValue,pincode:text}) }
            />
            <TextInput 
              placeholder='Ex:Landmark' 
              placeholderTextColor="#FFFFFF" 
              style={{
                borderBottomColor:'#FFFFFF',
                borderBottomWidth:2
              }}
              onChangeText={(text)=> setAllValue({...allValue,landmark:text}) }
            />
            <TouchableOpacity
            onPress={registerProduct}
              style={{
              backgroundColor:"#FFFFFF",
              alignItems:'center',
              justifyContent:'center',
              borderRadius:20,
              height:40
              }}
            >
              <Text style={{fontWeight:'bold'}}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    )
  }
   else {
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
          <View style={style.productImgWrapper}>
            <Image
              source={{
                uri: "data:image/png;base64," + allValue.productImage,
              }}
              style={style.productImg}
            />
          </View>
        </View>
        <View style={style.greenWrapper}>{productInfo()}</View>
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
  productImgWrapper: {
    width: 100,
    height: 100,
  },
  productImg: {
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


export default ProductDetails;