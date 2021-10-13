/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import { Text, TextInput} from 'react-native';
import Styles from './Styles';

const InputCustom = ({label = '', isTextArea, extraStyle, type=''}) => {
  return (
    <>
      <Text style={Styles.label}>{label}</Text>
      {
        isTextArea ? 
        <TextInput style={Styles.input} multline={true} numberOfLines={10}/>
        :
        <TextInput keyboardType={type ? type : 'default'} style={[Styles.input,, extraStyle]} />
      }
     
    </>
  );
};

export default InputCustom;
