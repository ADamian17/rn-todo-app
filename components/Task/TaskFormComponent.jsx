import { useState } from "react";
import { useSetRecoilState } from "recoil";

import styled from "styled-components";
import { TaskModel } from "../../Models/TaskModel";
import { listTaskState } from "../../recoil/atoms";
import BtnComponent from "../UI/Buttons/BtnComponent";
import CardComponentView from "../UI/CardComponentView";
import TextAreaComponent from "../UI/TextAreaComponent";
import DateInputComponent from "../UI/DateInputComponent";
import { formatDate } from "../../utils/helper";
import * as taskApi from "../../api/task";

const ContainerButton = styled.View`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TaskFormComponent = () => {
  const setTasklist = useSetRecoilState(listTaskState)

  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [labelStarDate, setLabelStarDate] = useState("Set Date")
  const [labelEndDate, setLabelEndDate] = useState("Set Date")

  const cleanForm = () => {
    setStartDate(new Date())
    setEndDate(new Date())
    setDescription("")
  };

  const addTask = () => {
    const task = new TaskModel(
      startdate, 
      enddate, 
      description
    )
    taskApi.save(task)

    cleanForm()
  }

  return (
    <CardComponentView title="New Task" isBorderedRadius>

      <DateInputComponent
        label="Start Date"
        id="StartDateTimePicker"
        value={startdate}
        callback={(selectedDate) => {
          setStartDate(selectedDate)
          setLabelStarDate(formatDate(selectedDate))
        }}
        inputLabel={labelStarDate}
      />

      <DateInputComponent
        label="End Date"
        id="EndDateTimePicker"
        value={enddate}
        callback={(selectedDate) => {
            setEndDate(selectedDate)
            setLabelEndDate(formatDate(selectedDate))
          } 
        }
        inputLabel={labelEndDate}
      />

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