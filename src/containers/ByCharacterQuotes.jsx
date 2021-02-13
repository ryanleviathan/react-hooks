import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuoteList from '../components/app/quotes/QuoteList';
import { findQuotesByCharacter } from '../services/futuramaApi';

const ByCharacterQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  
  const { character } = useParams();
  useEffect(() => {
    findQuotesByCharacter(character)
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

export default ByCharacterQuotes;
