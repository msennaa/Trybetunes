import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TunesContext from '../context/TunesContext';

export default function SongsCard(props) {
  const { trackName, previewUrl, trackId } = props;
  // const [teste, setTeste] = useState('');
  const [checked, setChecked] = useState(true);
  const { sendFavoriteMusic,
    favoriteMusics,
    setFavoriteMusics,
  } = useContext(TunesContext);

  const submitMusic = () => {
    const newMusic = {
      trackName,
      previewUrl,
      trackId,
    };
    setChecked((prevState) => !prevState);

    if (checked) {
      sendFavoriteMusic(newMusic);
    } else {
      const result = favoriteMusics.filter((music) => music.trackId !== trackId);
      setFavoriteMusics(result);
    }
  };

  console.log(favoriteMusics);

  return (
    <div className="MusicCard">
      <h4>{trackName}</h4>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
      </audio>
      <input
        type="checkbox"
        onChange={ submitMusic }
      />
    </div>
  );
}

SongsCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};
