/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home/Home';
import Eventos from '../screens/Eventos/Eventos';
import Contato from '../screens/Contato/Contato'
import Comprar from '../screens/Comprar/Comprar'

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Eventos"
          component={Eventos}
          options={{headerShown: true, headerTitle: "Tickets"}}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{headerShown: true, headerTitle: "Entre em Contato"}}
        />
        <Stack.Screen
          name="Comprar"
          component={Comprar}
          options={{headerShown: true, headerTitle: "Compra de Tickets"}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
