import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import { Home, Login, NDetails, About, Register, Splash } from './scenes/index';
export default function App() {
	return (
		<View style={styles.container}>
			{/* <Splash /> */}
			{/* <Home /> */}
			{/* <About /> */}
			{/* <Login /> */}
			<Register />
		</View>
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
