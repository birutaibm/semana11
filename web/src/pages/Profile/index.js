import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import './styles.css';
import logoIgm from '../../assets/logo.svg';

export default function Profile() {
  const profile = {
    ong: {name: 'APAD'},
    incidents: [{
      name: 'Caso teste',
      description: 'Descrição teste',
      value: 'R$ 120,00'
    }, {
      name: 'Caso teste',
      description: 'Descrição teste',
      value: 'R$ 120,00'
    }, {
      name: 'Caso teste',
      description: 'Descrição teste',
      value: 'R$ 120,00'
    }, {
      name: 'Caso teste',
      description: 'Descrição teste',
      value: 'R$ 120,00'
    }, {
      name: 'Caso teste',
      description: 'Descrição teste',
      value: 'R$ 120,00'
    }]
  };

  return (
    <div className="profile-container">
      <header>
        <img src={logoIgm} alt="Be The Hero"/>
        <span>Bem-vinda, {profile.ong.name}</span>
        <Link className="red-button" to="/incidents/new">Cadastrar novo caso</Link>
        <button><FiPower size={18} color="#e02041" /></button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>{profile.incidents.map((incident, index) => (
        <li key={index}>
          <strong>CASO:</strong>
          <p>{incident.name}</p>
          <strong>DESCRIÇÃO:</strong>
          <p>{incident.description}</p>
          <strong>VALOR:</strong>
          <p>{incident.value}</p>
          <button>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      ))}</ul>
    </div>
  );
}
