import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function LoadingScreen(props) {
    return (
        <View style={styles.main}>
            {props.icon}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});