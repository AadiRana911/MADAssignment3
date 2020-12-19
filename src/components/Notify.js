import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../theme'

const Notify = ({tag, title, time}) => {
    const [viewed, setViewed] = useState(false)
    return (
        <View style = {{width: '100%', paddingBottom: 10, backgroundColor: 'white', marginTop: 2}}>
        <View style = {{paddingHorizontal: 20, width: '100%', paddingTop: 20, paddingBottom: 5}}>
            <View style={{flexDirection: 'row'}}>
            <View style = {{flexDirection: 'row', width: 300}}>          
            <View style = {{width: '40%', alignItems: 'center', justifyContent: 'center', borderColor: 'lightgrey', borderWidth: 2,borderRadius: 15, marginBottom: 10}}>
                <Text style = {{fontSize: 12, paddingVertical: 3, color: colors.primary}}>{tag}</Text>
            </View>
            </View>
            <Entypo name = "bell" style = {{alignSelf: 'flex-end', fontSize: 20, color: 'grey', margin: 10}} />
            </View>
            <View style = {{marginBottom: 10,}}>
                <Text style = {{fontSize: 16, color: 'black'}} numberOfLines = {3}>{title}</Text>
            </View>
            <View style = {{marginBottom: 10}}>
                <Text style = {{fontSize: 10, color: colors.primary}}>{time}</Text>
            </View>
        </View>
        </View>
    )
}

export default Notify
