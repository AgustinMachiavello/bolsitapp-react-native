import React, { Component,useState, useEffect } from 'react';
//import QRCodeScanner from 'react-native-qrcode-scanner';
//import { RNCamera } from 'react-native-camera';
import { Text, View, StyleSheet, Button, TouchableHighlight} from 'react-native';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRReader(props) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        getPermissionsAsync();
    });

    const getPermissionsAsync = async() => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        setHasCameraPermission(status === 'granted');
      };

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        props.onCodeScanned({ type, data });
    }
    const requestPermissionNull = <Text>Solicitando permisos de camara</Text>;
    const requestPermissionFalse = <Text>Sin acceso a la camara</Text>;
    const qrScanner = (
        <View style={styles.barCodeScannerWrapper}>
            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.barCodeScanner}
            />
            {scanned && (
                <TouchableHighlight style={styles.barCodeScannerButton}>
                    <Button
                        title='Toca para escanear de nuevo'
                        onPress={() => {
                                setScanned(false);
                            }
                        }
                    />
                </TouchableHighlight>

            )}
        </View>
    )

    return(
        <View style={styles.container}>
            {hasCameraPermission === null ? requestPermissionNull : 
                hasCameraPermission === false ? requestPermissionFalse : qrScanner
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    barCodeScannerWrapper: {
        flex: 1,
    },
    barCodeScanner: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    barCodeScannerButton: {
        backgroundColor: 'white',
    },
});