import { Text, TextInput } from 'react-native';
import DateField from 'react-native-datefield';

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

const DateInputComponent = ({ label, ...rest  }) => {
  return (
    <StyledInputComponent>
      <StyledText>{label}</StyledText>
      <DateField {...rest} />
    </StyledInputComponent>
  )
}

export default DateInputComponent;

