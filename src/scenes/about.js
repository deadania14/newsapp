import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Header from '../components/header';
import store from '../store';
export default function About({ navigation }) {
	const GlobalState = useSelector((state) => state);
	return (
		<>
			<Header HeaderText="About" iconName="home" onPress={() => navigation.navigate('Home')} />
			<View style={styles.container}>
				<View style={styles.MeTitlePosition}>
					<Image source={require('../../assets/img/Me.png')} style={{ width: 141, height: 250 }} />
					<Text style={styles.MeTitle}>{GlobalState.name}</Text>
				</View>
				<View style={styles.MeDetails}>
					<Text style={styles.MeDHead}>{GlobalState.bio}</Text>
					<Text style={styles.MeDSub}>{GlobalState.alamat}</Text>
				</View>
				<View style={styles.MeSocials}>
					<Text style={styles.SocialsTitle}>Get to know me</Text>
					<View style={styles.Socials}>
						<TouchableOpacity
							style={styles.SocialItems}
							onPress={() => {
								Linking.openURL(GlobalState.socials.github.link);
							}}
						>
							<AntDesign name="github" size={50} color="black" />
							<Text style={styles.SIText}>{GlobalState.socials.github.username}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.SocialItems}
							onPress={() => {
								Linking.openURL(GlobalState.socials.twitter.link);
							}}
						>
							<AntDesign name="twitter" size={50} color="black" />
							<Text style={styles.SIText}>{GlobalState.socials.twitter.username}</Text>
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
