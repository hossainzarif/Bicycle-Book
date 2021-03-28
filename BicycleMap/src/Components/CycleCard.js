import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, } from "react-native"
import { Card, Divider } from "react-native-elements"



const CycleCard = (props) => {
    return (
        <Card containerStyle={styles.cardStyle}>
            <Text style={styles.headingText}>
                {props.title} </Text>
            <Image
                style={styles.cycleImage}
                source={props.image}

            />
            <View style={{ height: 50, width: "100%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>

                <View >

                    <Text style={styles.statusName}>
                        Charge
                </Text>

                    <Text style={styles.statusText}>
                        {props.battery} %
                </Text>
                </View>
                <View style={styles.verticleLine}></View>

                <View >

                    <Text style={[styles.statusName,{paddingLeft:15}]}>
                        Speed
                </Text>

                    <Text style={styles.statusText}>
                        {props.speed} m/h
                </Text>
                </View>
                <View style={styles.verticleLine}></View>
       

                <View >

                    <Text style={styles.statusName}>
                        Weight
                    </Text>

                    <Text style={styles.statusText}>
                        {props.weight}
                    </Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create(
    {
        cardStyle:
        {
            borderRadius: 20,
            elevation: 15,
            height: 320,
            width: 310,
        },
        headingText:
        {
            alignSelf: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 5

        },
        cycleImage: {
            width: 280,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
        },
        statusText: {
            fontSize: 16,
            color: "black",
            justifyContent: "center",
            textAlign: "center"
        },
        statusName: {
            color: "#b0b0b0",
            fontSize: 10,
        },
        Customborder: { fontSize: 30, color: '#31C283', fontWeight: "bold", borderRightWidth: 1, borderColor: '#909090', },
        verticleLine: {
            height: '70%',
            width: 2,
            backgroundColor: '#b0b0b0',
          
          }

    }
)

export default CycleCard