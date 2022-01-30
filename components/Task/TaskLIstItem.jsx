import { Text, View } from "react-native";
import styled from "styled-components/native";
import { getDay, getMonth } from "../../utils/helper";

export const ContainerItem = styled.View`
  margin-bottom: 10px;
`;

export const ContainerItemData = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;



const Separator = styled.View`
  background: #ccc;
  height: 1px;
  margin-bottom: 10px;
`;

const DateViewContanier = styled.View`
    display: flex;
    flex-direction: column;
`;

const DateInfoContanier = styled(DateViewContanier)`
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 2px;
    margin-right: 3px;
    margin-bottom: 3px;
`;

const DateTextStyle = styled.Text`
    font-size: 14px;
`;

const TitleText = styled.Text`
    text-align: center;
    font-size: 10px;
`;

const DescriptionText = styled.Text`
    margin-left: 10px;
`;


const DateView = ({label, date}) => {
    return (
        <DateViewContanier>
            <DateInfoContanier>
                <DateTextStyle>{ getDay(date) }</DateTextStyle>
                <DateTextStyle>{ getMonth(date) }</DateTextStyle>
            </DateInfoContanier>
            <TitleText>{label}</TitleText>
        </DateViewContanier>
    )
}

const ItemContainer = ({item}) => {
    return (
        <ContainerItem>
            <Separator/>
            <ContainerItemData>
                <DateView label="Star" date={item.startdate} />
                <DateView label="End" date={item.enddate} />
                <DescriptionText>{ item.description }</DescriptionText>
            </ContainerItemData>
        </ContainerItem>
    )
}

export default ItemContainer;