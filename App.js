/* import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import { createBottomTabNavigator,TabBarBottom,} from "@react-navigation/bottom-tabs";
import AlmacenarReact from "./screens/AlmacenarReact";
import AlmacenarExpo from "./screens/AlmacenarExpo";

const Tab = createBottomTabNavigator();

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
  <NavigationContainer>
  <Tab.Navigator
  initialRouteName="Home"
  activeTab={activeTab}
  onTabPress={setActiveTab}
  >
  <Tab.Screen name="Home" component={AlmacenarReact} />
  <Tab.Screen name="Expo" component={AlmacenarExpo} />
  </Tab.Navigator>
  </NavigationContainer>
  );
 };
 export default App; */

 
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { createBottomTabNavigator,TabBarBottom,} from "@react-navigation/bottom-tabs";
import AlmacenarReact from "./screens/AlmacenarReact";
import AlmacenarExpo from "./screens/AlmacenarExpo";

const Tab = createBottomTabNavigator();

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
  <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Home"
    activeTab={activeTab}
    onTabPress={setActiveTab}
    >
    <Tab.Screen name="Almacenamiento React" component={AlmacenarReact} />
    <Tab.Screen name="Almacenamiento Expo" component={AlmacenarExpo} />
    </Tab.Navigator>
    </NavigationContainer>
  );
 };
 export default App;



/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
