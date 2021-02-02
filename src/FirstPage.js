import React, {useState} from 'react';
import './App.css';

class FirstPage extends React.Component {


    constructor(props) {

        super(props);
        this.state = {editEnabled: false};

    }


    render() {


        return (
            <div className="Login-header">

                <table className='table'>
                    <thead className="tableHeader">
                    <tr>
                        <th>topic</th>
                        <th>author</th>
                        <th>tags</th>
                        <th>date</th>
                        <th>seNum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!this.state.editEnabled ?


                        (this.props.data["books"]).map(a => (
                            <tr className="tableRow">

                                <td>{a["bookName"]}</td>
                                <td>{a["publishedDate"]}</td>
                                <td>{a["bookId"]}</td>
                                <td>{a["authorName"]}</td>
                                <td>
                                    <button value="edit"> edit</button>
                                </td>


                            </tr>)) : <div></div>}
                    </tbody>

                </table>

                {console.log("firstPage" + this.props.data)}

            </div>
        )

    }
}

export default FirstPage;