import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

// Components

export default function HandbagsDetailBagScreen(props){
    const {item} = props.route.params

    return(
        <SafeAreaView style={styles.container}>
            <Text>{item.title}</Text>
            <Text>{item.code}</Text>
            <Image source={{uri: item.imageCodeURL}} style={styles.barItemImage}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});