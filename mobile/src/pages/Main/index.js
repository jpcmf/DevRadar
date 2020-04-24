import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Avatar,
  Tooltip,
  DevName,
  DevBio,
  DevTechs,
  SearchForm,
  Input,
  Button,
} from './styles';

import api from '../../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../../services/socket';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs((dev) => setDevs([...devs, dev]));
  }, [devs]);

  function setupWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;

    connect(latitude, longitude, techs);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs,
      },
    });

    setDevs(response.data.devs);

    setupWebsocket();
  }

  function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView
        onRegionChange={handleRegionChange}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {devs &&
          devs.map((dev) => (
            <Marker
              key={dev._id}
              coordinate={{
                latitude: dev.location.coordinates[1],
                longitude: dev.location.coordinates[0],
              }}
            >
              <Avatar
                source={{
                  uri: dev.avatar_url,
                }}
              />

              <Callout
                onPress={() => {
                  navigation.navigate('Profile', {
                    github_username: dev.github_username,
                  });
                }}
              >
                <Tooltip>
                  <DevName>{dev.name}</DevName>
                  <DevBio>{dev.bio}</DevBio>
                  <DevTechs>{dev.techs.join(', ')}</DevTechs>
                </Tooltip>
              </Callout>
            </Marker>
          ))}
      </MapView>

      <SearchForm>
        <Input
          placeholder="Search developers by techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <Button onPress={loadDevs}>
          <MaterialIcons name="my-location" size={18} color="#fff" />
        </Button>
      </SearchForm>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Main;
