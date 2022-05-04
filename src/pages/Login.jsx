import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TunesContext from '../context/TunesContext';
import headPhone from '../images/headphone.png';
import '../css/Login.css';

export default function Login() {
  const { setInputUser, inputUser } = useContext(TunesContext);
  const minCharacters = 4;
  const history = useHistory();

  return (
    <div className="login-container">
      <img src={ headPhone } alt="logo" />
      <div className="login-div">
        <input
          placeholder="Digite seu usuario"
          type="text"
          onChange={ ({ target: { value } }) => setInputUser(value) }
        />
        <button
          disabled={ inputUser.length < minCharacters }
          type="button"
          onClick={ () => history.push('/search') }
        >
          <span>
            Login
          </span>
        </button>
      </div>
    </div>
  );
}
