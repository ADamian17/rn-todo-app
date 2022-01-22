import { Text, TextInput } from 'react-native';

import styled from 'styled-components/native';

export const StyledInputComponent = styled.View`
  border: 1px solid;
`;

const TextAreaComponent = ({ label }) => {
  return (
    <StyledInputComponent>
      <Text>{label}</Text>
      <TextInput placeholder='text area' />
    </StyledInputComponent>
  )
}

export default TextAreaComponent;
