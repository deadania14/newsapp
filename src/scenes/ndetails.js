import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import data from '../dummy/dataDesc.json';
import moment from 'moment';
import Header from '../components/header';

// https://www.youtube.com/watch?v=-40TBdSRk6E
export default function NDetails({ route, navigation }) {
	const { title, description, urlToImage, publishedAt, source, url, author, content } = route.params;
	// console.log(urlToImage);
	// const urlis = JSON.stringify(urlToImage);
	// console.log(urlis);
	return (
		<>
			<Header HeaderText={source.name} iconName="back" onPress={() => navigation.goBack(null)} />
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.newsDetails}>
						<Text style={styles.newsTitle}>{title}</Text>
					</View>
					<Image source={{ uri: urlToImage }} style={{ height: 200 }} />
					<View style={styles.newsDetails}>
						<Text style={styles.newsTime}>
							{author + ' · ' + moment(publishedAt).add(3, 'days').calendar()}
						</Text>
						<Text style={styles.newsDesc}>{description}</Text>
						<Text style={styles.newsCont}>{content}</Text>
						<Text style={styles.newsCont}>
							{data.text}
							<TouchableOpacity
								onPress={() => {
									Linking.openURL(url);
								}}
							>
								<Text style={styles.moreLink}>Check for More</Text>
							</TouchableOpacity>
						</Text>
					</View>
				</ScrollView>
			</View>
		</>
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
		paddingTop: 40,
		paddingVertical: 10,
		// paddingHorizontal: 30,
		// backgroundColor: 'blue',
		backgroundColor: '#ffffff',
		flexDirection: 'row',
	},
	headerText: {
		fontFamily: 'NotoSerifJPRegular',
		fontSize: 36,
		marginLeft: 20,
	},
	thumbnail: {
		height: 200,
		width: 100,
	},
	news: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: 'white',
	},
	newsDetails: {
		paddingHorizontal: 20,
		backgroundColor: 'white',
		alignContent: 'center',
	},
	newsTitle: {
		fontFamily: 'CrimsonItalic',
		fontSize: 25,
		marginVertical: 20,
	},
	newsSrc: {
		fontFamily: 'RobotoRegular',
		fontSize: 15,
	},
	newsTime: {
		fontFamily: 'RobotoRegular',
		fontSize: 15,
		alignItems: 'stretch',
		marginVertical: 10,
		color: 'black',
	},
	newsDesc: {
		marginBottom: 20,
		fontFamily: 'RobotoRegular',
		fontSize: 15,
		color: 'grey',
	},
	newsCont: {
		fontFamily: 'NotoSerifRegular',
		fontSize: 15,
		marginBottom: 20,
	},
	moreLink: {
		backgroundColor: 'yellow',
		fontFamily: 'NotoSerifRegular',
		fontSize: 15,
	},
});
