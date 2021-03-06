import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function Register({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Welcome</Text>
				<View>
					<Text style={styles.subHeadText}>create an account</Text>
				</View>
			</View>
			<View style={styles.form}>
				<TextInput placeholder="Username" style={styles.textInput} />
				<TextInput placeholder="Email" style={styles.textInput} />
				<TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} />
				<TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.textInput} />
				<View style={styles.buttonAlign}>
					<TouchableOpacity style={styles.theButton}>
						<Button title="REGISTER" color="black" onPress={() => navigation.navigate('Home')}></Button>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.subFootText}>
				<Text>Have an account?</Text>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text style={{ marginLeft: 10, fontWeight: 'bold' }}>LOGIN</Text>
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
