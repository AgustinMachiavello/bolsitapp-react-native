import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';

// Components
import BarItemList from '../../components/BarItemList';
import QRReader from '../../components/QRReader';


export default function HandbagsScreen(props){
    const [stores, setStores] = useState({
        storeList: [
            {
                id: 0,
                title: 'Mi bolsa',
                code: "131451248172761367",
                imageURL: "https://icons.iconarchive.com/icons/icons8/ios7/256/Ecommerce-Shopping-Bag-icon.png",
                imageCodeURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",
            },
            {
                id: 1,
                title: 'Bolsa Tía',
                code: "8941421688172267962",
                imageURL: "https://i.pinimg.com/originals/09/88/dc/0988dc27ab24d196b91d085c786c292d.png",
                imageCodeURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",
            },
        ]
    }

    );

    const handleNewBag = ({type, data}) => {
        let newCode = JSON.parse(data).code
        alert(`Nueva bolsa agregada! (${newCode})`);
        let newBag = {
            id: 3,
            title: 'Nueva bolsa',
            code: newCode,
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/81%2BaNdPVEEL._AC_UL1500_.jpg",
            imageCodeURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",
        }
        let newStores = stores.storeList.concat(newBag)
        setStores({storeList: newStores});
    }

    return(
        <SafeAreaView style={styles.container}>
            <Button title="Escanear bolsa" onPress={() => props.navigation.navigate('HandbagsAddBag', {onNewBagScanned: handleNewBag})}></Button>
            <BarItemList stores={stores} navigation={props.navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});