import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import SongsCard from '../components/SongsCard';

export default function Album(props) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSongs = async () => {
    setLoading(true);
    const { match } = props;
    const { id } = match.params;
    setSongs(await getMusics(id));
    setLoading(false);
  };

  useEffect(() => {
    getSongs();
  }, []);

  if (loading) return <Loading />;
  const name = songs[0].artistName;
  const albumName = songs[0].collectionName;

  return (
    <div>
      <Header />
      <h1>{name}</h1>
      <h3>{albumName}</h3>
      <div>
        {
          songs && (
            songs.map((song, index) => (
              <SongsCard
                key={ index }
              />
            ))
          )
        }
      </div>
    </div>
  );
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
