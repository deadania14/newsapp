import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
export default function Splash() {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/img/newsateLogo.png')} style={{ width: 254.97, height: 71.97 }} />
			<ActivityIndicator size="large" color="#FF00D6" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
