import styled from "styled-components/native";

const buttonsStyles = {
  default: { 
    bgColor: '#000',
    txtColor: 'white'
  },
  primary: { 
    bgColor: '#3936f3',
    txtColor: 'white'
  },
  secondary: { 
    bgColor: 'transparent',
    txtColor: 'black'
  },
}

export const BaseStyledButtom = styled.Pressable`
  padding: 10px;
  width: 40%;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

export const CustomBtn = styled(BaseStyledButtom)`
  background-color: ${({ btnType }) => btnType ? 
    buttonsStyles[btnType].bgColor :  
    buttonsStyles['default'].bgColor };
  ${
    ({ btnType }) =>
    btnType === 'primary' ? 
    'border: none' : 
    ''
  }   
`;

export const CustomBtnText = styled.Text`
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${({ btnType }) => btnType ? 
    buttonsStyles[btnType].txtColor :  
    buttonsStyles['default'].txtColor};
`;
