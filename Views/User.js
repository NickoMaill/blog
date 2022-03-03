import { SafeAreaView, Text } from "react-native";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

export default function User() {

    return (
        <SafeAreaView>

            <Text>Profil Utilisateur</Text>
            <Navbar/>

        </SafeAreaView>
    )
}