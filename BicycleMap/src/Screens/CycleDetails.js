import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
//import { Icon } from 'react-native-elements';

const CycleDetails = ({ route, navigation }) => {

    const { items } = route.params;



    return (
        <View style={styles.container}>
            <Text>
                {items.title}
            </Text>
  
            <Icon name="rocket" size={30} color="#900" />

                
                     </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }

    }
)


export default CycleDetails