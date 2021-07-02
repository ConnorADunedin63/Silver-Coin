import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './Home';

const Stack = createStackNavigator();

const App: React.FC<any> = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;