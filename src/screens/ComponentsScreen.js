import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const greeting = <Text>Hello to you</Text>;
const starting = <Text>Getting started with react native!</Text>;
const myName ='Paula';
    return(
     <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        {greeting}
        <Text style= {styles.startingStyle}>{starting}</Text>
        <Text>My name is {myName}</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    startingStyle : {
        fontSize: 20
    }
});

export default ComponentsScreen;
