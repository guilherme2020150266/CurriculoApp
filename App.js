import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';






function HomeScreen ({navigation}) {
  return(
     <View style={styles.container}>
    <Image 
          source={{uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFPE8Ow3AYwAQ/profile-displayphoto-shrink_800_800/0/1613316809495?e=1644451200&v=beta&t=3fEpTYpzrV7tBQqsbFKZAVtSQd4KXH1dE2rAFrbU1bg',}}
          style={ styles.photo}/>
      <Text style={styles.title}>
      Zé das Couves
      </Text>
      <Text style={styles.paragraph}>
        Agricultor
      </Text>
      <Text style={styles.paragraph}>
        Movimento dos Sem Terra
      </Text>
      <Text style={styles.title}>
      </Text>
      <Button 
        title="Hobbies"
        color="#000000"
        onPress={() => navigation.navigate('Hobbies')}
      />
      <Button 
        title="Extras"
        color="#000000"
        onPress={() => navigation.navigate('Extras')}
      />
    </View>
  );
}

function Hobbies ({navigation}) {
  return(
     <View style={styles.container}>
      <Text style={styles.title}>
      Hobbies
      </Text>
      <Text>
        Plantar
      </Text>
      <Text>
       Colher
      </Text>
      <Text>
       Nadar no Açude
      </Text>
      <Text>
      Subir em Árvore
      </Text>
      <Text>
        Olhar Estrelas
      </Text>
    </View>
  );
}

function Extras ({navigation}) {
  return(
     <View style={styles.container}>
      <Text style={styles.title}>
      Atividades Extras
      </Text>
      <Text>
        Caçar Tatu-peba
      </Text>
      <Text>
        Andar de Bicicleta
      </Text>
      <Text>
        Empinar Pipa
      </Text>
      <Text>
        Andar de Carrinho de Rolimã
      </Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerStyle:{backgroundColor:"#90EE90"},
          headerTitleStyle:{fontWeight:'bold'},
        }}
        />
        <Stack.Screen name="Hobbies" component={Hobbies}  options={{ title: 'Hobbies',                headerStyle:{backgroundColor:"#00FF7F"},
          headerTitleStyle:{fontWeight:'bold'} }}
        />
        <Stack.Screen name="Extras" component={Extras}  options={{ title: 'Extras',                   headerStyle:{backgroundColor:"#00FF7F"},
          headerTitleStyle:{fontWeight:'bold'} }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#32CD32',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    textAlign: 'center',
  },
  title:{
        margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width:190,
    height:220,
    borderRadius:50
  }
});