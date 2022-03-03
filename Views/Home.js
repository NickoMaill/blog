import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Context } from "../Context/BlogContext";
import Post from "../Components/Post";

export default function Home() {

    const stateContext = useContext(Context)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoaded2, setIsLoaded2] = useState(true)
    const [useData, setUserData] = useState({})


    useEffect(() => {

        // fetch(`https://jsonplaceholder.typicode.com/users/${stateContext.userId}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setUserData(data);
        //         setIsLoaded2(true)

        //     })
            
            fetch(`https://jsonplaceholder.typicode.com/users/${stateContext.userId}/posts`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
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
            <SafeAreaView>

                <Text>Accueil</Text>

                <FlatList
                    data={stateContext.userPost}
                    renderItem={(data) =>
                        <Post
                            name={useData.name}
                            title={data.item.title}
                            body={data.item.body} />
                    }
                    keyExtractor={(_data, i) => i.toString()}
                    ListHeaderComponent={() => <Text>loremmmmmmm</Text>}
                    ListFooterComponent={() => <Text>loremmmmmmm</Text>}
                    ItemSeparatorComponent={() => (
                        <View style={{ borderBottomWidth: 1 }}></View>
                    )}
                >
                </FlatList>



                <Navbar />
            </SafeAreaView>
        )
    }
}