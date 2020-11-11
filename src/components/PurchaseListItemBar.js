import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function PurchaseListItemBar(props){
    return(
        <View style={styles.container}>
            <View style={styles.informationWrapper}>
                <Text style={styles.date}>{props.item.date}</Text>
                <Text style={styles.description}>{props.item.description}</Text>
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
            borderTopWidth: 1
        },
        informationWrapper: {
            width: '90%',
        },
        pointsWrapper: {
            width: '10%',
        },
        date: {
        },
        description: {
        },
        points: {
            fontWeight: "bold"
        }
    }
)