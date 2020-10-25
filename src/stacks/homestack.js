import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home, NDetails } from '../scenes/index';
const Stack = createStackNavigator();
export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
			<Stack.Screen name="NDetails" component={NDetails} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
