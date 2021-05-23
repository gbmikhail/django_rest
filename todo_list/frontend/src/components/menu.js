import '../App.css';

const Menu = () => {
   return (
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
   )
}


export default Menu
