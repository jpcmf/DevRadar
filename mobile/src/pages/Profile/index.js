import React from 'react';

import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {
  const gitUsername = navigation.getParam('github_username');

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${gitUsername}` }}
    />
  );
}
