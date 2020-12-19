import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {colors} from '../theme'
import { Divider } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const HomeItem = ({tag, title, content, location, worksAt, postedBy, seen, likes, comments, time}) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <View style = {{width: '100%', paddingBottom: 10, backgroundColor: 'white', marginTop: 10}}>
        <View style = {{paddingHorizontal: 15, width: '100%', paddingTop: 40, paddingBottom: 10}}>
            <View style = {{width: '40%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, borderRadius: 15, marginBottom: 10}}>
                <Text style = {{fontSize: 12, paddingVertical: 3, color: 'white'}}>{tag}</Text>
            </View>
            <View style = {{marginBottom: 10}}>
                <Text style = {{fontSize: 16, }} numberOfLines = {3}>{title}</Text>
            </View>
            <View style = {{marginBottom: 20}}>
                <Text style = {{fontSize: 11, color: 'rgba(180, 180, 180, 0.8)'}} numberOfLines = {2}>{content}</Text>
            </View>
            <View style = {{marginBottom: 10}}>
                <Text style = {{fontSize: 10, color: colors.primary}}>@{location}</Text>
            </View>
            <View style = {{flexDirection: 'row', alignItems: 'center',}}>
                <Text>{worksAt}  </Text>
                <View style = {{height: 3, width: 3, borderRadius: 2, backgroundColor: 'rgba(220, 220, 220, 0.6)'}} />
                <Text>  {postedBy}</Text>
            </View>
        </View>
        <Divider />
        <View style = {{marginTop: 10, flexDirection: 'row', marginHorizontal: 10}}>
            <View style = {{flexDirection: 'row', width: '35%', justifyContent: 'space-between'}}>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <EvilIcons name = 'eye' style = {{fontSize: 20, color: 'rgba(150, 150, 150, 0.8)'}} />
                    <Text style = {{color: 'rgba(150, 150, 150, 0.8)', fontSize: 12}}> {seen}</Text>
                </View>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <EvilIcons name = 'like' style = {{fontSize: 20, color: isLiked ? colors.primary : 'rgba(150, 150, 150, 0.8)'}} onPress = {() => setIsLiked(!isLiked)} />
                    <Text style = {{color: isLiked ? colors.primary : 'rgba(150, 150, 150, 0.8)', fontSize: 12}}> {seen}</Text>
                </View>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <EvilIcons name = 'comment' style = {{fontSize: 20, color: 'rgba(150, 150, 150, 0.8)'}} />
                    <Text style = {{color: 'rgba(150, 150, 150, 0.8)', fontSize: 12}}> {seen}</Text>
                </View>
            </View>
        </View>
        </View>
    )
}

export default HomeItem
