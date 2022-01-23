const buttons = {
  primary: '#000',
  secondary: 'transparent'
}

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