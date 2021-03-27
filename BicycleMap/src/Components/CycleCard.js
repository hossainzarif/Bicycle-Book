import React from 'react';
import { Text, StyleSheet } from "react-native"
import { Card } from "react-native-elements"



const CycleCard = () => {
    return (
        <Card containerStyle={styles.CardStyle}>
            <Text >
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
            height: 250, 
            width: 180
        }
    }
)

export default CycleCard