import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header" >
            <Link to="/" >Главная</Link>
            <Link to="/feedback" >Связаться</Link>
            <Link to="/contacts" >Контакты</Link>
            <Link to="/cemetery" >Бронь</Link>
        </div>
    )
}

export default Header;