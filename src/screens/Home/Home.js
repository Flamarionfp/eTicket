/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import ButtonCustom from '../../components/Button/ButtonCustom';
import Styles from './Styles';

const Home = () => {
  return (
    <ScrollView>
      <View style={Styles.header}>
        <Image
          style={Styles.showImg}
          source={require('../../../assets/images/show.jpeg')}
        />
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Welcome e-Ticket</Text>
        </View>
        <Image
          style={Styles.stadiumImg}
          source={require('../../../assets/images/stadium.jpg')}
        />
        <View style={Styles.textContainer}>
          <Text style={Styles.text}>
            Você está preparado para participar dos melhores eventos? Você está
            interessado em esportes, shows, seminários.
          </Text>
          <Text style={Styles.text}>
            Acesse nosso app para adquirir um evento da sua escolha.
          </Text>
        </View>
      </View>
      <View style={Styles.buttonsContainer}>
        <ButtonCustom title="Eventos" onAction={() => {}} />
        <ButtonCustom title="Contato" onAction={() => {}} />
        <ButtonCustom title="News" onAction={() => {}} />
      </View>
    </ScrollView>
  );
};

export default Home;
