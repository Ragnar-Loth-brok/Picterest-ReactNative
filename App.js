import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import { 
  useFonts,
  KoHo_200ExtraLight,
  KoHo_200ExtraLight_Italic,
  KoHo_300Light,
  KoHo_300Light_Italic,
  KoHo_400Regular,
  KoHo_400Regular_Italic,
  KoHo_500Medium,
  KoHo_500Medium_Italic,
  KoHo_600SemiBold,
  KoHo_600SemiBold_Italic,
  KoHo_700Bold,
  KoHo_700Bold_Italic 
} from '@expo-google-fonts/koho';

import Main from './src/components/Main';
import StartScreen from './src/screens/StartScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import AccountScreen from './src/screens/AccountScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StartNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }} >
    <Stack.Screen name='Start' component={StartScreen} />
    <Stack.Screen name='Login' component={LoginStack} />
  </Stack.Navigator>
)

const LoginStack = () => (
  <Tab.Navigator screenOptions={{ tabBarVisible: false }} >
    <Tab.Screen name='Sign In' component={SigninScreen} options={{unmountOnBlur: true}} />
    <Tab.Screen name='Sign Up' component={SignupScreen} options={{unmountOnBlur: true}} />
  </Tab.Navigator>
)


const MainScreens = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 20,
          left: 80,
          right: 80,
          backgroundColor: '#eee',
          borderRadius: 50,
          height: 60
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => <Icon name='home' type='font-awesome-5' size={30} color={ focused ? '#022c43' : '#999' } />,
        unmountOnBlur: false
      }} />
      <Tab.Screen name='Add' component={AddScreen} options={{
        tabBarIcon: ({ focused }) => <Icon name='plus' type='font-awesome-5' size={35} color={ focused ? 'tomato' : '#999' } />,
        unmountOnBlur: true
      }} />
      <Tab.Screen name='Account' component={AccountScreen} options={{
        tabBarIcon: ({ focused }) => <Icon name='account-convert' type='material-community' size={35} color={ focused ? '#022c43' : '#999' } />,
        unmountOnBlur: true
      }} />
    </Tab.Navigator>
  )
}

export default function App() {

  const [fontsLoaded] = useFonts({
    KoHo_200ExtraLight,
    KoHo_200ExtraLight_Italic,
    KoHo_300Light,
    KoHo_300Light_Italic,
    KoHo_400Regular,
    KoHo_400Regular_Italic,
    KoHo_500Medium,
    KoHo_500Medium_Italic,
    KoHo_600SemiBold,
    KoHo_600SemiBold_Italic,
    KoHo_700Bold,
    KoHo_700Bold_Italic,
  });

  

  if(!fontsLoaded) return  null;

  return (
    <>
    <Main>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarVisible: false }} >
          <Tab.Screen name='Start' component={StartNavigator} />
          <Tab.Screen name='Main' component={MainScreens} />
        </Tab.Navigator>
      </NavigationContainer>
    </Main>
    </>
  );
}
