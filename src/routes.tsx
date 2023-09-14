import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Repositories, RepositoryDetails} from './screens';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Repositories"
          component={Repositories}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RepositoryDetails"
          component={RepositoryDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
