import {View, Text, StyleSheet, Pressable} from 'react-native';

const SpecificGoal = (props) => {
    return (
        <View style = {styles.goalContainer}>
            <Pressable onPress={props.onDelete.bind(this, props.id)} style={ ( {pressed} ) => 
                pressed && styles.pressedGoal
            }>
                <Text style = {styles.goal}>{props.goal}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    pressedGoal: {
        backgroundColor: '#00a08d',
        borderRadius: 10,
    },

    goalContainer: {
        marginVertical: 10,
        backgroundColor: '#00e1c7',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10
    },

    goal: {
        fontSize: 16,
        padding: 20,
        color: 'black'
    },    
});

export default SpecificGoal;