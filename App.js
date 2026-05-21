// importação para o menu lateral funcionar
import 'react-native-gesture-handler';

// importar o container da navegção, ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

// import o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

// importar as telas
import Jogador1 from './components/Jogador1'

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
