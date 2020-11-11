import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

// Components
import CircularProgressBar from '../../components/CircularProgressBar';
import PurchaseItemList from '../../components/PurchaseItemList';
import colors from '../../styles/colors';


export default function HomeScreen(props){
    const [points, setPoints] = useState(640);
    const [purchases, setPurchases] =  useState(
        [
            {
                id: 0,
                date: '1/1/2020',
                description: 'TATA',
                points: 20
            },
            {
                id: 1,
                date: '1/1/2020',
                description: 'EL CHIRINGITO DE PEPE',
                points: 10
            },
            {
                id: 2,
                date: '1/4/2020',
                description: 'DISCO',
                points: 50
            },
            {
                id: 4,
                date: '10/4/2020',
                description: 'TIENDA POKEMÓN',
                points: 90
            },
            {
                id: 5,
                date: '23/5/2020',
                description: 'TIENDA GENÉRICA',
                points: 40
            }
        ]
    )

    return(
        <SafeAreaView style={styles.container}>
            <CircularProgressBar value={points}/>
            <PurchaseItemList itemList={purchases}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
});