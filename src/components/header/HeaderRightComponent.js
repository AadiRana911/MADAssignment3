/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
// import {notification} from '../aseets';
// import theme from '../../theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import {Fonts} from '../utils/Fonts';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderRight = ({icon, onPress}) => {
  // console.warn(onSearchPress);

  return (
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginHorizontal: 10}} onPress={onPress}>
          {/* <Image
            source={notification}
            style={{height: 50, width: 50}}
            resizeMode={'center'}
          />
          <Ionicons name="ios-notifications-outline" size={40} color="white" /> */}
          <EvilIcons name = {'search'} style = {{color: 'white', fontSize: 30, fontWeight: 'bold'}}/>
        </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  textStyle: {
    // fontSize: 20,

    // fontFamily: Fonts.GoogleSansBold,
    // color: theme.colors.primaryDark,
  },
});
export default HeaderRight;
