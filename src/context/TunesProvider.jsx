import React from 'react';
import PropTypes from 'prop-types';
import TunesContext from './TunesContext';

export default function TunesProvider({ children }) {
  return (
    <TunesContext.Provider>
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
