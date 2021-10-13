/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
  },
  viewImage: {
    flex: 4,
  },
  viewText: {
    alignItems: 'center',
    flex: 4,
  },
  description: {
    padding: 10,
    fontSize: 20,
    textAlign: 'justify',
  },
  details: {
    flexDirection: 'column',
    width: "100%",
    paddingHorizontal: 100 ,
    justifyContent: "flex-start",
    flex: 6
  },
  qty: {
    paddingRight: 10,
  },
  containerButton: {
    marginTop: 50,
  },
  labelQuantidade:{
    flexDirection: 'row', 
    alignItems: 'center'
  }
});
