import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Task = props => {
  return (
    <View style={customStyle.item}>
      <View style={customStyle.itemLeft}>
        <TouchableOpacity style={customStyle.square}></TouchableOpacity>
          <Text style={customStyle.itemText}>{props.text}</Text>
          </View>
          <View style={customStyle.circular}></View>
    </View>
  );
};



const customStyle = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,

    },

});
export default Task;
