import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import styled from 'styled-components/native';
import TaskFormComponent from './components/Task/TaskFormComponent';
import TaskListComponent from './components/Task/TaskList';

import RecoilRootWrapper from './recoil';

const MainViewContainer = styled.View`
  padding: 50px;
`;

export default function App() {
  return (
      <RecoilRootWrapper>
        <MainViewContainer>

        <TaskFormComponent />
        <TaskListComponent />
        
        </MainViewContainer>
      </RecoilRootWrapper>
  );
}
