import React from 'react';

import Routes from "./src/routes";
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

function App() {
  return (
    <>
      <StatusBar barStyle="light-contnent" backgroundColor="#7d40E7"/>
      <Routes />
    </>
  );
}

export default App;


