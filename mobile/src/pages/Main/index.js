import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import { Avatar, Tooltip, DevName, DevBio, DevTechs } from './styles';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

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

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -25.464894, longitude: -49.2861416 }}>
        <Avatar
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/1216136?v=4',
          }}
        />

        <Callout
          onPress={() => {
            navigation.navigate('Profile', {
              github_username: 'jpcmf',
            });
          }}
        >
          <Tooltip>
            <DevName>Joao Paulo Fricks</DevName>
            <DevBio>Bio...</DevBio>
            <DevTechs>ReactJS, React Native</DevTechs>
          </Tooltip>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Main;
