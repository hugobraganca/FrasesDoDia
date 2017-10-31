import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos =  {
    principal: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: { //Configuração do botão
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 40
    },
    textoBotao: { //Configuração do texto do botão
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gererNovaFrase = () => { //function que fará a lógica para gerar as frases

    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 20);

    var frases = Array();
    frases[0] = '"Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos" – James Cameron, cineasta';
    frases[1] = '"O sucesso normalmente vem para quem está ocupado demais para procurar por ele" – Henry David Thoreau, filósofo';
    frases[2] = '"A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete';
    frases[3] = '"Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência" – Lisa M. Amos, executiva';
    frases[4] = '"Se você não está disposto a arriscar, esteja disposto a uma vida comum" – Jim Rohn, empreendedor';
    frases[5] = '"Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso" – Swami Vivekananda, pensador hindu';
    frases[6] = '"Para de perseguir o dinheiro e comece a perseguir o sucesso" – Tony Hsieh, empreendedor';
    frases[7] = '"Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los" – Walt Disney, desenhista e empreendedor';
    frases[8] = '"Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo" – Winston Churchill, político';
    frases[9] = '"Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali" – Vaibhav Shah, pensador';
    frases[10] = '"Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa. Para mim, sucesso é paz anterior" – Denzel Washington, ator';
    frases[11] = '"Oportunidades não surgem. É você que as cria" – Chris Grosser, fotógrafo';
    frases[12] = '"Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor" – Albert Einstein, físico';
    frases[13] = '"Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança" – Charles Darwin, biólogo';
    frases[14] = '"A melhor vingança é um sucesso estrondoso" – Frank Sinatra, cantor';
    frases[15] = '"Eu não falhei. Só descobri 10 mil caminhos que não eram o certo" – Thomas Edison, inventor';
    frases[16] = '"Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele" – David Brinkley, jornalista';
    frases[17] = '"Ninguém pode fazer você se sentir inferior sem o seu consentimento" – Eleanor Roosevelt, primeira-dama dos EUA';
    frases[18] = '"O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo" – Henry Ford, empreendedor';
    frases[19] = '"Se você está atravessando um inferno, continue atravessando" – Churchill';

    fraseEscolhida = frases [numeroAleatorio];

    Alert.alert('', fraseEscolhida);

}

//Criar  o componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return(
      <View style={principal}>
          <Image source={require('./imgs/logo.png')}/>
          <TouchableOpacity
              onPress = { gererNovaFrase }
              style={botao}>
              <Text style={textoBotao}>Nova frase</Text>
          </TouchableOpacity>
      </View>

    );
};

AppRegistry.registerComponent('FrasesDoDia', () => App);