import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

// Styling
import paddings from '../../styles/paddings';
import colors from '../../styles/colors';

// Components
import QRReader from '../../components/QRReader';

export default function HandbagsAddBagScreen(props){

    const handleNewBagScanned = ({type, data}) => {
        props.navigation.navigate('Handbags', {newBag: JSON.parse(data)})
    }

    return(
        <SafeAreaView style={styles.container}>
            <QRReader onCodeScanned={handleNewBagScanned}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});