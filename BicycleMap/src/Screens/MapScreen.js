import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert, Platform, PermissionsAndroid } from "react-native"

import CycleCard from "../Components/CycleCard"
import firstlocationData from "../../assets/data/firstlocationData"
import secondlocationData from "../../assets/data/secondlocationData"
import CycleDetails from "../Screens/CycleDetails"
import { request, PERMISSIONS, requestLocationAccuracy } from 'react-native-permissions';
import colors from "../../assets/colors/colors"

import MapView, { PROVIDER_GOOGLE, Marker, MarkerAnimated, Callout } from 'react-native-maps';
import { Button, Card } from 'react-native-elements'

import locationMarker from '../../assets/data/locationMarker'
import Icon from 'react-native-vector-icons/FontAwesome5';


import Geolocation from '@react-native-community/geolocation';

import StatusCard from '../Components/StatusCard'

const MapScreen = ({ navigation }) => {

    useEffect(() => {
        requestLocationPermission()
    }, []);

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

            if (response === 'granted') {
                locateCurrentPosition()
            }
        }
        else {
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

            if (response === 'granted') {
                locateCurrentPosition()
            }

        }

    }

    const locateCurrentPosition = () => {
        Geolocation.getCurrentPosition((success) => { console.log(success) }, (e) => { console.log(e) }, {
            maximumAge: 1000, enableHighAccuracy: true, timeout: 10000

        });


    }

    return (




        <View style={{ paddingTop: 0 }}>

            <MapView
                provider={PROVIDER_GOOGLE}
                zoomEnabled={true}
                loadingEnabled={true}
                loadingIndicatorColor="#666666"
                loadingBackgroundColor="#eeeeee"
                moveOnMarkerPress={false}
                showsUserLocation={true}
                showsCompass={true}
                showsPointsOfInterest={false}
                showsMyLocationButton={true}



                style={styles.mapStyle}
                region={{


                    latitude: 23.783164276705026,
                    longitude: 90.39971540467896,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>


                {
                    locationMarker.map(marker =>
                    (
                        <Marker
                            pinColor={colors.markercolor}
                            key={marker.id}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}


                        >


                            <Callout onPress={
                                () => {
                                    navigation.navigate('StandDetailsScreen', {
                                        items: locationMarker
                                    })
                                }
                                
                            }

                            >
                                <View style={{flexDirection:"row",justifyContent:"space-around",borderRadius:10}}>

                            <Icon name="dot-circle" size={20} color={colors.green} style={{paddingRight:5}} />
                            <Text>
                                    {firstlocationData.length} Cycles Available
                            </Text>
                                </View>
                                <Text>
                                    click for more details
                            </Text>

                            </Callout>

                        </Marker>
                    ))
                }



            </MapView>
        </View>

    )
}

const styles = StyleSheet.create
    ({
        mapStyle: {
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    })

export default MapScreen