import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TunesContext from './TunesContext';

export default function TunesProvider({ children }) {
  const [inputUser, setInputUser] = useState('');

  const store = {
    inputUser,
    setInputUser,
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
