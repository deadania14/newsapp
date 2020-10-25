import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { About } from '../scenes/index';

const Stack = createStackNavigator();
export default function AboutStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="About" component={About} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'yellow',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
