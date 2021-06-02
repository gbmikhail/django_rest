import '../App.css';

import {HashRouter, Route, Link} from 'react-router-dom'

const Menu = () => {
   return (
        <div className="navbar">
            <Link to='/'>Главная</Link>

            <Link to='/user'>Пользователи</Link>
            <Link to='/project'>Проекты</Link>
            <Link to='/todo'>Заметки</Link>


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
}


export default Menu
