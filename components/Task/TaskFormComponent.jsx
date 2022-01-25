import { useState } from "react";
import { useSetRecoilState } from "recoil";
import DateField from 'react-native-datefield';

import styled from "styled-components";
import { TaskModel } from "../../Models/TaskModel";
import { listTaskState } from "../../recoil/atoms";
import BtnComponent from "../UI/Buttons/BtnComponent";
import CardComponentView from "../UI/CardComponentView";
import InputComponent from "../UI/InputComponent";
import TextAreaComponent from "../UI/TextAreaComponent";
import DateInputComponent from "../UI/DateInputComponent";
import { formatDate } from "../../utils/helper";
import { IsValidDate } from "../../utils/validates";

const ContainerButton = styled.View`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TaskFormComponent = () => {
  const setTasklist = useSetRecoilState(listTaskState)

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const cleanForm = () => {
    setDate("")
    setTime("")
    setDescription("")
  };

  const addTask = () => {
    console.log(date);
    setTasklist((prevTaskList) => {
     return [...prevTaskList, new TaskModel(date, time, description)] 
   });

   cleanForm()
  }

  return (
    <CardComponentView title="New Task">
        
        <DateInputComponent 
          label="Date"
          onSubmit={(value) => setDate(formatDate(value))} />

        <InputComponent 
          label="Time"
          val={time} 
          onChange={setTime} />

        <TextAreaComponent 
          label="Description"
          val={description} 
          onChange={setDescription} />

        <ContainerButton>
          <BtnComponent
            text='add'
            btnStyle="primary" 
            onPress={() => addTask()} />

          <BtnComponent
            text='clear'
            btnStyle="secondary" 
            onPress={() => cleanForm()} />

        </ContainerButton>
    </CardComponentView>    
  );
}

export default TaskFormComponent;