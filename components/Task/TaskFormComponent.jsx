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

  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const cleanForm = () => {
    setStartDate("")
    setEndDate("")
    setDescription("")
  };

  const addTask = () => {
    setTasklist((prevTaskList) => {
     return [...prevTaskList, new TaskModel(startdate, enddate, description)] 
   });

   cleanForm()
  }

  return (
    <CardComponentView title="New Task" isBorderedRadius>
        
        <DateInputComponent 
          label="Start Date"
          onSubmit={(value) => setStartDate(formatDate(value))} />

        <DateInputComponent 
          label="End Date"
          onSubmit={(value) => setEndDate(formatDate(value))} />

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