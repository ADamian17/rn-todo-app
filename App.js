import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import CardComponentView from './components/UI/CardComponentView';

import InputComponent from './components/UI/InputComponent';
import TextAreaComponent from './components/UI/TextAreaComponent';

export const MainViewContainer = styled.View`
  color: red;
  padding: 50px;
`;

export default function App() {
  return (
      <MainViewContainer>

        <CardComponentView title="New Task">
            <InputComponent label="Date"/>
            <InputComponent label="Time"/>
            <TextAreaComponent label="description"/>

            <Button title='add'/>
            <Button title='clean'/>
        </CardComponentView>

      </MainViewContainer>
  );
}
