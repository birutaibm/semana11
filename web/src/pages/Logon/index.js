import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoIgm from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', {id});
      const {name} = response.data
      if (name) {
        localStorage.setItem('ong', JSON.stringify({id, name}));
        history.push('/profile')
      }
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
      <img src={logoIgm} alt="Be The Hero"/>
      <form onSubmit={handleLogin}>
        <h1>Faça seu logon</h1>
        <input
          placeholder="Sua ID" 
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button className="red-button" type="submit">Entrar</button>
        <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#e02041" />
          Não tenho cadastro
        </Link>
      </form>
      </section>
      <img src={heroesImg} alt=""/>
    </div>
  );
}
