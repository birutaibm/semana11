import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoIgm from '../../assets/logo.svg';

export default function NewIncident() {
  const ong = JSON.parse(localStorage.getItem('ong'));
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {title, description, value};
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ong.id,
        }
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao criar caso. Tente novamente.')
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoIgm} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Títuto do caso"
            name={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            name={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            name={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="red-button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
