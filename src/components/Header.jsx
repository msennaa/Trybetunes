import React, { useContext } from 'react';
import TunesContext from '../context/TunesContext';

export default function Header() {
  const { inputUser } = useContext(TunesContext);
  return (
    <div>{`user:${inputUser}`}</div>
  );
}
