import { View, Text } from 'react-native'
import tw from '../../library/tailwind'

export default function Home() {
    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Text style={tw`${styles.welcome}`}>Hello Tuba!</Text>
            <Text style={tw`${styles.text}`}>This is your boilerplate. Happy coding!</Text>
        </View>
    )
}

const styles = {
    welcome: 'text-secondary text-[15px] font-500 mb-3',
    text: 'text-[15px]',
}
