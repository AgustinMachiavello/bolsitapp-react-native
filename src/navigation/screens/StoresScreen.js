import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

// Components
import Map from '../../components/Map';

export default function StoresScreen(props){
    return(
        <SafeAreaView style={styles.container}>
            {/*
            DO NOT UNCOMMENT - Could not find th way to style this text
            <View styles={styles.titleWrapper}>
                <Text styles={styles.title}>
                    Encuentra las tiendas habilitadas más cercanas
                </Text>
            </View>
            */}
            <Map />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleWrapper: {
        flex: 1,
        height: "5%",
        backgroundColor: 'red',
    },
    title: {
        height: 200,
        margin: 200,
        fontSize: 40,
        padding: "10%",
    }
});