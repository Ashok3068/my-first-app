import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./User";
import {} from './utils/ducks'
import {getCustomerDetails} from "./utils/ducks";
import {getDetails} from "./utils/ducks";
import store from "./index";

class App extends React.Component {


  constructor(props) {

    super(props);
      this.name1=new Date().toLocaleTimeString();

    this.state = {date: new Date().toLocaleTimeString(),name:"ashok", employee:{}};


  }





    render() {
      const details ={
        tags:["ashok","chin","123"],
        name:"chintha",
        age:12
      }
  return (
    <div className="App">

        <User id={"SAMPLE APP"} name={this.state}name1={this.name1} details={this.state.employee.author} />

    </div>
  );
}}


export default  App /*((p2p)=>(p2p), (dispatch:any)=>({
  getDetails:()=>dispatch(getDetails())}));*/
