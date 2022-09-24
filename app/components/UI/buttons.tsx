import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export function ButtonSubmit({children, onPress}) {
  return (
    <TouchableOpacity style={style.submit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
}
export function ButtonRemove({children, onPress}) {
  return (
    <TouchableOpacity style={style.remove} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
}
export function ButtonCheckbox({children, onPress, status}) {
  return (
    <TouchableOpacity
      style={
        status ? [style.submit, style.toggle] : [style.submit, style.checkbox]
      }
      onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
}

export function ButtonAddNote({children, onPress}) {
  return (
    <TouchableOpacity style={style.submit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
}
export function ButtonFilterNote({children, onPress}) {
  return (
    <TouchableOpacity style={style.submit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  remove: {
    paddingVertical: 5,
    width: 100,
    height: 30,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 5,
  },
  submit: {
    paddingVertical: 10,
    width: 130,
    height: 40,
    backgroundColor: '#FFF7AD',
    alignSelf: 'center',
    borderRadius: 50,
  },
  checkbox: {
    backgroundColor: '#AAF1AD',
  },
  toggle: {
    backgroundColor: '#FAA7AD',
  },
  label: {
    textAlign: 'center',
    width: '100%',
  },
});
