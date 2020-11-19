import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

// Styling
import paddings from '../../styles/paddings';
import colors from '../../styles/colors';

export default function HandbagsDetailBagScreen(props){
    const {item} = props.route.params
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.informationWrapper}>
                <Text style={styles.title}>{item.name == null ? 'Nueva bolsa': props.item.name}</Text>
                <Text style={styles.code}>Código: {item.qr_code}</Text>
            </View>
            <Image source={{uri: item.imageCodeURL}} style={styles.itemCodeImage}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    informationWrapper: {
        flex: 1,
        alignItems: "center",
        padding: paddings.a,

    },
    title: {
        fontSize: 60,
    },
    code: {
        marginTop: paddings.c,
        fontSize: 20,
    },
    itemCodeImage: {
        flex: 3,
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    }
});