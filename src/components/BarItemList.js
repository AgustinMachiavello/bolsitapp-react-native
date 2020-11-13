import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

// Components
import BarItem from './BarItem';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

export default function BarItemList(props){
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={props.stores.storeList}
                renderItem={({item})=>(
                    <BarItem key={item.id} item={item} navigation={props.navigation} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* 
            {props.stores.storeList.map((item, i) => {
                return <BarItem key={i} item={item} navigation={props.navigation}></BarItem>
            })}*/}
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
        flatList: {
            flex: 1,
        }
    }
)