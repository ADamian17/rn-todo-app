import styled from 'styled-components/native';

export const BaseStyledTextInput = styled.TextInput`
  border: 1px solid #000;
`;

export const BaseStyledText = styled.Text``;

export const BaseStyledButtom = styled.Button`
    padding: 13px;
`;

export const StyledPrimaryButtom = styled(BaseStyledButtom)`
    background-color: #000;
`;

export const StyledSecundaryButtom = styled(BaseStyledButtom)`
    background-color: transparent;
    color: #000;
`;