import './App.css';
import './css/dropdown.css';
import React from 'react';
import axios from 'axios'
import {Route, Link, Switch, BrowserRouter} from 'react-router-dom'
import UserList from "./components/users";
import Footer from "./components/footer";
import Menu from "./components/menu";
import ProjectList from "./components/projects";
import TodoList from "./components/todo";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todo': [],
        }
    }

    componentDidMount() {
        const url = 'http://127.0.0.1:8000/api'
        axios.get(`${url}/user`)
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))

        axios.get(`${url}/project`)
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get(`${url}/todo`)
            .then(response => {
                const todo = response.data
                this.setState(
                    {
                        'todo': todo
                    }
                )
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <body>
            <BrowserRouter>
                <Menu/>

                <div className="content">
                    {/*<UserList users={this.state.users} />*/}
                    {/*<ProjectList projects={this.state.projects} />*/}
                    {/*<TodoList todos={this.state.todo} />*/}

                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users} />} />
                        <Route exact path='/user' component={() => <UserList users={this.state.users} />} />
                        <Route exact path='/project' component={() => <ProjectList projects={this.state.projects} />} />
                        <Route exact path='/todo' component={() => <TodoList todos={this.state.todo} />} />
                    </Switch>
                </div>

                <Footer/>
            </BrowserRouter>
            </body>
        )
    }
}


export default App;
