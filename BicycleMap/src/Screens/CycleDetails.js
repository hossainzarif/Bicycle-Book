import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert } from "react-native"
//import Icon from 'react-native-vector-icons/FontAwesome';
 
const CycleDetails = ({route,navigation}) =>{

    const { items} = route.params;



    return(
        <View style={styles.container}>
            <Text>
            {items.title}
            </Text>
          
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
        }

    }
)


export default CycleDetails