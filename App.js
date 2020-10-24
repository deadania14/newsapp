import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Index from './src/index';

const getFonts = () => {
	return Font.loadAsync({
		ComfortaaBold: require('./assets/fonts/ComfortaaBold.ttf'),
		ComfortaaRegular: require('./assets/fonts/ComfortaaRegular.ttf'),
		RobotoBold: require('./assets/fonts/RobotoBold.ttf'),
		RobotoRegular: require('./assets/fonts/RobotoRegular.ttf'),
	});
};
export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	if (fontsLoaded) {
		return (
			<View style={styles.container}>
				{/* <Text>Open up App.js to start working on your app!</Text> */}
				<Index />
			</View>
		);
	} else {
		return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
