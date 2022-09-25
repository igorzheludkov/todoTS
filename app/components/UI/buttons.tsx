import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  status?: number;
  children: string;
  onPress: (params: object) => void;
};

export const ButtonSubmit: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.submit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonRemove: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.remove} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonRemoveTask: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.remove} onPress={onPress}>
      <Text style={style.labelDark}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonCheckbox: React.FC<Props> = ({
  children,
  onPress,
  status,
}) => {
  return (
    <TouchableOpacity
      style={
        status
          ? [style.toggleTask, style.toggle]
          : [style.toggleTask, style.checkbox]
      }
      onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};

export const ButtonAddNote: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.submit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonFilterNote: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.filter} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  remove: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    // width: '100%',
    height: 30,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 5,
    color: 'white',
  },
  filter: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    height: 30,
    backgroundColor: 'lightgrey',
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
  toggleTask: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    // width: '100%',
    height: 30,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 5,
  },
  checkbox: {
    backgroundColor: '#AAF1AD',
  },
  toggle: {
    backgroundColor: 'grey',
  },
  label: {
    textAlign: 'center',
    width: '100%',
  },
  labelDark: {
    textAlign: 'center',
    width: '100%',
    color: 'lightgrey',
  },
});
