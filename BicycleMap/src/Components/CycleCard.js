import React from 'react';
import { Text, StyleSheet, View } from "react-native"
import { Card, Divider } from "react-native-elements"



const CycleCard = (props) => {
    return (
        <Card containerStyle={styles.CardStyle}>
            <Text style={styles.HeadingText}>
                THIS IS DEMO </Text>


         
       

            
        </Card>
    )
}

const styles = StyleSheet.create(
    {
        CardStyle:
        {
            borderRadius: 20,
            elevation: 15,
            height: 300,
            width: 280,
        },
        HeadingText:
        {
            alignSelf: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom:10

        }

    }
)

export default CycleCard