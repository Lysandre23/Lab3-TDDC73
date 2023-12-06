// GitHubRepos.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const GitHubRepos = ({ repos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Repositories</Text>
      <FlatList
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.repoItem}>
            <Text style={styles.repoName}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  repoItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  repoName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GitHubRepos;
