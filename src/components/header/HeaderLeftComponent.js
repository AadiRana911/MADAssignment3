/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
// import {drawer, back} from '../aseets';
// import theme from '../theme';
// import { Button } from 'react-native-elements';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const HeaderLeftComponent = (navigation, icon, stylo, color) => {
  return (

    <View style = {stylo}>
      {icon === 'menu' && <TouchableOpacity
        activeOpacity={0}
        style={styles.drawerIcon}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Entypo name="menu" size={40} color= {color === undefined ? "white" : color} />
      </TouchableOpacity>}
      {icon === 'back' && <TouchableOpacity
        activeOpacity={0}
        style={styles.drawerIcon}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <SimpleLineIcons name="logout" size={40} color= {color === undefined ? "black" : color} />
      </TouchableOpacity>}
    </View>
  );
};

export default HeaderLeftComponent;

const styles = StyleSheet.create({});
