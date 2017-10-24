import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatações
const Estilos =  {
  estiloTexto: {
    fontSize: 50
  }
};

const App = () => {
  return(
      <Text style={ Estilos.estiloTexto }>Frases do dia</Text>
    );
};

AppRegistry.registerComponent('FrasesDoDia', () => App);