import React, { useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import '../css/Search.css';

export default function Search() {
  const [inputArtist, setInputArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const minCharacters = 3;

  const getAlbuns = async () => {
    setLoading(true);
    setAlbums(await searchAlbumsAPI(inputArtist));
    setLoading(false);
    setInputArtist('');
  };

  if (loading) return <Loading />;

  return (
    <div className="Search">
      <Header page="Search" />
      <h1 className="title-search">Pesquise seu artista</h1>
      <div className="search-container">
        <input
          type="text"
          onChange={ ({ target: { value } }) => setInputArtist(value) }
          placeholder="Cantor/Banda"
        />
        <button
          disabled={ inputArtist.length < minCharacters }
          type="button"
          onClick={ getAlbuns }
        >
          Pesquisar
        </button>
      </div>
      <div className="search-album-list">
        {
          albums && (
            albums.map((album) => (
              <AlbumCard
                key={ album.collectionId }
                collectionId={ album.collectionId }
                collectionName={ album.collectionName }
                artworkUrl100={ album.artworkUrl100 }
              />
            ))
          )
        }
      </div>
    </div>
  );
}
