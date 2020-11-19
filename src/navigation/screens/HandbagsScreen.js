import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, TouchableHighlight } from 'react-native';

// Components
import BarItemList from '../../components/BarItemList';
import QRReader from '../../components/QRReader';
import colors from '../../styles/colors';

// Styling
import paddings from '../../styles/paddings';

import {get, SERVER_URL} from '../../api/methods';

const USER_ID = '123';

export default function HandbagsScreen(props){
    const [bags, setBags] = useState({
        bagList: []
    });

    const [isFetching, setIsFetching] = useState(false);
    let previuosNewBagId = null;

    useEffect(() => {
        console.log('useEffect');
        // Get user's bags
        if (bags.bagList.length <= 0 && !isFetching) {
            onRefresh();
        }

        // Check if a new bag is detected
        if (props.route.params?.hasOwnProperty('newBag') && !isFetching){
            if (bags.bagList.some(bag => bag.id_bag === props.route.params.newBag.id_bag)){
                return;
            }
            else if (previuosNewBagId === props.route.params.newBag.id_bag) {
                return;
            }
            else {
                previuosNewBagId = props.route.params.newBag.id_bag;
                handleNewBag(props.route.params.newBag);
            }
        }
    });

    const loadBags = (bagsArray) => {
        setBags({bagList: bagsArray});
        console.log('bagsLoaded');
    }

    const onRefresh = () => {
        console.log('onRefresh');
        setIsFetching(true);
        let bags = get(SERVER_URL + 'users/' + USER_ID);
        bags.then((response) => {
            loadBags(response.bags_owned);
            setIsFetching(false);
        });
    }

    const handleNewBag = (bagObject) => {
        let dataPost = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'user': 123,
            })
        };
        setIsFetching(true);
        let post = get(SERVER_URL + 'bags/' + bagObject.id_bag + '/', dataPost);
        post.then((response) => {
            loadBags(bags.bagList.concat(response));
            setIsFetching(false);
        });
    }

    return(
        <SafeAreaView style={styles.container}>
            <TouchableHighlight style={styles.scannButton}>
                <Button 
                    title="Escanear una bolsa nueva" 
                    onPress={() => props.navigation.navigate('HandbagsAddBag')} />
            </TouchableHighlight>

            <BarItemList items={bags} navigation={props.navigation} onRefresh={onRefresh} isFetching={isFetching}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scannButton: {
        padding: paddings.a,
        backgroundColor: colors.white,
    }
});