/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Styles from './Styles';

const ButtonCustom = ({title, onAction}) => {
  return (
    <>
      <TouchableOpacity onPress={onAction} style={Styles.button}>
        <Text style={Styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonCustom;
