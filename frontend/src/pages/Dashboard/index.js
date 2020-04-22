import React from 'react';

import { Container, Sidebar, Main } from './styles';

import Form from '~/components/Form';

export default function Dashboard() {
  const handleSubmit = values => console.log(JSON.stringify(values));
  const initialValues = {
    github_username: '',
    techs: '',
    latitude: '',
    longitude: '',
  };

  return (
    <Container>
      <Sidebar>
        <Form handleSubmit={handleSubmit} initialValues={initialValues} />
      </Sidebar>

      <Main>
        <strong>Cadastrar</strong>
      </Main>
    </Container>
  );
}
