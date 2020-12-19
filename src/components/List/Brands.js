import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native-elements';
const Brands = ({text, icon, styles, onPress, stars, image}) => {
    const {width, height} = Dimensions.get('window');
    return (
        <TouchableOpacity
            style = {[styles,{
                width: 500,
                // alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 2,
                paddingVertical: 10,
            }
                
            ]}
            activeOpacity = {onPress !== undefined ? 0.5 : 1}
            onPress = {onPress}
        >
            <View style = {{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'row', width: 300}}>
                <Image
                    source={{uri: image}}
                    style={{ width: 50, height: 50 }}
                />
                <Text style = {{fontSize: 20, color: 'grey', margin: 10,alignSelf: 'flex-start', justifyContent: 'flex-start'}}>{text}</Text>
            </View>
            <MaterialIcons name = "navigate-next" style = {{alignSelf: 'flex-end', fontSize: 20, color: 'grey', margin: 10}} />
            {/* <Image src={icon} className='Brand-logo'></Image> */}
            </View>
        </TouchableOpacity>
    )
}

export default Brands;
