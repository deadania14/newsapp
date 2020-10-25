import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Button } from 'react-native';
export default function Logo({ navigation }) {
	return (
		<>
			<View style={styles.container}>
				<Image source={require('../../assets/img/newsateLogo.png')} style={{ width: 254.97, height: 71.97 }} />
			</View>
			<View style={styles.options}>
				<TouchableOpacity style={styles.theButton}>
					<Button
						title="LOGIN"
						color="black"
						style={styles.textBtn}
						onPress={() => navigation.navigate('Login')}
					></Button>
				</TouchableOpacity>
				<TouchableOpacity style={styles.theButton}>
					<Button
						title="REGISTER"
						color="black"
						style={styles.textBtn}
						onPress={() => navigation.navigate('Register')}
					></Button>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	options: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'stretch',
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	theButton: {
		width: 150,
		justifyContent: 'flex-end',
		marginBottom: 40,
	},
	textBtn: {
		fontSize: 30,
		fontFamily: 'RobotoBold',
	},
});
