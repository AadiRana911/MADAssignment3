/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import theme from '../theme';

const HeaderCenterComponent = ({name, color}) => {
  return (
    <View>
      <Text style={[styles.textStyle, {color: color === undefined ? 'white' : color}]}>{name}</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default HeaderCenterComponent;
