import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Login, NDetails, About, Register, Splash, Logo } from './scenes/index';
const Stack = createStackNavigator();
export default function Index() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Logo">
				<Stack.Screen name="Logo" component={Logo} options={{ headerShown: false }} />
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
				<Stack.Screen name="NDetails" component={NDetails} options={{ headerShown: false }} />
				<Stack.Screen name="About" component={About} options={{ headerShown: false }} />
				<Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
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
