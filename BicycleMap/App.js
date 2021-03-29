import React from 'react';
import { Text, StyleSheet, StatusBar } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import MapScreen from './src/Screens/MapScreen';
import CycleDetails from './src/Screens/CycleDetails'
import StandDetailsScreen from './src/Screens/StandDetailsScreen'
const MapStack = createStackNavigator()


function App() {
    return (
        <NavigationContainer>
            <MapStack.Navigator>
                <MapStack.Screen name="Map" component={MapScreen} options={{
                    headerShown: false
                }}
                />
                <MapStack.Screen name="CycleDetails" component={CycleDetails} options={{
                    headerShown: false
                }}
                />
                   <MapStack.Screen name="StandDetailsScreen" component={StandDetailsScreen} options={{
                    headerShown: false
                }}
                />
            </MapStack.Navigator>
        </NavigationContainer>
    )
}

export default App;
