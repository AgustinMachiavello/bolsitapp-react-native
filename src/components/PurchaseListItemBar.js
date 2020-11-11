import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function PurchaseListItemBar(props){
    return(
        <View style={styles.container}>
            <View style={styles.informationWrapper}>
                <Text style={styles.description}>{props.item.description}</Text>
                <Text style={styles.date}>{props.item.date}</Text>
            </View>
            <View style={styles.pointsWrapper}>
                <Text style={styles.points}>{props.item.points} Pts.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            padding: 5,
            borderTopColor: colors.black,
            borderTopWidth: 1,
        },
        informationWrapper: {
            flex: 4,
        },
        pointsWrapper: {
            flex: 1,
        },
        date: {
            color: colors.grey,
            fontSize: 15
        },
        description: {
            fontSize: 15,
        },
        points: {
            fontSize: 20,
            color: colors.green,
            fontWeight: "500",
        }
    }
)