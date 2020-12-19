import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable';
import { colors } from '../../theme';
import {Fonts} from '../../Fonts'

const StartScreen = ({route, navigation}) => {
    const [price, setPrice] = useState('0')
    const [discount, setDiscount] = useState('')
    const [history, setHistory] = useState([]);
    useEffect(() => {
        if(route.params){
            const {his} = route.params;
            setHistory(his)
        }
        console.log(history)
    }, [navigation])
    const appendHistory = (item) => {
        let temp = history;
        temp.push(item);
        setHistory(temp);
    }
    return (
        <View style={{flex: 1, backgroundColor: colors.primary}}>
            <TouchableOpacity style = {{alignSelf: 'flex-end', marginTop: 15, marginRight: 15}} onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('History', {
            history
          });
        }}>
                <EvilIcons name = {'calendar'} style = {{fontSize: 30, color: 'white'}}/>
            </TouchableOpacity>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary}}>
                <Text style={{fontSize: 40, color: 'white', fontFamily: Fonts.OSB}}>Start Screen</Text>
            </View>
            <Animatable.View animation='fadeInUp'
            style={{flex: 1, backgroundColor: colors.secondary, borderTopLeftRadius: 69, borderTopRightRadius: 69, paddingVertical: 10, paddingHorizontal: 25}}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
            <Text style={{fontSize: 15, fontFamily: Fonts.OSL}}>Enter original price and discount %</Text>
            
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{padding: 10,
                borderColor: 'black',
                borderRadius:10,
                borderWidth: 1,
                borderBottomWidth: 5,
                width:'49%',
                alignSelf: 'center',
                height:55,
                marginBottom:20,
                flexDirection: 'row',
                alignItems:'center'}}>
                    <FontAwesome
                        name = {'dollar'}
                        color = {colors.primary}
                        style = {{fontSize: 25}}
                    />
                    <TextInput style={{height: 50,
                        marginLeft:16,
                        borderBottomColor: '#FFFFFF',
                        flex:1, fontFamily: Fonts.OSR}}
                        placeholder="Original Price"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(price) => setPrice(price)}
                    />
                </View>
                <View style={{padding: 10,
                borderColor: 'black',
                borderRadius:10,
                borderWidth: 1,
                borderBottomWidth: 5,
                width:'49%',
                alignSelf: 'center',
                height:55,
                marginBottom:20,
                flexDirection: 'row',
                alignItems:'center'}}>
                    <FontAwesome
                        name = {'percent'}
                        color = {colors.primary}
                        style = {{fontSize: 25}}
                    />
                    <TextInput style={{height: 50,
                        marginLeft:16,
                        borderBottomColor: '#FFFFFF',
                        flex:1, fontFamily: Fonts.OSR}}
                        placeholder="Discount%"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(discount) => setDiscount(discount)}
                    />
                </View>
            </View>
                {price.length !== 0 && price !== '0' ? <TouchableOpacity style={{width: '40%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,borderRadius: 50,}} onPress = {() => appendHistory({op: price, dis: discount, fp: price - price * discount/100})}>
                <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                    colors = {['lightgreen', colors.primary]}>
                <Text style={{color: 'white', fontSize: 19, fontFamily: Fonts.OSR}}>S A V E</Text>
                </LinearGradient>
                </TouchableOpacity> : 
                <View style={{width: '40%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: 'gray',borderRadius: 50,}}>
                    <Text style = {{color: 'white', fontFamily: Fonts.OSR, fontSize: 19}}>S A V E</Text>
                </View>}
            <View style = {{alignItems: 'center', marginTop: 20}}>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {{fontSize: 20, fontFamily: Fonts.OSB, color: colors.primary}}>You Save   </Text>
                    {discount <= 100 && discount >= 0 ? <Text style = {{fontSize: 22, fontFamily: Fonts.OSBi, color: colors.primary}}>{price * discount/100}</Text> : 
                    <Text style = {{fontSize: 18, fontFamily: Fonts.OSr, color: colors.primary}}>Discount must be between 0 - 100</Text>
                    }
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {{fontSize: 20, fontFamily: Fonts.OSB, color: colors.primary}}>Final Price   </Text>
                    {discount <= 100 && discount >= 0 ? <Text style = {{fontSize: 22, fontFamily: Fonts.OSBi, color: colors.primary}}>{price - price * discount/100}</Text> : 
                    <Text style = {{fontSize: 18, fontFamily: Fonts.OSr, color: colors.primary}}>Discount must be between 0 - 100</Text>
                    }
                </View>
            </View>
            </View>
            </Animatable.View>
        </View>
    )
}

export default StartScreen
