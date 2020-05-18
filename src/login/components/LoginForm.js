import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Spinner, Button} from '../../components/common';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import { View, Text, StyleSheet } from 'react-native';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
        // console.log("email change1:", text);
        // console.log("email change:", this.props.email);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
        // console.log("pswd  press1:", text);
        // console.log("pswd  press:", this.props.password);
    } 

    onButtonPress(){
        const {email, password} = this.props;
        console.log("button press:", email);
        this.props.loginUser({email, password});
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    renderError(){
        if(this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{color:'red'}}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input labelText="Email" 
                        placeholderText="user@gmail.com" 
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                <Input labelText="Password" 
                    placeholderText="password" 
                    secureText={true}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
               />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    }
}
const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    }
} 

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);