import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function BarItem(props){
    const {navigate} = props.navigation;
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.barTouchable} onPress={() => navigate('HandbagsDetail', {item: props.item})}>
                <View style={styles.barItemWrapper}>
                    <Image source={{uri: props.item.imageURL}} style={styles.barItemImage}/>
                    <View style={styles.barItemInformationWrapper}>
                        <Text style={styles.barItemTitle}>{props.item.title}</Text>
                    </View>
                    <View style={styles.barItemDetail}>
                        <Text>--></Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            height: "20%",
            marginBottom: 10,
        },
        barTouchable: {
            flex: 1,
            borderRadius: 8,
        },
        barItemWrapper: {
            flex: 1,
            flexDirection: "row",
            padding: paddings.a,
            borderRadius: 8,
            backgroundColor: colors.white,
        },
        barItemImage: {
            resizeMode: "contain",
            width: "40%",
        },
        barItemInformationWrapper: {
            flex: 1,
            justifyContent: "center",
            marginLeft: 20,
        },
        barItemTitle: {
            fontSize: 20,
            fontWeight: "bold",
        },
        barItemDescription: {
        },
        barItemCode: {
            marginTop: 5,
        },
        barItemDetail: {
            justifyContent: "center",
        }
    }
)