import React, {Component } from 'react';
import LoginScreen from './LoginScreen';
import './App.css';




class App extends Comment {
   constructor(props){
     super(props);
     this.state = {
       loginPage : [],
       uploadScreen : []
     }
   }

   componentWillMount(){
     var loginPage = [];
     loginPage.push(<LoginScreen parentContext = {this} key={"login-screen"}/>);
     this.setState({
       loginPage : loginPage
     })
   }

   render(){
     return (
       <div className="App">
         {this.state.loginPage}
         {this.state.uploadScreen}
       </div>
     )
   }
}

const style = {
  margin : 15
}


export default App;
