import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import PrimaryButtomComponent from './components/UI/Buttons/PrimaryButton';
import SecundaryButtomComponent from './components/UI/Buttons/SecundaryButton';
import CardComponentView from './components/UI/CardComponentView';

import InputComponent from './components/UI/InputComponent';
import TextAreaComponent from './components/UI/TextAreaComponent';

const MainViewContainer = styled.View`
  padding: 50px;
`;

const ContainerButton = styled.View`
  display:flex;
  flex-direction: row;
  justify-content: space-between;

`;

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.description} />
);

export default function App() {

  const task = {
    date: "",
    time: "",
    description: ""
  }

  const [listTask, setTasks] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const cleanForm = () => {
    setDate("")
    setTime("")
    setDescription("")
  };

  const addTask = () => {
    task.date = date
    task.time = time
    task.description = description

    listTask.push(task)

    setTasks(listTask)
  }

  return (
      <MainViewContainer>

        <CardComponentView title="New Task">
            <InputComponent 
              label="Date" 
              val={date} 
              onChange={setDate}
            />
            <InputComponent 
              label="Time"
              val={time} 
              onChange={setTime}
            />
            <TextAreaComponent 
              label="Description"
              val={description} 
              onChange={setDescription}
            />

            <ContainerButton>
              <PrimaryButtomComponent 
                title='add' 
                onclick={() => addTask()}
                />

              <SecundaryButtomComponent 
              title='clean'
              onclick={() => cleanForm()}
              />
            </ContainerButton>
        </CardComponentView>

        <FlatList
          data={listTask}
          renderItem={renderItem}
          keyExtractor={item => item.date}
        />

      </MainViewContainer>
  );
}
