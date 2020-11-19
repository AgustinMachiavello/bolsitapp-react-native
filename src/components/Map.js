import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import { color } from 'react-native-reanimated';

// Styling
import colors from '../styles/colors';
import paddings from '../styles/paddings';

import {get, SERVER_URL} from '../api/methods';

const markerImage = require('../assets/markerIcon1.png');

export default function Map(props){
    const [region, setRegion] = useState({
        latitude: -31.404086,
        longitude: -57.951504,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0352,
    })
    const [markers, setMarkers] = useState({
        markersList: [],
    });

    useEffect(() => {
        const stores = get(SERVER_URL + 'branches/');
        stores.then((response) => {
            loadMarkers(response);
        })
    }, [markers.markersList.length])

    const onRegionChange = (region) => {
        //do something?
    }

    const onMarkerTap = (marker) => {
        //var tempRegion = region;
        console.log("------", marker, "-------");
        //region.latitude = marker.latitude;
        //region.longitude = marker.longitude
    }

    const loadMarkers = (markersArray) => {
        console.log('markersLoaded');
        setMarkers({markersList: markersArray});
    }


    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map} 
                region={region}
                onRegionChange={onRegionChange}>
                {markers.markersList.map((marker, i) => (
                    <Marker
                        key={i}
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        onPress={() => onMarkerTap(marker)}
                        image={markerImage}
                        >
                        <Callout style={styles.callout}>
                            <Image source={{uri: marker.imageURL}} style={styles.calloutImage}/>
                            <View style={styles.calloutText}>
                                <Text style={styles.calloutTitle}>
                                    {marker.mainStore.name}
                                </Text>
                                <Text style={styles.calloutTime}>{marker.openTime} a {marker.closeTime}</Text>
                                <Text style={styles.calloutDescription}>
                                    {marker.description}
                                </Text>
                                <View style={styles.calloutPerks}>
                                    {/*  
                                    {marker.shopPerks.map((perk, i) => (
                                            <Text key={i}>- {perk}</Text>
                                        )
                                    )}*/}
                                </View>
                                <Text style={styles.calloutAddress}>{marker.streetAddressName}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        map: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        marker: {
            flex: 1,
        },
        callout: {
            flex: 1,
            padding: paddings.a,
            height: 250,
            width: 200,
        },
        calloutText: {
            marginTop: 10,
        },
        calloutImage: {
            resizeMode: "contain",
            width: "100%",
            height: 60,
        },
        calloutTitle: {
            fontSize: 20,
            fontWeight: "bold",
        },
        calloutDescription: {
            marginTop: 20,
        },
        calloutPerks: {
            marginTop: 20,
        },
        calloutAddress: {
            fontStyle: 'italic',
            marginTop: 20,
        },
        calloutType: {
            marginTop: 20,
        },
    }
)


/*
[
{
    id: 0,
    latitude: -31.401519,
    longitude: -57.952812,
    title: "TATA",
    description: "Esta tiene de todo",
    imageURL:  "https://www.inventariosuruguay.com/img/clients/tata.png",
    streetAddressName: "Intendente Juan H.Paiva 543",
    shopOpenTime: "9",
    shopCloseTime: "22:30",
    shopPerks: ['parking gratuito', 'cadenas para bicicleta'],
    shopType: "Supermercado",
},
{
    id: 1,
    latitude: -31.397426,
    longitude: -57.959422,
    title: "Tienda Pokemón #2",
    description: "Pociones y accesarios para tu aventura",
    imageURL:  "https://icon-library.com/images/icon-pokemon/icon-pokemon-7.jpg",
    streetAddressName: "Orestes Lanza 1985",
    shopOpenTime: "8",
    shopCloseTime: "19",
    shopPerks: ['cadenas para bicicleta',],
    shopType: "Minicaercado",
},
{
    id: 2,
    latitude: -31.403726,
    longitude: -57.95417,
    title: "Tienda Pokemón",
    description: "Pociones y accesarios para tu aventura",
    imageURL:  "https://pbs.twimg.com/profile_images/442939083271053312/MMchoD9h_400x400.png",
    streetAddressName: "Av. Harriague 666",
    shopOpenTime: "8",
    shopCloseTime: "14",
    shopPerks: ['tienda ecológica',],
    shopType: "Minicaercado",
},
]*/