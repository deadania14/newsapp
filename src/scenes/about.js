import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/header';

export default function About({ navigation }) {
	return (
		<>
			<Header HeaderText="About" iconName="home" onPress={() => navigation.navigate('Home')} />
			<View style={styles.container}>
				<View style={styles.MeTitlePosition}>
					<Image source={require('../../assets/img/Me.png')} style={{ width: 141, height: 250 }} />

					<Text style={styles.MeTitle}>Dea Dania</Text>
				</View>
				<View style={styles.MeDetails}>
					<Text style={styles.MeDHead}>JavaScript Anthusiast</Text>
					<Text style={styles.MeDSub}>Depok, Jawa Barat, Indonesia</Text>
				</View>
				<View style={styles.MeSocials}>
					<Text style={styles.SocialsTitle}>Get to know me</Text>
					<View style={styles.Socials}>
						<TouchableOpacity
							style={styles.SocialItems}
							onPress={() => {
								Linking.openURL('http://github.com/deadania14/');
							}}
						>
							<AntDesign name="github" size={50} color="black" />
							<Text style={styles.SIText}>deadania14</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.SocialItems}
							onPress={() => {
								Linking.openURL('https://twitter.com/deadania?lang=en');
							}}
						>
							<AntDesign name="twitter" size={50} color="black" />
							<Text style={styles.SIText}>deadania</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'stretch',
		justifyContent: 'center',
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
	MeTitlePosition: {
		alignItems: 'center',
	},
	MeSocials: {
		// alignItems: 'center',
		marginHorizontal: 40,
		marginVertical: 10,
	},
	MeTitle: {
		fontFamily: 'ComfortaaBold',
		marginVertical: 20,
		fontSize: 30,
	},
	MeDetails: {
		// backgroundColor: 'blue',
		marginHorizontal: 40,
		marginVertical: 25,
	},
	MeDHead: {
		fontFamily: 'ComfortaaBold',
		fontSize: 20,
	},
	MeDSub: {
		marginVertical: 15,
		fontFamily: 'RobotoRegular',
		fontSize: 15,
	},
	SocialsTitle: {
		fontFamily: 'ComfortaaBold',
		fontSize: 20,
	},
	Socials: {
		flexDirection: 'row',
	},
	SocialItems: {
		marginRight: 30,
		marginVertical: 20,
		alignItems: 'center',
	},
	SIText: {
		marginVertical: 20,
		fontFamily: 'RobotoRegular',
		fontSize: 15,
	},
});
