import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

// Styling
import paddings from '../../styles/paddings';
import colors from '../../styles/colors';

// Components
import QRReader from '../../components/QRReader';

export default function HandbagsAddBagScreen(props){
    const { onNewBagScanned } = props.route.params

    return(
        <SafeAreaView style={styles.container}>
            <QRReader onCodeScanned={onNewBagScanned}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});