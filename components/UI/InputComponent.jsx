import { Text, TextInput } from 'react-native';

import styled from 'styled-components/native';
import { BaseStyledText, BaseStyledTextInput } from '../Styled/Bases';

const StyledInputComponent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
`;

const StyledTextInput = styled(BaseStyledTextInput)`
  flex:1;
`;

const StyledText = styled(BaseStyledText)`
  flex:1;
`;

const InputComponent = ({ label }) => {
  return (
    <StyledInputComponent>
      <StyledText>{label}</StyledText>
      <StyledTextInput placeholder='' />
    </StyledInputComponent>
  )
}

export default InputComponent;
