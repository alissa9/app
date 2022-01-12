import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/core"
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Entypo, Ionicons, Feather } from "@expo/vector-icons"
import useAuth from "../hooks/useAuth";
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-rn';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FontAwesome } from '@expo/vector-icons';




const HomeScreen = () => {

    const navigation = useNavigation();
    const { user, logout } = useAuth();



    return (
        <SafeAreaView>
            {/* Header */}
            <View style={tw("flex-row items-center justify-between px-5")}>
                <TouchableOpacity onPress={logout}>

                    <Image source={{ uri: user.photoURL }} style={tw("h-10 w-10 rounded-full")} />
                </TouchableOpacity>



                <TouchableOpacity>
                    <Image style={tw("h-16 w-16")} source={require("../assets/logo.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    <Ionicons name='chatbubbles-sharp' size={30} color='#66c6ba' />
                </TouchableOpacity>
            </View>
            {/* End of Header */}

            <View style={{ marginTop: 15, flexDirection: "row" }}>
                <GooglePlacesAutocomplete
                    query={{ key: "AIzaSyCEzWUbpQmcga6G7TL4cz3d1sWGoPdFPzM" }}
                    onPress={(data, details = null) => {
                        console.log(data.description)

                    }}
                    placeholder='Enter Location'
                    styles={{
                        textInput: {
                            backgroundColor: "#eee",
                            borderRadius: 20,
                            fontWeight: "700",
                            marginTop: 7,
                        },
                        textInputContainer: {
                            backgroundColor: "#eee",
                            borderRadius: 50,
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: "10",
                        },
                    }}
                    renderLeftButton={() => (<View style={{ marginLeft: 15 }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>)}
                    renderRightButton={() => (<View
                        style={{
                            marginRight: 15, flexDirection: "row",
                            backgroundColor: "white",
                            padding: 9,
                            borderRadius: 30,
                            alignItems: "center",
                        }}>
                        <AntDesign name='clockcircle' size={20} />
                        <Text>Search</Text>
                    </View>)}


                />



            </View>
            <View alignItems="center">

                <FontAwesome.Button name="camera" color="black" size="50" backgroundColor="transparent" onPress={() => navigation.navigate("Camera")}

                >

                </FontAwesome.Button>

            </View>
        </SafeAreaView >
    )
}

export default HomeScreen;
