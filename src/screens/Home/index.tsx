import React from 'react';
import {Text} from 'react-native';

import {StatusBar} from 'expo-status-bar';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </S.Container>
  );
};

export default Home;
