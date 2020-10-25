import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Login, Register } from '../scenes/index';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function WelcomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
			<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
