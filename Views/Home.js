import { SafeAreaView, Text } from "react-native";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-native";

export default function Home() {
    const navigate = useNavigate()



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, []);

    return (
        <SafeAreaView>

            <Text>Accueil</Text>
            <Navbar/>
        </SafeAreaView>
    )
}