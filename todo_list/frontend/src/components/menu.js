import '../App.css';

import {HashRouter, Route, Link} from 'react-router-dom'
import React from "react";

 const Menu = (app) => {
// class Menu extends React.Component {
//
//     render() {
        return (
            <div className="navbar">
                <Link to='/'>Главная</Link>

                <Link to='/user'>Пользователи</Link>
                <Link to='/project'>Проекты</Link>
                <Link to='/todo'>Заметки</Link>
                {app.app.is_auth() ? <Link to='/logout'>Выйти</Link> : <Link to='/login'>Авторизация</Link>}

                {/*<div className="dropdown">*/}
                {/*    <button className="dropbtn">Выпадающее меню*/}
                {/*        /!*<i className="fa-caret-down"></i>*!/*/}
                {/*    </button>*/}
                {/*    <div className="dropdown-content">*/}
                {/*        <Link to='/user'>Пользователи</Link>*/}
                {/*        <Link to='/project'>Проекты</Link>*/}
                {/*        <Link to='/todo'>Заметки</Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    //}
}

export default Menu
