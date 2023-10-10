import React from 'react';
import './App.css';
import { DarkBtn, LightBtn } from './components/Buttons.styled';
import Card from './components/Card.styled';
import ButtonsContainer from './components/ButtonsContainer';
import { Image } from './components/Image.styled';
import { Title } from './components/Title.styled';
import { Text } from './components/Text.styled';

function App() {
  return (
    <div className="App">
      <Card>
        <Image />
        <Title>Headline</Title>
        <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
        <ButtonsContainer>
          <DarkBtn>See more</DarkBtn>
          <LightBtn>Save</LightBtn>
        </ButtonsContainer>
      </Card>
    </div>
  );
}

export default App;