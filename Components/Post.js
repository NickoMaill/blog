import { View, Text } from "react-native-web"

export default function Post(props) {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.title}</Text>
            <Text>{props.body}</Text>
        </View>
    )
}