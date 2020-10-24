import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// https://www.youtube.com/watch?v=-40TBdSRk6E
export default function NDetails({ route, navigation }) {
	const { title, description, urlToImage, publishedAt } = route.params;
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity>
					<AntDesign name="menuunfold" size={36} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerText}>Headline News</Text>
			</View>
			<Text>{JSON.stringify(title)}</Text>
			<Text>{JSON.stringify(description)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'yellow',
		// alignItems: 'center',
		// justifyContent: 'center',
		flex: 1,
		// backgroundColor: 'yellow',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
	},
	header: {
		marginTop: 40,
		paddingVertical: 10,
		// paddingHorizontal: 30,
		// backgroundColor: 'blue',
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		// alignItems:""
	},
	headerText: {
		fontFamily: 'ComfortaaBold',
		fontSize: 36,
		marginLeft: 20,
	},
	thumbnail: {
		height: 200,
		// backgroundColor: 'blue',
		marginVertical: 15,
		// tintColor: 'gray',
	},
	news: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: 'white',
	},
	newsDetails: {
		flexDirection: 'row',
		// alignItems: 'center',
		alignContent: 'center',
	},
	newsTitle: {
		fontFamily: 'RobotoRegular',
		fontSize: 20,
	},
	newsSrc: {
		// fontFamily: 'ComfortaaBold',
		fontFamily: 'RobotoRegular',
		fontSize: 15,
	},
	newsTime: {
		marginLeft: 5,
		fontFamily: 'RobotoRegular',
		fontSize: 15,
	},
});
