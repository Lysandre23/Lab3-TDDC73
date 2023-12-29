import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import GitHubSearch from './GitHubSearch';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: 'Bearer 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', // Remplace avec ton propre token GitHub
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default function Home() {
    const [lang, setLang] = useState("");

    return (
        <ApolloProvider client={client}>
            <View style={styles.titleContainer}>
              <View style={styles.title}>
                  <Text style={styles.titlePart}>Trending   </Text>
                  <TextInput 
                    style={styles.inputLang}
                    value={lang}
                    onChangeText={setLang}
                    placeholder='####'
                  />
                  <Text style={styles.titlePart}>   Repositories</Text>
              </View>
            </View>
            <GitHubSearch lang={lang}/>
        </ApolloProvider>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
    },
    title: {
      fontSize: 25,
      marginTop: "12%",
      margin: 16,
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'row',
    },
    inputLang: {
      borderBottomColor: '#fdcb6e',
      fontSize: 20,
      borderBottomWidth: 2,
      color: '#fdcb6e',
      fontWeight: 'bold',
      maxWidth: "27%"
    },
    titlePart: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#a29bfe',
    },
});