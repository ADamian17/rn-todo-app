import { Alert } from 'react-native';
import styled from 'styled-components/native';
import PrimaryButtomComponent from './components/UI/Buttons/PrimaryButton';
import SecundaryButtomComponent from './components/UI/Buttons/SecundaryButton';
import CardComponentView from './components/UI/CardComponentView';

import InputComponent from './components/UI/InputComponent';
import TextAreaComponent from './components/UI/TextAreaComponent';

const MainViewContainer = styled.View`
  padding: 50px;
`;

const ContainerButton = styled.View`
  display:flex;
  flex-direction: row;
  justify-content: space-between;

`;

export default function App() {
  return (
      <MainViewContainer>

        <CardComponentView title="New Task">
            <InputComponent label="Date"/>
            <InputComponent label="Time"/>
            <TextAreaComponent label="Description"/>

            <ContainerButton>
              <PrimaryButtomComponent 
                title='add' 
                onclick={() => Alert.alert('Simple Button Primary')}
                />

              <SecundaryButtomComponent 
              title='clean'
              onclick={() => Alert.alert('Simple Button Secundary')}
              />
            </ContainerButton>
        </CardComponentView>

      </MainViewContainer>
  );
}
