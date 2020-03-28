import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import {Form} from '@unform/web';

import api from '../../services/api';
import './styles.css';
import logoIgm from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import TextInput from '../../components/form/TextInput';

export default function Logon() {
  const history = useHistory();

  async function handleLogin({id}) {
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
        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <TextInput
            placeholder="Sua ID"
            name="id"
          />
          <button className="red-button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </section>
      <img src={heroesImg} alt=""/>
    </div>
  );
}
