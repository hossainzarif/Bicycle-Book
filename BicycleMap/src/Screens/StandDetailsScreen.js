

import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert, Platform, PermissionsAndroid } from "react-native"

import CycleCard from "../Components/CycleCard"
import firstlocationData from "../../assets/data/firstlocationData"
import secondlocationData from "../../assets/data/secondlocationData"
import CycleDetails from "../Screens/CycleDetails"
import { request, PERMISSIONS, requestLocationAccuracy } from 'react-native-permissions';
import colors from "../../assets/colors/colors"

import Icon from 'react-native-vector-icons/FontAwesome5';



const StandDetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>


            <TouchableOpacity
                style={styles.backiconwrapper}
                onPress={
                    () => {
                        navigation.goBack()
                    }
                }
            >

                <Icon name="chevron-left" size={20} color="black" />
            </TouchableOpacity>


            <View style={{ marginTop: 20, height: 380, }}>
                <FlatList
                    data={firstlocationData}
                    horizontal
                    showsHorizontalScrollIndicator={false}

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
                                    title={item.title}
                                    battery={item.Battery}
                                    weight={item.weight}
                                    speed={item.maxSpeed}
                                    image={item.image}

                                />

                            </TouchableOpacity>




                        )
                    }
                    }
                />



            </View>



        </View>

    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "white"
        },
        backiconwrapper:
        {
            marginTop: 40,
            marginLeft: 20
        },
        headingText:
        {
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: 20

        },
        biketypeText:
        {
            fontSize: 17,
            color: "gray",
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 25
        },
        cycleImage: {
            width: 350,
            height: 250,

        },
        imageHolder:
        {
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
        }
        , cardStyle:
        {   
            borderRadius: 15,
            elevation: 10,
            height: 50,
            width: 90,
            // justifyContent:"center",
            // alignContent:"center",
            // alignSelf:"center",
            // alignItems:"center"
            
        },



    }
)

export default StandDetailsScreen