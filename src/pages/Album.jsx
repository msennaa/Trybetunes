import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import SongsCard from '../components/SongsCard';

export default function Album(props) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [albumName, setAlbumName] = useState('');

  const getSongs = async () => {
    setLoading(true);
    const { match } = props;
    const { id } = match.params;
    const response = await getMusics(id);
    const nome = response[0].artistName;
    const album = response[0].collectionName;
    setName(nome);
    setAlbumName(album);
    setSongs(response);
    setLoading(false);
  };

  useEffect(() => {
    getSongs();
  }, []);

  console.log(songs);

  if (loading) return <Loading />;

  return (
    <div>
      <Header />
      <h1>{name}</h1>
      <h3>{albumName}</h3>
      <div>
        {
          songs && (
            songs.slice(1).map((song, index) => (
              <SongsCard
                key={ index }
                trackName={ song.trackName }
                previewUrl={ song.previewUrl }
                trackId={ song.trackId }
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
