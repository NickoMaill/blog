import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Context } from "../Context/BlogContext";
import Post from "../Components/Post";

export default function Home() {

    const stateContext = useContext(Context)

    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoaded2, setIsLoaded2] = useState(true)
    const [userData, setUserData] = useState({})


    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${stateContext.userId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserData(data);
                setIsLoaded2(true)

            })

        fetch(`https://jsonplaceholder.typicode.com/users/${stateContext.userId}/posts`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                stateContext.setUserPost(data);
                setIsLoaded(true);

            })
    }, []);

    if (isLoaded !== true && isLoaded2 !== true) {
        return (
            <SafeAreaView>

                <Text>Accueil</Text>

                <Navbar />
            </SafeAreaView>
        )
    } else {

        return (
            <SafeAreaView style={styles.homeView}>

                <View style={styles.homeContent}>

                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Accueil</Text>

                    <FlatList
                        style={{ padding: 40 }}
                        data={stateContext.userPost}
                        renderItem={(data) =>
                            <Post
                                name={userData.name}
                                username={userData.username}
                                title={data.item.title}
                                body={data.item.body} />
                        }
                        keyExtractor={(_data, i) => i.toString()}
                        ListHeaderComponent={() => <Text>Voici vos dernier posts</Text>}
                    />



                </View>

                <Navbar />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    homeView: {
        backgroundColor: '#F0F2F5',
        // marginTop: 20
    },

    homeContent: {
        marginTop: 20
    }
})