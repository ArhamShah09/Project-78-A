import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SignupLoginScreen extends React.Component {
    
    constructor() {
        super();
        this.state={
            username : '',
            password : ''
        }
    }

    userLogin = (username,password) =>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
            console.log("Successfully Login");
            return Alert.alert("Successfully Login");
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        });
    }

    userSignUp = (username,password) =>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then((response)=>{
            console.log("User Added Successfully");
            return Alert.alert("User Added Successfully");
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    }
    
    render() {
        return (
            <View>
                
                <Text style = {{ color : '#ff5722', fontSize : 18, fontWeight : 'bold', marginLeft : 55 }}>USERNAME</Text>

                <View style = {{ alignItems : 'center' }}>

                    <TextInput
                        style = { styles.loginBox}
                        keyboardType = 'email-address'
                        onChangeText = {(text) => {
                            this.setState({
                                username : text
                            })
                        }}
                    />

                </View>

                <Text style = {{ color : '#ff5722', fontSize : 18, fontWeight : 'bold', marginLeft : 55 }}>Password</Text>

                <View style = {{ alignItems : 'center' }}>

                    <TextInput
                        style = { styles.loginBox}
                        keyboardType = 'password'
                        onChangeText = {(text) => {
                            this.setState({
                                password : text
                            })
                        }}
                    />

                </View>

                <View style = {{ alignItems : 'center' }}>

                    <TouchableOpacity
                        style = {[ styles.button, { marginBottom : 10 }]}
                        onPress = {() =>{this.userLogin(this.state.username, this.state.password)}}
                    >
                        <Text style = {{ color : '#ff5722', fontSize : 18, fontWeight : 'bold' }}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {[ styles.button, { marginBottom : 10 }]}
                        onPress = {() =>{this.userSignUp(this.state.username, this.state.password)}}
                    >
                        <Text style = {{ color : '#ff5722', fontSize : 18, fontWeight : 'bold' }}>SIGNUP</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
    },
});