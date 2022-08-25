import { useState } from 'react';
import { StyleSheet, View, FlatList, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SpecificGoal from './components/SpecificGoal';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoal = (element) => {
    setGoals(prev => [{goal: element, id: Math.random().toString()}, ...prev]);
  }

  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    })
  }

  const modalOpenHandler = () => {
    setModalVisible(true);
  }

  const modalCloseHandler = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <View style = {styles.addGoalButton}>
        <Button title='Add Goal' onPress={modalOpenHandler} color='#00ffe1' />
      </View>
      <GoalInput addGoal = {addGoal} visible = {modalVisible} setVisibility={modalCloseHandler}/>
      <View style={styles.goalsListContainer}>
        <FlatList
          data={goals}
          renderItem={(element) => {
            return (
              <SpecificGoal goal = {element.item.goal} id = {element.item.id} onDelete = {deleteGoalHandler} />
            );
          }}
          keyExtractor={(item) => {return item.id;}}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '1%'
  },

  goalsListContainer: {
    flex: 6,
    marginHorizontal: 20,
    // paddingTop: '5%'
  },

  addGoalButton: {
    paddingTop: '15%',
    paddingBottom: '5%',
    // marginBottom: '5%',
    backgroundColor: '#414141',
    borderBottomColor: '#4f4f4f',
    borderBottomWidth: 1
    // flex: 1,
    // marginTop: '15%',
  },
});
