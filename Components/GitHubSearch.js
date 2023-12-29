// GitHubSearch.js
import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons/faWind'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons/faEarthEurope'
import Repos from './Repos';
import LoadingScreen from './LoadingScreen';

const GET_TRENDING_REPOS = gql`
  query GetTrendingRepos($query: String!) {
    search(query: $query,type: REPOSITORY, first: 15) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              stargazerCount
              createdAt
              forkCount
              diskUsage
              homepageUrl
              updatedAt
              owner {
                login
              }
              primaryLanguage {
                name
              }
              watchers {totalCount}
              watchers {edges{node{login}}}
            }
          }
        }
    }
  }
`;

const GitHubSearch = ({ lang }) => {
  const afterDate = '2023-01-01';
  const { loading, error, data } = useQuery(GET_TRENDING_REPOS, {
    variables: {
      query: `language:${lang} stars:>=200 created:>${afterDate}`
    },
  });
  
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (!loading && data) {
      const sortedRepos = data.search.edges
        .map((edge) => edge.node)
        .sort((a, b) => b.stargazerCount - a.stargazerCount);
      setRepos(sortedRepos);
    }
  }, [loading, data]);

  if (loading) return <LoadingScreen icon={<FontAwesomeIcon size={100} style={{color: '#fdcb6e'}} icon={faWind} />}/>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {
        repos.length > 0 ?
        <FlatList
          showsVerticalScrollIndicator={false}
          data={repos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Repos 
              name={item.name} 
              description={item.description} 
              stars={item.stargazerCount}
              primaryLanguage={item.primaryLanguage}
              forkCount={item.forkCount}
              diskUsage={item.diskUsage}
              homepageUrl={item.homepageUrl}
              updatedAt={item.updatedAt}
              owner={item.owner}
              watchers={item.watchers}
            />
          )}
        />
        :
        <LoadingScreen icon={<FontAwesomeIcon size={100} icon={faEarthEurope} style={{color: '#a29bfe'}}/>}/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a29bfe',
    fontWeight: 'bold',
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

export default GitHubSearch;
