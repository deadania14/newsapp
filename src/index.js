import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Login, NDetails, About, Register, Splash, Logo } from './scenes/index';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const WelcomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator
		screenOptions={{
			headerTitleStyle: {
				fontFamily: 'NotoSerifJPRegular',
				fontSize: 36,
			},
		}}
	>
		<HomeStack.Screen
			name="Headline"
			component={Home}
			options={{
				title: 'Home',
				headerRight: () => (
					<AntDesign name="menufold" size={36} color="black" onPress={() => navigation.openDrawer()} />
				),
			}}
		/>
		<HomeStack.Screen name="NDetails" component={NDetails} options={{ headerShown: false }} />
		<HomeStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
	</HomeStack.Navigator>
);
const AboutStackScreen = ({ navigation }) => (
	<AboutStack.Navigator
		screenOptions={{
			headerTitleStyle: {
				fontFamily: 'NotoSerifJPRegular',
				fontSize: 36,
			},
		}}
	>
		<AboutStack.Screen
			name="Headline"
			component={About}
			options={{
				title: 'About',
				headerRight: () => (
					<AntDesign name="menufold" size={36} color="black" onPress={() => navigation.openDrawer()} />
				),
			}}
		/>
	</AboutStack.Navigator>
);
const WelcomeStackScreen = () => (
	<WelcomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Logo">
		<WelcomeStack.Screen name="Logo" component={Logo} options={{ headerShown: false }} />
		<WelcomeStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
		<WelcomeStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
	</WelcomeStack.Navigator>
);

export const AppNavigator = () => (
	<>
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Logout">
				<Drawer.Screen name="Home" component={HomeStackScreen} />
				<Drawer.Screen name="About" component={AboutStackScreen} />
				<Drawer.Screen name="Logout" component={WelcomeStackScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	</>
);
export default AppNavigator;
