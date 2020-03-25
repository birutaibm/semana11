import React, {useState, useEffect, useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import './styles.css';
import logoIgm from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile() {
  const ong = JSON.parse(localStorage.getItem('ong'));
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
  const loadProfile = useCallback(() => {
    api.get('profile', {
      headers: {
        Authorization: ong.id,
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ong.id]);

  useEffect(loadProfile, [ong.id]);

  function handleDeleteIncident(id) {
    api.delete('incidents/'+id, {
      headers: {
        Authorization: ong.id,
      }
    }).then(loadProfile).catch(err => {
      alert('Erro ao deletar caso, tente novamente.');
    });
  }

  function handleLogout() {
    localStorage.removeItem('ong');
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoIgm} alt="Be The Hero"/>
        <span>Bem-vindo(a), {ong.name}</span>
        <Link className="red-button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>{incidents.map((incident, index) => (
        <li key={index}>
          <strong>CASO:</strong>
          <p>{incident.title}</p>
          <strong>DESCRIÇÃO:</strong>
          <p>{incident.description}</p>
          <strong>VALOR:</strong>
          <p>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(incident.value)}
          </p>
          <button onClick={e => handleDeleteIncident(incident.id)}>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      ))}</ul>
    </div>
  );
}
