import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TunesContext from './TunesContext';

export default function TunesProvider({ children }) {
  const [inputUser, setInputUser] = useState('');
  const [favoriteMusics, setFavoriteMusics] = useState([]);

  const sendFavoriteMusic = (newMusic) => {
    setFavoriteMusics([...favoriteMusics, newMusic]);
  };

  const store = {
    inputUser,
    setInputUser,
    setFavoriteMusics,
    favoriteMusics,
    sendFavoriteMusic,
  };

  return (
    <TunesContext.Provider value={ store }>
      {children}
    </TunesContext.Provider>
  );
}

TunesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
