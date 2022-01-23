import { Text, TextInput } from 'react-native';

import styled from 'styled-components/native';
import { BaseStyledText, BaseStyledTextInput } from '../Styled/Bases';

const StyledTextAreaComponent = styled.View`
  margin-bottom: 15px;
`;

const StyledTextArea = styled(BaseStyledTextInput)``;

const StyledText = styled(BaseStyledText)`
  margin-bottom:5px;
`;

const TextAreaComponent = ({ label }) => {
  return (
    <StyledTextAreaComponent>
      <StyledText>{label}</StyledText>
      <StyledTextArea multiline numberOfLines={5} />
    </StyledTextAreaComponent>
  )
}

export default TextAreaComponent;
