import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {FontFamily, Fonts} from '../utils/Constants';
import {indexStyle} from './styles';

const ChangeFont = props => {

    const [font, setFont] = useState([]);
    const [changeFont, setChange] = useState(false);
    const [items, setItems] = useState(FontFamily);

    function onClickChangeFont() {
        changeFont ? setFont(items[0]) : setFont(items[1]);
        setChange(!changeFont);
    }
    return (
        <SafeAreaView>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[font, indexStyle.text]}>Hello</Text>
            </View>
            <TouchableOpacity style={[indexStyle.button]} onPress={() => onClickChangeFont()}/>
            </View>
        </SafeAreaView>
    );
};

export default ChangeFont;
