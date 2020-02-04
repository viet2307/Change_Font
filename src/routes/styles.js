import React from 'react';
import {StyleSheet} from 'react-native';

export const indexStyle = StyleSheet.create({
   root: {
       flex: 1,
   },
    center_vertical: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
       fontSize: 100,
       fontWeight: '500',
        height: 'auto',
        alignItems: 'center',
        color: '#808993',
    },
    button: {
       width:80,
       height: 30,
       backgroundColor: 'red',
    },
});

