import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

type Props = {
  active?: boolean;
  status?: number;
  children?: string;
  onPress: (params: object) => void;
};

export const ButtonSubmit: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.submit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonEdit: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.edit} onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonRemove: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={style.remove} onPress={onPress}>
      <Text style={[style.label, style.textLabel]}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonRemoveTask: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={style.removeTask} onPress={onPress}>
      <Image style={style.iconBtn} source={require('./btn_remove.png')} />
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
    <TouchableOpacity style={style.addNote} onPress={onPress}>
      <Text style={style.textAddNote}>{children}</Text>
    </TouchableOpacity>
  );
};
export const ButtonFilterNote: React.FC<Props> = ({
  active,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={active ? [style.filter, style.active] : [style.filter]}
      onPress={onPress}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  remove: {
    height: 30,
    // backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 5,
    color: 'white',
  },
  filter: {
    width: '100%',
    height: 30,
    // backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 5,
  },
  submit: {
    padding: 10,
    width: '49%',
    height: 50,
    backgroundColor: '#FFF7AD',
    alignSelf: 'center',
    borderRadius: 50,
  },
  toggleTask: {
    width: 100,
    height: 30,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 5,
  },
  removeTask: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 36,
    height: 36,
    padding: 5,
  },
  iconBtn: {
    width: 25,
    height: 25,
  },
  iconBtnBig: {
    width: 50,
    height: 50,
  },
  checkbox: {
    backgroundColor: '#AAF1AD',
  },
  toggle: {
    // backgroundColor: 'grey',
  },
  label: {
    textAlign: 'center',
    width: '100%',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  active: {
    backgroundColor: '#C3C3C3',
    // paddingTop: -5,
  },
  textLabel: {
    color: '#9B9B9B',
  },
  addNote: {
    backgroundColor: '#FFF7AD',
    borderRadius: 50,
  },
  textAddNote: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  edit: {
    width: '47%',
    margin: 5,
    height: 30,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
