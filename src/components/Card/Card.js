import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Card = ({text, image, h, w,styles, onPress, fontSize, overlayFlag, br, backgroundColor, borderColor, color}) => {
    return (
        <TouchableOpacity
            style = {[styles,{
                width: w,
                height: h,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 2,
            }]}
            activeOpacity = {1}
            onPress = {onPress}
        >
            <View style = {{width: w, height: h,borderWidth: 1.3, backgroundColor: backgroundColor, borderColor: borderColor, borderRadius: 2, justifyContent: 'center', alignItems: 'center'}}>
                {/* <AntDesign name = "pluscircleo" style = {{position: 'absolute', fontSize: 16, color: 'black', alignSelf: 'flex-end', top: 5, right: 5,}} /> */}
                <Text style = {{fontSize: 13, color,  margin: 10}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;
