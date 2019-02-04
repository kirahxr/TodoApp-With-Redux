//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

// create a component
class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddTodo />

                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 3,
        backgroundColor:'#fd5c63', 
        borderBottomWidth:1, 
        borderBottomColor:'#dddddd' 
    },
});

//make this component available to the app
export default TodoApp;
