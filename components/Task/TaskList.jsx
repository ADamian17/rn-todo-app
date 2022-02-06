import { FlatList, Text, View } from "react-native";

import { useRecoilState, useRecoilValue } from "recoil";
import { listTaskState } from "../../recoil/atoms";
import CardComponentView from "../UI/CardComponentView";
import ItemContainer from "./TaskLIstItem";
import * as taskApi from "../../api/task";
import { useEffect } from "react";

const TaskListComponent = () => {
  const [taskList, setTaskList] = useRecoilState(listTaskState);
  
  useEffect(() => {
    taskApi.setupListListener(items => {
      setTaskList(items);
    })
  }, [])
  
  return (
    <CardComponentView title="Tasks" borderColor="#ccc">
      <FlatList
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        scrollEnabled
        data={taskList}
        renderItem={({item}) => <ItemContainer item={item}/>}
        keyExtractor={item => item.id} />
    </CardComponentView>
  );
}

export default TaskListComponent;
