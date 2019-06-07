import React , { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            username :'',
            password :'',
            loginscreen: [],
            loginmessage:'',
            buttonLabel:'Register',
            isLogin:true
        }
    }

    componentWillMount(){
        var loginscreen = [];
        loginscreen.push(<Login parentContext = {this} appContext = {this.props.parentContext}/>);
        var loginmessage = "Not registered yet,Register Now";
        this.setState({
            loginscreen: loginscreen,
            loginmessage:loginmessage
        })
    }

    handleClick(event){
        alert(event);
        var loginmessage;
        if(this.state.isLogin){
            var loginscreen = [];
            loginscreen.push(<Register parentContext = {this}/>);
            loginmessage = "Already registerd. Go to Login";
            this.setState({
                loginscreen : loginscreen,
                loginmessage : loginmessage,
                buttonLabel : "Login",
                isLogin: false
            })
        } else {
            var loginscreen = [];
            loginscreen.push(<Login parentContext = {this} />);
            loginmessage = "Not registerd yet.Go to registration ";
            this.setState({
                loginscreen : loginscreen,
                loginmessage : loginmessage,
                buttonLabel : "Register",
                isLogin: true
            })
        }
    }
    render(){
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <MultiThemeProvider>
                    <div>
                        <RaisedButton label={this.state.buttonLabel} primary = {true} style={style}
                        onClick = {(event) => {
                            this.handleClick(event);
                        }}
                        />
                    </div>
                </MultiThemeProvider>
            </div>
        )
    }
}

const style = {
    margin : 15
};

export default LoginScreen