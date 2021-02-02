import React, {useState} from 'react';
import './App.css';
import WelcomeLogin from "./WelcomeLogin";

class User extends React.Component {


    constructor(props) {

        super(props);
        this.state = {name: "ashok", isLoggedIn: false, userId: "", pwd: "", str: "", employee: {}};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setLocalStorage = this.setLocalStorage.bind(this)
        this.getWithExpiry = this.getWithExpiry(this)
    }


    callAPI = () => {
        let data = null;

        fetch('http://localhost:8090/institute/1234', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({employee: data});
                console.log('Success:', data);
                console.log("employees" + this.state.employee)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        return data;

    };

    componentDidMount(): void {
        if (window.localStorage.getItem("cookies") != null)
            this.setState(state => ({name: "Chinthalapalli", isLoggedIn: true, str: "logged in as Ashok"}));

    }

    getWithExpiry = (key) => {
        const itemStr = localStorage.getItem(key)
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        // compare the expiry time of the item with the current time
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key)
            return null
        }
        return item.value
    }
    setLocalStorage = (key, value, ttl) => {
        const now = new Date()

        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (document.getElementById("userId").value === "ashok") {
           // this.setLocalStorage("cookies", "ashok", 4000);
            this.callAPI()
            //console.log(this.employee)
            // await console.log(this.state.data)

            this.setState(state => ({name: "Chinthalapalli", isLoggedIn: true, str: "logged in as Ashok"}));
        } else {
            this.setState(state => ({str: "Invalid login", isLoggedIn: false}));
        }

    };


    render() {
        return (
            <div>
                <div className="header"> {this.props.name.date}<br/>
                    {this.props.details}
                    {this.props.id}</div>
                {!this.state.isLoggedIn ?
                    <form className="App-header" onSubmit={this.handleSubmit}>
                        <div>
                            <br/>
                            UserName: <input type="text" id="userId" placeholder="enter user Id"
                                             value={this.state.userId} onChange={(event) => {
                            this.setState({userId: event.target.value})
                        }}/>
                            <br/>
                            <br/>

                            Password:&nbsp;  <input type="password" id="pwd" placeholder="enter password"
                                                    value={this.state.pwd} onChange={(event) => {
                            this.setState({pwd: event.target.value})
                        }}/>
                            <br/>
                            <br/>
                            <input type="submit"/></div>
                        <br/>
                        <div className="text-danger"> {this.state.str}</div>
                    </form> :
                    <div className="text-success"
                         align="right"> {this.state.str} {console.log("User.js" + JSON.stringify(this.state.employee))}
                        {this.state.isLoggedIn ? <WelcomeLogin data={this.state.employee} name={"Ashok"}/>  : ""}
                    </div>}

            </div>

        )
    }
}

export default User;


