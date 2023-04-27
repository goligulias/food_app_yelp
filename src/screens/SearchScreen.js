import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [yelpSearch, results, errorMessage] = useResults();

  return (
    <View style={{ flex: 1 }}>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => yelpSearch(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={results.filter(result => result.price === '$')} />
        <ResultsList title="Bit Pricier" results={results.filter(result => result.price === '$$')} />
        <ResultsList title="Big Spender" results={results.filter(result => result.price === '$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;