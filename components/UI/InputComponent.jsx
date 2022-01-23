import { Text, TextInput } from 'react-native';

import styled from 'styled-components/native';
import { BaseStyledText, BaseStyledTextInput } from '../Styles/Bases';

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

const InputComponent = ({ label, val, onChange }) => {
  return (
    <StyledInputComponent>
      <StyledText>{label}</StyledText>
      <StyledTextInput 
        placeholder='' 
        value={val} 
        onChangeText={onChange}
        />
    </StyledInputComponent>
  )
}

export default InputComponent;
