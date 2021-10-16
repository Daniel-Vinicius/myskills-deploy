import React, { useEffect } from "react";
import { StatusBar } from "react-native";

import SplashScreen from 'react-native-splash-screen';
import codePush from "react-native-code-push";
import * as Sentry from '@sentry/react-native';

import { Home } from "./src/pages/Home";

const { SENTRY_DSN } = process.env;

Sentry.init({
  dsn: SENTRY_DSN,
});

function App() {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE
    });

    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#121015" />
      <Home />
    </>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(App);
