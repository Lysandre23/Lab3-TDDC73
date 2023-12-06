import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
import { useNavigation } from '@react-navigation/native';

export default function Repos(props) {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.main}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.info}>
                <View style={styles.starsUnderline}>
                    <FontAwesomeIcon style={styles.starIcon} icon={faStar} />
                    <Text style={styles.stars}>Stars : {props.stars}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Repo', {
                            name: props.name,
                            description: props.description,
                            stars: props.stars,
                            forkCount: props.forkCount,
                            primaryLanguage: props.primaryLanguage,
                            diskUsage: props.diskUsage,
                            homepageUrl: props.homepageUrl,
                            updatedAt: props.updatedAt,
                            owner: props.owner,
                            watchers: props.watchers
                        });
                    }}
                >
                    <FontAwesomeIcon style={styles.eyeIcon} icon={faEye} />
                    <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#E5E7EB',
        padding: 16,
        marginBottom: 20
    },
    title: {
        color: '#74b9ff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        marginTop: 30,
        marginBottom: 30
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    starsUnderline: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: "#a29bfe",
        paddingBottom: 5
    },
    stars: {
        
    },
    starIcon: {
        marginRight: 7,
        color: '#fdcb6e'
    },
    button: {
        backgroundColor: '#a29bfe',
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    eyeIcon: {
        color: 'white',
        marginRight: 7
    },
    closeIcon: {
        color: 'white',
        marginRight: 7
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20
    },
    modalRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tag: {
        padding: 8,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 8,
        overflow: 'hidden'
    }
});

/*

<Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>More data about : {props.name}</Text>
                    
                    {props.primaryLanguage != null ?
                        <View style={styles.modalRow}>
                            <Text>Primary Language : </Text>
                            {props.primaryLanguage["color"] != null ?
                                <Text style={[styles.tag, {backgroundColor: props.primaryLanguage["color"]}]}>{props.primaryLanguage["name"]}</Text>
                                :
                                <Text>{props.primaryLanguage["name"]}</Text>
                            }
                            
                        </View>
                        :
                        null
                    }
                    <TouchableOpacity style={styles.button} onPress={toggleModal}>
                        <FontAwesomeIcon style={styles.closeIcon} icon={faCircleXmark} />
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>

            */