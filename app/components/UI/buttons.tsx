import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export function ButtonSubmit({children, onPress}) {
  return (
    <TouchableOpacity style={style.submit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  submit: {
    paddingVertical: 10,
    width: 130,
    height: 40,
    backgroundColor: '#FFF7AD',
    alignSelf: 'center',
    borderRadius: 50,
  },
  label: {
    textAlign: 'center',
    width: '100%',
  },
});
