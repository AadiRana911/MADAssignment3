import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import {colors} from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native-elements';

const Chatting = ({name, image, date}) => {
    const [viewed, setViewed] = useState(false)
    return (
        <View style = {{width: '100%', backgroundColor: 'white', marginTop: 5,}}>
        <View style = {{paddingHorizontal: 20, width: '100%', marginVertical: 2}}>
            <View style={{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{width: '40%', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',borderRadius: 15, marginTop: 15}}>
                <Image
                    source={{uri: image}}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <Text style = {{fontSize: 12,paddingHorizontal: 10, paddingVertical: 3, color: 'black', alignSelf: 'center'}}>{name}</Text>
            </View>
            </View>
            <Ionicons name = "chatbubble-outline" style = {{alignSelf: 'flex-end', fontSize: 20, color: 'grey', margin: 10}} />
            </View>
            <View style = {{marginBottom: 10, flexDirection: 'row-reverse', marginHorizontal: 15}}>
                <Text style = {{fontSize: 10, color: colors.primary}}>{date}</Text>
            </View>
        </View>
        </View>
    )
}

export default Chatting
