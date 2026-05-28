// importação para o menu lateral funcionar
import 'react-native-gesture-handler';

// importar o container da navegção, ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

// import o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

// importar as telas
import Jogador1 from './components/Jogador1'
import Jogador2 from './components/Jogador2';
import Jogador2atv from './components/Jogador2atv';
import Jogador3 from './components/Jogador3';
import Jogador4 from './components/Jogador4';

// cria o drawer
const Drawer = createDrawerNavigator();

// componente principal o app
export default function APP(){
  // o que esta dentro do return aparece na tela
  return (
    // container principal da navegação
    <NavigationContainer>
      {/* menu lateral */}
      <Drawer.Navigator>
        {/* Tela do Jogador1 */}
        <Drawer.Screen
        // nome que aparece no menu
          name="1 Jogador"
          //componente será aberto,,
          component={Jogador1}
        />
        <Drawer.Screen
        // nome que aparece no menu
          name="2 Jogadores"
          //componente será aberto,,
          component={Jogador2}
        />
        <Drawer.Screen
        // nome que aparece no menu
          name="3 Jogadores"
          //componente será aberto,,
          component={Jogador3}
        />
        <Drawer.Screen
        // nome que aparece no menu
          name="4 Jogadores"
          //componente será aberto,,
          component={Jogador4}
        />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}
