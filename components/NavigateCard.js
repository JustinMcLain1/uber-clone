import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
//import Geolocation from '@react-native-community/geolocation';


const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    //Geolocation.getCurrentPosition(info => console.log(info));
    

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Justin</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
                placeholder="Where to?"
                styles ={toInputBoxStyles}
                enablePoweredByContainer={false}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    })
                    );
                    navigation.navigate("RideOptionsCard")
                }}
                query= {{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={300}
                // currentLocation={true}
                // currentLocationLabel='Current location'
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard


const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#D3D3D3",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});