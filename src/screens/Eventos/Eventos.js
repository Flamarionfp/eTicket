import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import ButtonCustom from '../../components/Button/ButtonCustom';
import Styles from './Styles';

const Eventos = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Curso sobre Design Thinking */}
        <Image
          style={Styles.eventImg}
          source={require('../../../assets/images/headerEvents.jpg')}
        />
        <View style={Styles.centerContainer}>
          <Text style={Styles.title}>Curso sobre Design Thinking</Text>
        </View>
        <View style={Styles.descriptionContainer}>
          <Text style={Styles.description}>
            Aprenda os principais conceitos sobre Design Thinking
          </Text>
        </View>
        <View style={Styles.centerContainer}>
          <Text style={Styles.description}>Preço: R$ 60,00</Text>
          <View style={Styles.buttonContainer}>
            <ButtonCustom
              title="Comprar"
              extraStyle={{width: 100}}
              onAction={() => {
                navigation.navigate('Comprar');
              }}
            />
          </View>
        </View>

        {/* Rock in Rio */}
        <Image
          style={Styles.eventImg}
          source={require('../../../assets/images/rockInRio.jpg')}
        />
        <View style={Styles.centerContainer}>
          <Text style={Styles.title}>Rock in Rio</Text>
        </View>
        <View style={Styles.descriptionContainer}>
          <Text style={Styles.description}>
            Show com bandas nacionais e internacionais
          </Text>
        </View>
        <View style={Styles.centerContainer}>
          <Text style={Styles.description}>Preço: R$ 300,00</Text>
          <View style={Styles.buttonContainer}>
            <ButtonCustom
              extraStyle={{width: 100}}
              title="Comprar"
              onAction={() => {
                navigation.navigate('Comprar');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Eventos;
