import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function HomeScreen(props){
    return(
        <View style={styles.container}>
            <View style={styles.progressBarWrapper}>
                <View style={styles.progressBarCount}>
                    <Text style={styles.progressCount}>
                        {props.value}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: paddings.b,
            backgroundColor: colors.white
        },
        progressBarWrapper: {
            flex: 1,
            borderRadius: 200,
            backgroundColor: colors.lightGreen
        },
        progressBarCount: {
            flex: 1,
            borderRadius: 200,
            margin: paddings.d,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.white
        },
        progressCount: {
            fontSize: 40
        }
    }
)