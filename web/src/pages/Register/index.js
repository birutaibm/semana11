import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/core';

import api from '../../services/api';
import './styles.css';
import logoIgm from '../../assets/logo.svg';
import TextInput from '../../components/form/TextInput';

export default function Register() {
  const history = useHistory();

  async function handleSubmit(data) {
    const response = await api.post('ongs', data);

    alert('Seu ID de acesso: '+response.data.id);
    history.push('/');
  }
  
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoIgm} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para logon
          </Link>
        </section>
        <Form onSubmit={handleSubmit}>
          <TextInput
            placeholder="Nome da ONG"
            name="name"
          />
          <TextInput
            type="email"
            placeholder="E-mail"
            name="email"
          />
          <TextInput
            placeholder="WhatsApp"
            name="whatsapp"
          />

          <div className="input-group">
            <TextInput
              placeholder="Cidade"
              name="city"
            />
            <TextInput
              placeholder="UF"
              name="uf"
              style={{width: 80}}
            />
          </div>
          <button className="red-button" type="submit">Cadastrar</button>
        </Form>
      </div>
    </div>
  );
}
