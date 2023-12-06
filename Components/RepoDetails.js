import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons/faCodeFork'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faHardDrive } from '@fortawesome/free-solid-svg-icons/faHardDrive'
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function RepoDetails({route}) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView style={{elevation: 1}}>
                <Text style={styles.title}>{route.params["name"]}</Text>
                <Text style={styles.description}>{route.params["description"]}</Text>
                <View style={[styles.mainData, styles.row]}>
                    <View style={styles.row}>
                        <FontAwesomeIcon style={{color: "#fdcb6e", marginRight: 7}} icon={faStar} />
                        <Text style={{fontWeight: 'bold'}}>{route.params["stars"]}</Text>
                    </View>
                    <View style={[styles.row, {marginLeft: 20}]}>
                        <FontAwesomeIcon style={{color: "#a29bfe", marginRight: 7}} icon={faCodeFork} />
                        <Text style={{fontWeight: 'bold'}}>{route.params["forkCount"]}</Text>
                    </View>
                </View>
                <View style={styles.mainList}>
                    {route.params["owner"] != null ?
                        <View style={styles.listItem}>
                            <FontAwesomeIcon size={25} style={styles.itemIcon} icon={faUser} />
                            <Text style={styles.textItem}>{route.params["owner"]["login"]}</Text>
                        </View>
                        :
                        null}
                    {route.params["primaryLanguage"] != null ?
                        <View style={styles.listItem}>
                            <FontAwesomeIcon size={25} style={styles.itemIcon} icon={faCode} />
                            <Text style={styles.textItem}>{route.params["primaryLanguage"]["name"]}</Text>
                        </View>
                        :
                        null}
                    {route.params["diskUsage"] != null ?
                        <View style={styles.listItem}>
                            <FontAwesomeIcon size={25} style={styles.itemIcon} icon={faHardDrive} />
                            <Text style={styles.textItem}>{route.params["diskUsage"]} Kb</Text>
                        </View>
                        :
                        null}
                    {route.params["homepageUrl"] != null && route.params["homepageUrl"] != "" ?
                        <View style={styles.listItem}>
                            <FontAwesomeIcon size={25} style={styles.itemIcon} icon={faGlobe} />
                            <Text onPress={() => Linking.openURL(route.params["homepageUrl"])} style={[styles.textItem, styles.hypertext]}>{route.params["homepageUrl"]}</Text>
                        </View>
                        :
                        null}
                    {route.params["updatedAt"] != null ? 
                        <View style={styles.listItem}>
                            <FontAwesomeIcon size={25} style={styles.itemIcon} icon={faRepeat} />
                            <Text style={styles.textItem}>{route.params["updatedAt"].substring(0, 10)}</Text>
                        </View>
                        :
                        null}
                    {route.params["watchers"] != null ? 
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Watchers", {
                                watchers: route.params["watchers"]["edges"]
                            });
                        }} style={styles.listItem}>
                            <FontAwesomeIcon size={25} style={styles.itemIcon} icon={faEye} />
                            <Text style={[styles.textItem, styles.hypertext]}>{route.params["watchers"]["totalCount"]}</Text>
                        </TouchableOpacity>
                        :
                        null}
                    
                </View>
            </ScrollView>
            
            <View style={styles.backButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => {
                    navigation.navigate("Home");
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
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    hypertext: {
        color: '#a29bfe'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginLeft: "5%",
        width: "90%"
    },
    description: {
        marginTop: 10,
        fontSize: 18,
        color: '#71717A',
        textAlign: 'center',
        width: "76%",
        marginLeft: "12%"
    },
    mainData: {
        marginTop: 10,
        justifyContent: 'center'
    },
    mainList: {
        marginTop: 30,
        marginLeft: "10%",
        width: "80%",
        overflow: 'hidden'
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#EAEAED',
        borderBottomWidth: 2,
        paddingBottom: 12,
        paddingTop: 12
    },
    itemIcon: {
        color: '#cfb3b6',
        marginRight: 15,
    },
    textItem: {
        fontSize: 18,
        fontWeight: '600'
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