import styled from 'styled-components/native';

const CardComponent = styled.View`
  display:flex;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  padding:20px;
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



const CardComponentView = ({ title, children }) => {
  return (
    <CardComponent>
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