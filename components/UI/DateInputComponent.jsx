
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import styled from 'styled-components/native';
import { formatDate } from '../../utils/helper';
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



const DateInputComponent = ({ label, id, callback }) => {

  const [date, setDate] = useState(new Date());
  const [labelDate, setLabelDate] = useState("");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setLabelDate(formatDate(currentDate));
    setDate(currentDate);
    callback(currentDate)
    console.log(event)
    setShow(false)
  };

  const showDatepicker = () => {
    setShow(true)
  };

  return (
    <StyledInputComponent>
      <StyledText>{label}</StyledText>
      <View>
        <Pressable onPress={showDatepicker} >
          <Text>
            {labelDate ? labelDate : "Set Date"}
          </Text>
        </Pressable>
        {show && (
          <RNDateTimePicker
            testID={id}
            value={date}
            display="default"
            onChange={onChange}
          />
        )}
      </View>



    </StyledInputComponent>
  )
}

export default DateInputComponent;

