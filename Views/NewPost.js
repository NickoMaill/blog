import { SafeAreaView, Text } from "react-native";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

export default function NewPost() {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, []);

    return (
        <SafeAreaView>

            <Text>Nouveau post</Text>
            <Navbar/>

        </SafeAreaView>
    )
}