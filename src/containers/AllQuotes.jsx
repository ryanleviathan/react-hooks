import React, { useEffect, useState } from 'react';
import QuoteList from '../components/app/quotes/QuoteList';
import { findQuotes } from '../services/futuramaApi';

const AllQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    findQuotes()
      .then((quotes) => {
        setQuotes(quotes);
        setLoading(false);
      });
  }, []);
  if(loading) return (<a>Loading</a>);
  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  );
};

export default AllQuotes;
