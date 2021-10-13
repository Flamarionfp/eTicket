/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import Styles from './Styles';
import ButtonCustom from '../../components/Button/ButtonCustom';
import InputCustom from '../../components/Input/InputCustom';

const Comprar = ({navigation}) => {
  return (
    <View style={Styles.header}>
      <Image
        style={Styles.viewImage}
        resizeMode="cover"
        source={require('../../../assets/images/headerEvents.jpg')}
      />

      <View style={Styles.viewText}>
        <Text style={Styles.headerText}>Curso sobre Design Thinking</Text>
        <Text style={Styles.description}>
          Aprenda os principais conceitos sobre Design Thinking
        </Text>
        
      </View>
      <View style={[Styles.details]}>
          <Text style={{textAlign: "justify"}}>Preço: R$ 60,00</Text>
          <View style={Styles.labelQuantidade}>
            <Text style={Styles.qty}>Quantidade: </Text>
            <InputCustom extraStyle={{width: 100}} type="numeric"/>
          </View>
          <Text>Total R$: xxx </Text>
          <View style={Styles.containerButton}>
          <ButtonCustom
            title="Efetivar a compra"
            onAction={() => {
              navigation.navigate('Eventos');
            }}
          />
        </View>
        </View>
        
    </View>
  );
};

export default Comprar;
