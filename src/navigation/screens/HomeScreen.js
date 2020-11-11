import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

// Components
import CircularProgressBar from '../../components/CircularProgressBar';
import PurchaseItemList from '../../components/PurchaseItemList';


export default function HomeScreen(props){
    const [points, setPoints] = useState(850);
    const [purchases, setPurchases] =  useState(
        [
            {
                id: 0,
                date: '1/1/2020',
                description: 'description',
                points: 20
            },
            {
                id: 1,
                date: '1/1/2020',
                description: 'description',
                points: 7
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
    },
});