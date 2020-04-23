import React, { useState, useEffect } from 'react';

import { Container, Sidebar, Main } from './styles';

import Form from '~/components/Form';
import DevItem from '~/components/DevItem';

import api from '~/services/api';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    github_username: '',
    techs: '',
    latitude: 0,
    longitude: 0,
  });
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setInitialValues({
          ...initialValues,
          latitude,
          longitude,
        });
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []); // eslint-disable-line

  async function handleSubmit(values, { resetForm }) {
    const { github_username, techs, latitude, longitude } = values;

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    resetForm();

    setDevs([...devs, response.data]);
  }

  useEffect(() => {
    async function loadDevs() {
      try {
        setLoading(true);

        const response = await api.get('/devs');

        setDevs(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadDevs();
  }, []);

  return (
    <Container>
      <Sidebar>
        <Form handleSubmit={handleSubmit} initialValues={initialValues} />
      </Sidebar>

      <Main>
        <ul>
          {loading && devs ? (
            <p>Loading...</p>
          ) : (
            devs.map(dev => <DevItem key={dev._id} dev={dev} />)
          )}
        </ul>
      </Main>
    </Container>
  );
}
