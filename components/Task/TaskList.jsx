import { FlatList, Text, View } from "react-native";

import { useRecoilState, useRecoilValue } from "recoil";
import { listTaskState } from "../../recoil/atoms";

const Item = ({ title, id, date }) => (
  <View>
    <Text>{title} - {id} - {date}</Text>
  </View>
);  

const renderItem = ({ item }) => (
  <Item title={item.description} id={item.id} date={item.date}/>
);

const TaskListComponent = () => {
  const taskList = useRecoilValue(listTaskState);
  
  return (
    <FlatList
      data={taskList}
      renderItem={renderItem}
      keyExtractor={item => item.id} />
  );
}

export default TaskListComponent;
