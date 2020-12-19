import React, {useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import {colors} from '../../theme'
import {Header, Divider} from 'react-native-elements';
import {Fonts} from '../../Fonts'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const History = ({route, navigation}) => {
    const {history} = route.params;
    useEffect(() => {
        // const {his} = route.params;
        console.log(history)
    },[])
    return (
        <View style = {{flex: 1, backgroundColor: 'white'}}>
            <Header
                backgroundColor = {colors.primary}
                centerComponent = {<Text style = {{color: 'white', fontSize: 22, fontFamily: Fonts.OSR}}>History</Text>}
                leftComponent = {<EvilIcons name = {'chevron-left'} style = {{fontSize: 40, color: 'white'}} onPress = {() => navigation.navigate('StartScreen', {his: history})} />}
            />
            <View style = {{flex: 1, paddingHorizontal: 15, marginTop: 20}}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style = {{fontSize: 17, fontFamily: Fonts.OSR}}>Original Price</Text>
                    <Text style = {{fontSize: 17, fontFamily: Fonts.OSR}}>-</Text>
                    <Text style = {{fontSize: 17, fontFamily: Fonts.OSR}}>Discount</Text>
                    <Text style = {{fontSize: 17, fontFamily: Fonts.OSR}}>=</Text>
                    <Text style = {{fontSize: 17, fontFamily: Fonts.OSR}}>Final Price</Text>
                </View>
                <FlatList 
                    data = {history}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {({item}) => {
                        return (
                            <View style = {{flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: colors.primary, borderBottomWidth: 1.5, paddingVertical: 10}}>
                                <Text>{item.op}</Text>
                                <Text>-</Text>
                                <Text>{item.dis}%</Text>
                                <Text>=</Text>
                                <Text>{item.fp}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default History
