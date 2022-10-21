import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Task from './src/components/Task';

const App = () => {
  const [task, setTask] = useState('');
  const [taskItem, setTaskItem] = useState([]);
  const handleAddTask = () => {
    setTaskItem([...taskItem, task]);
    setTask(null);
  };
  const completeTask = index => {
    let itemCopy = [...taskItem];
    itemCopy.splice(index, 1);
    setTaskItem(itemCopy);

  };
  return (
    <View style={customStyle.container}>
      <View style={customStyle.wrapper}>
        <Text style={customStyle.sectionTitle}>Today's tasks</Text>
        <View style={customStyle.items}>
          {taskItem?.map((items, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={items} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={customStyle.writeTaskWrapper}>
        <TextInput
          value={task}
          onChangeText={value => setTask(value)}
          style={customStyle.input}
          placeholder={'Write a task'}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={customStyle.addWrapper}>
            <Text style={customStyle.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const customStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
  },
});

export default App;
