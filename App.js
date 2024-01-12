import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from "./tab/HomeTab";
import Datadiri from "./tab/Datadiri";
import MapsTab from "./tab/MapsTab";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Datadiri" component={Datadiri} />
        <Tab.Screen name="Maps" component={MapsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}