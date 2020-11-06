import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import PurchaseListItemBar from './PurchaseListItemBar';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function PurchaseItemList(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Puntos canjeados</Text>
            {props.itemList.slice(0, 6).map((item, i) => {
                return <PurchaseListItemBar key={i} item={item}></PurchaseListItemBar>
            })}
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: paddings.a,
            backgroundColor: colors.lightWhite
        },
        title:{
            marginBottom: '5%',
            fontWeight: "bold"
        }
    }
)