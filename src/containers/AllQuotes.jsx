import React, { Component } from 'react';
import QuoteList from '../components/app/quotes/QuoteList';
import { findQuotes } from '../services/futuramaApi';

export default class AllQuotes extends Component {
  state = {
    loading: true,
    quotes: []
  }

  async componentDidMount() {
    const quotes = await findQuotes();
    this.setState({
      loading: false,
      quotes
    });
  }

  render() {
    const { loading, quotes } = this.state;
    const gif = 'https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40';

    if(loading) return <img src={gif} alt="Loading" />;

    return <QuoteList quotes={quotes} />;
  }
}
