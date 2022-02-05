import { FlatList, Text, View } from "react-native";

import { useRecoilValue } from "recoil";
import { listTaskState } from "../../recoil/atoms";
import CardComponentView from "../UI/CardComponentView";
import ItemContainer from "./TaskLIstItem";

const TaskListComponent = () => {
  const taskList = useRecoilValue(listTaskState);
  
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
