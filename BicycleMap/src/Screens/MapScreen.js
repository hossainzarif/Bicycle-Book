import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert } from "react-native"

import CycleCard from "../Components/CycleCard"
import firstlocationData from "../../assets/data/firstlocationData"
import secondlocationData from "../../assets/data/secondlocationData"
import CycleDetails from "../Screens/CycleDetails"




const MapScreen = ({navigation}) => {
    return (

        <View style={{ flex: 1,alignItems:"center",justifyContent:"center" ,}}>

        
            <FlatList
                data={firstlocationData}
                horizontal
                renderItem={({ item }) => {
                
                    return (



                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('CycleDetails', {
                                    items: item,
                                })
                            }
                            }
                        >
                            <CycleCard 
                            title = {item.title}
                            battery = {item.Battery}
                            weight = {item.weight}
                            speed = {item.maxSpeed}
                            image = {item.image}
                            
                            
                            
                            />

                        </TouchableOpacity>




                    )
                }
                }
            />







        </View>

    )
}


export default MapScreen