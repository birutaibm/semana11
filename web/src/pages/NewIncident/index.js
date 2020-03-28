import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/core';

import api from '../../services/api';
import './styles.css';
import logoIgm from '../../assets/logo.svg';
import TextInput from '../../components/form/TextInput';
import TextAreaInput from '../../components/form/TextAreaInput';

export default function NewIncident() {
  const ong = JSON.parse(localStorage.getItem('ong'));
  const history = useHistory();

  async function handleSubmit(data) {
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
        <Form onSubmit={handleSubmit}>
          <TextInput
            placeholder="Títuto do caso"
            name="title"
          />
          <TextAreaInput
            placeholder="Descrição"
            name="description"
          />
          <TextInput
            placeholder="Valor em reais"
            name="value"
          />
          <button className="red-button" type="submit">Cadastrar</button>
        </Form>
      </div>
    </div>
  );
}
