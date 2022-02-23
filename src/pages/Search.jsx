import React, { useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default function Search() {
  const [inputArtist, setInputArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  const getAlbuns = async () => {
    setLoading(true);
    setAlbums(await searchAlbumsAPI(inputArtist));
    setLoading(false);
    setInputArtist('');
  };

  if (loading) return <Loading />;
  console.log(albums);

  return (
    <div>
      <Header />
      <input type="text" onChange={ ({ target: { value } }) => setInputArtist(value) } />
      <button type="button" onClick={ getAlbuns }>
        Search
      </button>
      <div>
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
