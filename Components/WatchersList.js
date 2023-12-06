import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WatchersList({route}) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.title}>Watchers</Text>
            <FlatList 
                style={styles.list}
                showsVerticalScrollIndicator={false}
                data={route.params["watchers"]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.textItem}>{item["node"]["login"]}</Text>
                    </View>
                )}
            />
            <View style={styles.backButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => {
                    navigation.goBack();
                }}>
                    <Text style={styles.backButtonText}>Go back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginLeft: "5%",
        width: "90%"
    },
    list: {
        marginTop: 30,
        marginLeft: "10%",
        width: "80%",
        overflow: 'hidden'
    },
    listItem: {
        borderBottomColor: '#EAEAED',
        borderBottomWidth: 2,
        paddingBottom: 12,
        paddingTop: 12
    },
    textItem: {
        
    },
    backButtonContainer: {
        position: 'absolute',
        bottom: '5%',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        elevation: 2,
    },
    backButton: {
        backgroundColor: '#a29bfe',
        width: "40%",
        borderRadius: 5
    },
    backButtonText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
    }
});