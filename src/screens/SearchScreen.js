import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [yelpSearch, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => yelpSearch(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" results={results.filter(result => result.price === '$')} />
      <ResultsList title="Bit Pricier" results={results.filter(result => result.price === '$$')} />
      <ResultsList title="Big Spender" results={results.filter(result => result.price === '$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;