import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import TunesContext from '../context/TunesContext';
import '../css/Profile.css';
import user from '../images/user.png';

export default function Profile() {
  const [active, setActive] = useState(true);
  const [hiddenEdit, setHiddenEdit] = useState(true);
  const { setInputUser, inputUser } = useContext(TunesContext);
  const [email, setEmail] = useState('');
  const minCharacters = 4;

  const handleEditButton = () => {
    setActive(false);
    setHiddenEdit(false);
  };

  const handleSaveButton = () => {
    const emailValidation = (/\S+@\S+\.\S+/).test(email);
    if (emailValidation === false) {
      return global.alert('Digite um email válido');
    }

    if (inputUser.length < minCharacters) {
      return global.alert('Nome deve conter pelo menos 4 caracteres');
    }

    setActive(true);
    setHiddenEdit(true);
  };

  return (
    <div>
      <Header page="Profile" />
      <div className="form-container">
        <div className="edit-button-container">
          <img src={ user } alt="user-logo" />
          {
            hiddenEdit && (
              <button onClick={ handleEditButton } type="button">
                Editar perfil
              </button>
            )
          }
        </div>
        <h4>Nome:</h4>
        <input
          onChange={ ({ target: { value } }) => setInputUser(value) }
          disabled={ active }
          type="text"
          maxLength="20"
        />
        <h4>Email:</h4>
        <input
          onChange={ ({ target: { value } }) => setEmail(value) }
          disabled={ active }
          type="email"
          value={ email }
        />
        {
          !hiddenEdit && (
            <button
              onClick={ handleSaveButton }
              disabled={ active }
              className="save-button"
              type="button"
            >
              Salvar
            </button>
          )
        }
      </div>
    </div>
  );
}
