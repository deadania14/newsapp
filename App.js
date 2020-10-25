import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import Index from './src/index';
import store from './src/store';

const getFonts = () => {
	return Font.loadAsync({
		ComfortaaBold: require('./assets/fonts/ComfortaaBold.ttf'),
		ComfortaaRegular: require('./assets/fonts/ComfortaaRegular.ttf'),
		RobotoBold: require('./assets/fonts/RobotoBold.ttf'),
		RobotoRegular: require('./assets/fonts/RobotoRegular.ttf'),
		CrimsonItalic: require('./assets/fonts/CrimsonItalic.ttf'),
		CrimsonBoldItalic: require('./assets/fonts/CrimsonBoldItalic.ttf'),
		NotoSerifRegular: require('./assets/fonts/NotoSerifRegular.ttf'),
		NotoSerifJPRegular: require('./assets/fonts/NotoSerifJPRegular.otf'),
	});
};
export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	if (fontsLoaded) {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					{/* <Text>Open up App.js to start working on your app!</Text> */}
					<Index />
				</View>
			</Provider>
		);
	} else {
		return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
