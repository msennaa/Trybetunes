import React, { useContext } from 'react';
import Header from '../components/Header';
import SongsCard from '../components/SongsCard';
import TunesContext from '../context/TunesContext';
import '../css/Favorite.css';

export default function Favorites() {
  const { favoriteMusics } = useContext(TunesContext);

  return (
    <div>
      <Header page="Favorites" />
      <h1 className="favorite-title">Musicas Favoritas</h1>
      <div className="favorite-container">
        {
          favoriteMusics.lenght === 0 ? (
            <h1>Nenhuma musica favoritada</h1>
          ) : favoriteMusics.map((music, index) => (
            <SongsCard
              key={ index }
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
              trackId={ music.trackId }
              artistName={ music.artistName }
            />
          ))
        }
      </div>
    </div>
  );
}
