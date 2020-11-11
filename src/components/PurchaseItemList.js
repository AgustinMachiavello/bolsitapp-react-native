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
            <Text style={styles.title}>Últimas transacciones</Text>
            {props.itemList.slice(0, 4).map((item, i) => {
                return <PurchaseListItemBar key={i} item={item}></PurchaseListItemBar>
            })}
            <View style={styles.ellipsis}>
                <Text>...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: paddings.a,
        },
        title:{
            fontSize: 20,
            marginBottom: '5%',
            fontWeight: "bold",
        },
        ellipsis: {
            flex: 1,
            alignItems: "center",
        }
    }
)