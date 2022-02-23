import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AlbumCard(props) {
  const { artworkUrl100, collectionName, collectionId } = props;
  return (
    <Link to={ `/album/${collectionId}` }>
      <img src={ artworkUrl100 } alt={ `Album ${collectionName}` } />
      <h3>{ collectionName }</h3>
    </Link>
  );
}

AlbumCard.propTypes = {
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
