/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import InputCustom from '../../components/Input/InputCustom';
import ButtonCustom from '../../components/Button/ButtonCustom'
import Styles from './Styles';

const Contato = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={Styles.formContainer}>
        <InputCustom label="Nome*"/>
      </View>
      <View style={Styles.formContainer}>
        <InputCustom label="Email*"/>
      </View>
      <View style={Styles.formContainer}>
        <InputCustom label="Telefone*"/>
      </View>
      <View style={Styles.formContainer}>
        <InputCustom label="Mensagem*"isTextArea/>
      </View>
      <View style={Styles.buttonContainer}>
        <ButtonCustom title="Registrar o Contato" onAction={() => {navigation.navigate('Home')}} />
      </View>
    </SafeAreaView>
  );
};

export default Contato;
