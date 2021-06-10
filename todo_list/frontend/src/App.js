import './App.css';
import './css/dropdown.css';
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Route, Link, Switch, BrowserRouter} from 'react-router-dom'
import UserList from "./components/users";
import Footer from "./components/footer";
import Menu from "./components/menu";
import ProjectList from "./components/projects";
import TodoList from "./components/todo";
import LoginForm from "./components/Auth";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todo': [],
            'token': '',
            'login': '',
        }
    }

    create_headers() {
        if (!this.is_auth()) {
            console.log('empty', this.state.token)
            return {}
        }

        return {
            'Authorization': `Token ${this.state.token}`
        }
    }

    componentDidMount() {
        const cookies = new Cookies();

        this.setState(
            {
                'token': cookies.get('token'),
                'login': cookies.get('login'),
            })
        this.state.token = cookies.get('token')
        this.load_data()
    }

    load_data() {
        const headers = this.create_headers()
        console.log('xxxxxxxxxxxxxxx')
        console.log(headers)
        const url = 'http://127.0.0.1:8000/api'
        axios.get(`${url}/user`, {headers})
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))

        axios.get(`${url}/project`, {headers})
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get(`${url}/todo`, {headers})
            .then(response => {
                const todo = response.data
                this.setState(
                    {
                        'todo': todo
                    }
                )
            }).catch(error => console.log(error))
    }

    is_auth() {
        return this.state.token !== ''
    }

    logout() {
        this.setState(
            {
                'token': ''
            }
        )
        const cookies = new Cookies()
        cookies.set('token', '')
        cookies.set('login', '')
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                console.log(response.status, response.data)
                if (response.status === 200) {
                    const token = response.data.token
                    this.setState(
                        {
                            'token': token
                        }
                    )
                    const cookies = new Cookies()
                    cookies.set('token', token)
                    cookies.set('login', username)
                }
            }).catch(error => alert(error))
    }

    render() {
        return (
            <body>
            <BrowserRouter>
                <div className="navbar">
                    <Link to='/'>Главная</Link>

                    <Link to='/user'>Пользователи</Link>
                    <Link to='/project'>Проекты</Link>
                    <Link to='/todo'>Заметки</Link>
                    {this.is_auth() ? <Link to={this.props.myroute} onClick={()=>this.logout()}>Выйти ({this.state.login})</Link> : <Link to='/login'>Авторизация</Link>}
                </div>

                <div className="content">
                    {/*<UserList users={this.state.users} />*/}
                    {/*<ProjectList projects={this.state.projects} />*/}
                    {/*<TodoList todos={this.state.todo} />*/}

                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users} />} />
                        <Route exact path='/user' component={() => <UserList users={this.state.users} />} />
                        <Route exact path='/project' component={() => <ProjectList projects={this.state.projects} />} />
                        <Route exact path='/todo' component={() => <TodoList todos={this.state.todo} />} />
                        <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)} />} />} />
                    </Switch>
                </div>

                <Footer/>
            </BrowserRouter>
            </body>
        )
    }
}


export default App;
