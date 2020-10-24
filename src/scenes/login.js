import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function Login() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Welcome back</Text>
				<View>
					<Text style={styles.subHeadText}>let's read some news</Text>
				</View>
			</View>
			<View style={styles.form}>
				<TextInput placeholder="Username / Email" style={styles.textInput} />
				<TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} />
				<View style={styles.buttonAlign}>
					<TouchableOpacity style={styles.theButton}>
						<Button title="LOGIN" color="black"></Button>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.subFootText}>
				<Text>don't have an account yet?</Text>
				<TouchableOpacity>
					<Text style={{ marginLeft: 10, fontWeight: 'bold' }}>REGISTER</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		// backgroundColor: 'yellow',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	header: {
		marginTop: 40,
		paddingVertical: 10,
		paddingHorizontal: 30,
		// backgroundColor: 'blue',
		backgroundColor: '#ffffff',
		flexDirection: 'column',
	},
	subHeadText: {
		fontFamily: 'ComfortaaBold',
		fontSize: 20,
		marginTop: 10,
	},
	subFootText: {
		flexDirection: 'row',
		fontFamily: 'ComfortaaBold',
		fontSize: 20,
		marginRight: 30,
		justifyContent: 'flex-end',
	},
	headerText: {
		fontFamily: 'ComfortaaBold',
		fontSize: 36,
	},
	form: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: '#ffffff',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	formLabel: {
		paddingLeft: 20,
	},
	textInput: {
		margin: 15,
		padding: 5,
		height: 40,
		borderColor: 'black',
		borderWidth: 0.5,
		borderRadius: 2,
	},
	buttonAlign: {
		alignItems: 'stretch',
		marginHorizontal: 15,
	},
	theButton: {
		paddingVertical: 20,
	},
});
