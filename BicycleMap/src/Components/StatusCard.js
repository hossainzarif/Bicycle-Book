import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, } from "react-native"
import { Card, Divider } from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome5';



const StatusCard= (props) => {
    return (
        <Card containerStyle={styles.cardStyle}>
                          <Icon name={props.iconname} size={20} color="#4465f9" />
        
        <Text style={styles.statusName}>
            {props.status}
        </Text>
        <Text style={styles.headingText}>
            {props.value} {props.end}
        </Text>
        </Card>
    )
}

const styles = StyleSheet.create(
    {
        cardStyle:
        {
            borderRadius: 20,
            elevation: 10,
            height: 135,
            width: 110,
        },
        headingText:
        {
            fontSize: 20,
            

        },
      
        statusText: {
            fontSize: 16,
            color: "black",
            justifyContent: "center",
            textAlign: "center"
        },
        statusName: {
            color: "gray",
            fontSize: 15,
           // alignSelf: "center",

            marginTop:20
        },
        Customborder: { fontSize: 30, color: '#31C283', fontWeight: "bold", borderRightWidth: 1, borderColor: '#909090', },
        verticleLine: {
            height: '70%',
            width: 2,
            backgroundColor: '#b0b0b0',
          
          }

    }
)

export default StatusCard