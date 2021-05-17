import './App.css';
import './css/dropdown.css';
import React from 'react';
import axios from 'axios'
import UserList from "./components/users";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                const users = response.data
                console.log(users)
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <body>
                <div className="navbar">
                    <a href="#">Главная</a>
                    <div className="dropdown">
                        <button className="dropbtn">Выпадающее меню
                            {/*<i className="fa-caret-down"></i>*/}
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <UserList users={this.state.users} />
                </div>

                <div className="footer">
                    <p>&copy; 2021 Mikhail Zaika</p>
                </div>
            </body>
        )
    }
}


export default App;
