import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from "../components/Map";
//import MapView from 'react-native-maps';
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { createStackNavigator } from "@react-navigation/stack";

const MapScreen = () => {

  const Stack = createStackNavigator();
  
  return (
    <View>
      <Text>MapScreen</Text>

      <View style={tw`h-2/6`}>
        <Map />
      </View>

      <View style={tw`h-4/6`}>
        
      <Stack.Navigator>
          <Stack.Screen 
          name="NavigateCard"
          component={NavigateCard}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})