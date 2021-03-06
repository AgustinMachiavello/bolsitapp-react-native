import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

const bagTypeIcons =  {S: require('../assets/bagIcon1.png'), M: require('../assets/bagIcon2.png'), L: require('../assets/bagIcon3.png')}

export default function BarItem(props){
    const {navigate} = props.navigation;
    const bagImage = bagTypeIcons[props.item.bag_type]
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.barTouchable} onPress={() => navigate('HandbagsDetail', {item: props.item})}>
                <View style={styles.barItemWrapper}>
                    <Image source={bagImage} style={styles.barItemImage}/>
                    <View style={styles.barItemInformationWrapper}>
                        <Text style={styles.barItemTitle}>{props.item.name == null ? 'Nueva bolsa': props.item.name}</Text>
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
            flex: 1,
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
            height: 100,
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