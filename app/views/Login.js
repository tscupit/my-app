import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const cancelLogin = ()=>{
        Alert.alert('Login cancelled');
        navigation.navigate('Home');
    };

    const createAccount = ()=>{
        navigation.navigate('Register')
    };

    const loginUser = ()=>{
        if ( !userName ){
            Alert.alert('Please enter a username')
        }
        else if ( !password ){
            Alert.alert('Please enter a password')
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result!=='none'){
                    Alert.alert('Someone already logged on');
                    navigation.navigate('Home');
                }
                else{
                    AsyncStorage.getItem(userName, (err, result) => {
                        if(result!==null){
                            if(result!==password) {
                                Alert.alert('Password incorrect')
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn',userName, (err, result) => {
                                    Alert.alert(`${userName} Logged in`);
                                    navigation.navigate('Home');
                                });
                            }
                        }
                        else{
                            Alert.alert(`No account for ${userName}`);
                        }
                    })
                }
            })
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput 
                style={styles.inputs} 
                onChangeText={setUserName}
                value={userName}
            />
            <Text style={styles.labels}>Enter Username</Text>

            <TextInput 
                style={styles.inputs} 
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <Text style={styles.labels}>Enter Password</Text>

            <TouchableHighlight onPress={loginUser} underlayColor='#000000'>
                <Text style = {styles.buttons}>Login</Text>    
            </TouchableHighlight>

            <TouchableHighlight onPress={cancelLogin} underlayColor='#000000'>
                <Text style = {styles.buttons}>Cancel</Text>    
            </TouchableHighlight>

            <TouchableHighlight onPress={createAccount} underlayColor='#000000'>
                <Text style = {styles.buttons}>Create Account</Text>    
            </TouchableHighlight>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '5%'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputs:{
        width: '80%',
        marginTop: 15,
        borderWidth: 1,
        height: 45,
        fontSize: 16,
        fontColor: '#000000'
    },
    buttons:{
        padding: 15,
        margin: 5,
        fontSize: 16,
        backgroundColor:'#DDDDDD',
        width: 150,
        height: 50,
        textAlign: 'center'
    },
    labels:{
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }    
});

export default LoginScreen;