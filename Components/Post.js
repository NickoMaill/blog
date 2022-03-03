import { View, Text, StyleSheet } from "react-native"

export default function Post(props) {

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25, fontWeight:'bold'}}>{props.name}</Text>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>{props.username}</Text>
            <Text style={{fontSize: 15, textTransform:'capitalize'}}>{props.title}</Text>
            <Text style={{textAlign:'justify'}}>{props.body}</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        borderStyle:'solid',
        borderWidth:1,
        backgroundColor:'#fff',
        padding:20,
        margin:10,
    }

})