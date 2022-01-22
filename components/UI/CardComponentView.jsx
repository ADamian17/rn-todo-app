import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const CardComponent = styled.View`
  border: 1px solid;
`;

const ChildViewStyle = styled.View`
  margin: 15px;
  padding: 10px;
`;



const CardComponentView = ({ title, children }) => {
  return (
    <CardComponent>
      <Text>{title}</Text>
      <ChildViewStyle>
        {
          children
        }
      </ChildViewStyle>
    </CardComponent>
  )
}

export default CardComponentView;