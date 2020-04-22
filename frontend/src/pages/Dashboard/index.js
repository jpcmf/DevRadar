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
        <ul>
          <li>
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/1216136?s=460&u=6cd0d881545456467074bdd24e3032566f8a36c2&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>João</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>Biografia...</p>
            <a href="/">Go to the Github profile</a>
          </li>
          <li>
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/1216136?s=460&u=6cd0d881545456467074bdd24e3032566f8a36c2&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>João</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>Biografia...</p>
            <a href="/">Go to the Github profile</a>
          </li>
          <li>
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/1216136?s=460&u=6cd0d881545456467074bdd24e3032566f8a36c2&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>João</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>Biografia...</p>
            <a href="/">Go to the Github profile</a>
          </li>
        </ul>
      </Main>
    </Container>
  );
}
