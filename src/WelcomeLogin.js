import React, {useState} from 'react';
import './App.css';
import FirstPage from "./FirstPage";
import {callAPI} from "./utils/API"

class WelcomeLogin extends React.Component {


    constructor(props) {

        super(props);
        this.state = {clickDetails: true, data:{}};
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick = (e) => {



        this.setState({clickDetails: false, data:callAPI()})
        e.preventDefault();
    }


    render() {


        return (
            <div className="Login-header">
                {this.state.clickDetails ?
                    <div>
                        Welcome {this.props.name}! to get your records please click below
                        <href> <button onClick={this.handleClick}>get records </button></href>
                    </div> : <FirstPage data={this.props.data}/>}

            </div>
        )

    }
}

export default WelcomeLogin;