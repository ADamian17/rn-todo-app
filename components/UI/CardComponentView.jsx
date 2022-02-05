import styled from 'styled-components/native';

export const CardComponent = styled.View`
  display:flex;
  border: 1px solid ${({ borderColor }) => borderColor ? borderColor : "black"};
  border-radius: ${({ isBorderedRadius }) => isBorderedRadius ? 
    "10px" : "0px" };
  padding:15px;
  margin-bottom: 20px;
  height: 350px;
  overflow: hidden;
`;

const ChildViewStyle = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const HeaderText = styled.Text`
  align-self: center;
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
`;



const CardComponentView = ({ title, isBorderedRadius, borderColor, children }) => {
  return (
    <CardComponent 
      isBorderedRadius={isBorderedRadius}
      borderColor={borderColor}>
      <HeaderText>{title}</HeaderText>
      <ChildViewStyle>
        {
          children
        }
      </ChildViewStyle>
    </CardComponent>
  )
}

export default CardComponentView;