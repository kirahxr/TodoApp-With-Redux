//import liraries
import React, { Component } from 'react';
import { View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-ionicons'

import { connect } from 'react-redux';

import { addTodo } from '../actions';

// create a component
class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        // redux store
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }
    
    render() {
        return (
            <View style={styles.header}>      
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    underlineColorAndroid="transparent"
                    placeholder="Cth. Belajar Redux"
                    placeholderTextColor="grey"
                    style={styles.TextInput}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={styles.Icon}>
                        <Icon name="add" style={{ color: '#de9595', padding: 10 }} size={25}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 3,
        shadowOffset:{ width: 8, height: 8 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    TextInput: {
        flex: 1, 
        height: 40,
        fontWeight: '500', 
        backgroundColor: 'white',
    },
    Icon: {
        flexDirection: 'row',
        shadowOffset:{ width: 8, height: 8 },
        marginHorizontal: 3,
        shadowColor: 'black',
        alignItems: 'center',
    }
});

//make this component available to the app
export default connect()(AddTodo);
