import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Splash from './splash';
import moment from 'moment';

export default class Source extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			dataSource: null,
		};
		this.navigate = this.props.navigation.navigate;
	}
	componentDidMount() {
		var url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=453817020ac849d28ea1c03c1a990e70';
		var req = new Request(url);
		fetch(req)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					loading: false,
					dataSource: responseJson.articles,
				});
			})
			.catch((error) => console.log(error)); //to catch the errors if any
	}
	FlatListItemSeparator = () => {
		return (
			<View
				style={{
					height: 0.5,
					width: '100%',
					backgroundColor: '#f8edeb',
				}}
			/>
		);
	};
	renderItem = (data) => (
		<TouchableOpacity onPress={() => this.navigate('NDetails', data.item)}>
			<View style={styles.news}>
				<Image source={{ uri: data.item.urlToImage }} style={styles.thumbnail} />
				<View>
					<Text style={styles.newsTitle}>{data.item.title}</Text>
					<View style={styles.newsDetails}>
						<Text style={styles.newsSrc}>{data.item.source.name}</Text>
						<Text style={styles.newsTime}>· {moment(data.item.publishedAt).fromNow()}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
	render() {
		// console.log(this.state.dataSource);
		const { navigation } = this.props;
		if (this.state.loading) {
			return <Splash />;
		}
		return (
			<>
				<View style={styles.container}>
					<FlatList
						data={this.state.dataSource}
						ItemSeparatorComponent={this.FlatListItemSeparator}
						renderItem={(item) => this.renderItem(item)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
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
		justifyContent: 'space-between',
	},
	headerText: {
		fontFamily: 'NotoSerifJPRegular',
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
		paddingVertical: 5,
		backgroundColor: 'white',
	},
	newsDetails: {
		flexDirection: 'row',
		// alignItems: 'center',
		alignContent: 'center',
	},
	newsTitle: {
		fontFamily: 'CrimsonBoldItalic',
		fontSize: 25,
		marginBottom: 10,
	},
	newsSrc: {
		// fontFamily: 'ComfortaaBold',
		fontFamily: 'NotoSerifRegular',
		fontSize: 15,
	},
	newsTime: {
		marginLeft: 5,
		fontFamily: 'RobotoRegular',
		fontSize: 15,
	},
});
