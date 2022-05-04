import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import SongsCard from '../components/SongsCard';
import Header from '../components/Header';
import '../css/Album.css';

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

  if (loading) return <Loading />;

  return (
    <div>
      <Header page="Album" />
      <div className="album-title">
        <h1>{`${name} - ${albumName}`}</h1>
      </div>
      <div className="song-container">
        {
          songs && (
            songs.slice(1).map((song, index) => (
              <SongsCard
                key={ index }
                trackName={ song.trackName }
                previewUrl={ song.previewUrl }
                trackId={ song.trackId }
                artistName={ name }
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
