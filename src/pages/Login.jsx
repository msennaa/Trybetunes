import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TunesContext from '../context/TunesContext';

export default function Login() {
  const { setInputUser } = useContext(TunesContext);
  const history = useHistory();

  return (
    <div>
      <input type="text" onChange={ ({ target: { value } }) => setInputUser(value) } />
      <button type="button" onClick={ () => history.push('/search') }>
        Login
      </button>
    </div>
  );
}
