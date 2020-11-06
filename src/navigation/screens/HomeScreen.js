import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

// Components
import HomeScreenContainer from '../../components/HomeScreenContainer';

export default function HomeScreen(props){
    return(
        <SafeAreaView style={styles.container}>
            <HomeScreenContainer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey'
    },
});