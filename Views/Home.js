import { SafeAreaView, Text } from "react-native";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, []);

    return (
        <SafeAreaView>

            <Text>Home</Text>
        </SafeAreaView>
    )
}