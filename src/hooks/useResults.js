import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    yelpSearch('pasta');
  }, []);

  const yelpSearch = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm, // term: term === term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };
  return [yelpSearch, results, errorMessage];
};