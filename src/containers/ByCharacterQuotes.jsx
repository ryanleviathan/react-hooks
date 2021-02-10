import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuoteList from '../components/app/quotes/QuoteList';
import { findQuotesByCharacter } from '../services/futuramaApi';

export default class ByCharacterQuotes extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        character: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  };

  state = {
    loading: true,
    quotes: []
  };

  async componentDidMount() {
    const { match } = this.props;
    const quotes = await findQuotesByCharacter(match.params.character);
    this.setState({ loading: false, quotes });
  }

  render() {
    const { loading, quotes } = this.state;
    const gif = 'https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40';

    if(loading) return <img src={gif} alt="Loading" />;
    return <QuoteList quotes={quotes} />;
  }
}
