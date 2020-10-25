import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class Header extends React.Component {
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.headerText}>{this.props.HeaderText}</Text>
				<TouchableOpacity onPress={this.props.onPress}>
					<AntDesign name={this.props.iconName} size={36} color="black" style={styles.icon} />
				</TouchableOpacity>
			</View>
		);
	}
}
export default Header;
const styles = StyleSheet.create({
	header: {
		paddingTop: 40,
		// paddingVertical: 10,
		backgroundColor: 'blue',
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headerText: {
		fontFamily: 'NotoSerifJPRegular',
		fontSize: 36,
		marginLeft: 20,
	},
	icon: {
		marginRight: 20,
		marginTop: 30,
	},
});
