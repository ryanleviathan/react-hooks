import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Quote.css';

const Quote = ({ image, character, text }) => (
  <figure className={styles.Quote}>
    <Link to={`${character}`}>
      <img src={image} alt={character} />
    </Link>
    <figcaption>
      <p>{character}</p>
      <p>{text}</p>
    </figcaption>
  </figure>
);

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Quote;
