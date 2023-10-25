import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { UserNameProvider } from './src/contexts/userName'
import tw from './src/library/tailwind'
import { HomeScreen } from './src/screens'
import { Android } from './src/utils/platform'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <UserNameProvider>
            <SafeAreaView style={tw`${style.root}`}>
                <StatusBar style="auto" />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <Stack.Screen name="home" component={HomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </UserNameProvider>
    )
}

const style = {
    root: `flex-1 bg-white pt-[${Android ? 30 : 10}px]`,
}
