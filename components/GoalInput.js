import { useState } from "react";
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

const GoalInput = (props) => {

    const [goal, setGoal] = useState('');

    const updateGoalHandler = (element) => {
        setGoal(element);
    }

    const addGoalHandler = () => {
        props.addGoal(goal);
        setGoal('');
        props.setVisibility();
    }

    const cancelModal = () => {
        setGoal('');
        props.setVisibility();
    }

    return (
        <Modal animationType="slide" transparent={true} visible={props.visible}>
            <View style={styles.addGoalContainer}>
                <Image source={require('../assets/favicon.png')} style = {styles.icon} />
                <TextInput style={styles.addGoal} placeholder={"Type your goal..."} placeholderTextColor='#cccccc' onChangeText={updateGoalHandler} value = {goal} />
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button title = 'Cancel' onPress={cancelModal} color='red' />
                    </View>
                    <View style = {styles.button}>
                        <Button title = 'Submit' onPress={addGoalHandler} color='#00ffe1' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    addGoalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#414141'
    },

    icon: {
        height: 100,
        width: 100,
        margin: '5%'
    },

    addGoal: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 10,
        width: '100%',
        color: 'white',
        marginVertical: '5%'
    },

    buttonContainer: {
        flexDirection: "row",
    },

    button: {
        margin: '4%'
    }
});

export default GoalInput;