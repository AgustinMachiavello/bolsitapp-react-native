import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import BarItem from './BarItem';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function BarItemList(props){
    return(
        <View style={styles.container}>
            {props.stores.storeList.map((item, i) => {
                return <BarItem key={i} item={item} navigation={props.navigation}></BarItem>
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
    }
)