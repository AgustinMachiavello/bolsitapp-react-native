import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

// Components
import BarItemList from '../../components/BarItemList';


export default function HandbagsScreen(props){
    const [stores, setStores] = useState(
        [
            {
                id: 0,
                title: 'Mi bolsa',
                code: "131451248172761367",
                imageURL: "https://icons.iconarchive.com/icons/icons8/ios7/256/Ecommerce-Shopping-Bag-icon.png"
            },
            {
                id: 1,
                title: 'Bolsa Tía',
                code: "8941421688172267962",
                imageURL: "https://i.pinimg.com/originals/09/88/dc/0988dc27ab24d196b91d085c786c292d.png"
            }
        ]
    ); 

    return(
        <SafeAreaView style={styles.container}>
            <Text>ESCANEAR BOLSA</Text>
            <BarItemList itemList={stores} navigation={props.navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});