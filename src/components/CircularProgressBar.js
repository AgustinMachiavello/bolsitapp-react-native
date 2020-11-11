import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function CircularProgressBar(props){

    return(
        <View style={styles.container}>
            <AnimatedCircularProgress
                size={300}
                width={15}
                backgroundWidth={5}
                lineCap={"round"}
                fill={(props.value%1000)/10}
                tintColor={colors.lightGreen}
                backgroundColor={colors.lightGrey} 
                style={styles.circularProgressBar}/>
            <Text style={styles.innerValue}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: paddings.d,
            justifyContent: "center",
            alignItems: "center",
        },
        circularProgressBar: {
            position: "absolute"
        },
        innerValue:{
            fontWeight: "200",
            fontSize: 70,
        }
    }
)