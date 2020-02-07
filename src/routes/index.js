import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {FontFamily} from '../utils/Constants';
import {indexStyle} from './styles';
import {useNetInfo} from '@react-native-community/netinfo';

const ChangeFont = props => {
  const [font, setFont] = useState([]);
  const [changeFont, setChange] = useState(false);
  const [items, setItems] = useState(FontFamily);
  const checkConnection = useNetInfo();

  function onClickChangeFont() {
    setChange(!changeFont);
    changeFont ? setFont(items[0]) : setFont(items[1]);
  }
  useEffect(() => {
    alert(checkConnection.isConnected);
  });

  return (
    <SafeAreaView>
      <View style={indexStyle.center_vertical}>
        <View>
          <Text style={[font, indexStyle.text]}>Hello</Text>
        </View>
        <TouchableOpacity
          style={[indexStyle.button]}
          onPress={() => onClickChangeFont()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangeFont;
