import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert, Image, ScrollView, } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, Card } from 'react-native-elements'
//import { Icon } from 'react-native-elements';
import StatusCard from '../Components/StatusCard'

import colors from "../../assets/colors/colors"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CycleDetails = ({ route, navigation }) => {

    const { items } = route.params;



    return (
        <View style={styles.container}>
            {/* <Text>
                {items.title}
            </Text> */}
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


            <View >
                <View style={{ flexDirection: "row",justifyContent:"space-between",height:45,marginTop:15,}}>


                    <Text style={styles.headingText}>
                        {items.title}
                    </Text>
                    <Card containerStyle={styles.cardStyle}>

                    <View style={{flexDirection:"row"}}> 
                         <Icon name="battery-three-quarters" size={20} color= {colors.green} /> 
                        
                        <Text style={{fontSize:15}}> {items.Battery}%</Text>
                        
                         </View>

                   
                    </Card>


                </View>
                <Text style={styles.biketypeText}>
                    {items.type}
                </Text>
            </View>




            <View style={styles.imageHolder}>
                <Image
                    style={styles.cycleImage}

                    source={items.image}

                /></View>

            <View style={{ height: 170, marginTop: 10 }}>

                <ScrollView
                    horizontal={true}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}

                >
                    <StatusCard
                        status="Max Load"
                        value={items.weight}
                        end="kg"
                        iconname="weight-hanging"
                    />
                    <StatusCard

                        status="Speed"
                        value={items.maxSpeed}
                        end="m/h"
                        iconname="angle-double-right"
                    />
                    <StatusCard

                        status="Price"
                        value={items.price}
                        end="tk/h"
                        iconname="dollar-sign"

                    />
                    <StatusCard

                        status="Available"
                        value="Yes"
                        iconname="dot-circle"


                    />

                </ScrollView>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 50 }}>
                <Button
                    buttonStyle={{ borderRadius: 12, height: 45 }}
                    containerStyle={{ width: 150, borderRadius: 12, }}
                    raised
                    title="Reserve"
                    type="outline"
                    titleStyle={{ color: colors.buttoncolor }}


                    onPress={() => {
                        Alert.alert("Reserved")
                    }}
                />

                <Button
                    buttonStyle={{ backgroundColor: colors.buttoncolor, height: 45 }}
                    containerStyle={{ elevation: 5, width: 150, alignContent: "center", borderRadius: 12, }}
                    icon={
                        <Icon
                            name="unlock"
                            size={13}
                            color="white"
                        />
                    }

                    iconLeft
                    title=" Unlock"
                    onPress={() => {
                        Alert.alert("Reserved")
                    }}

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


export default CycleDetails