import React from 'react';
import { useHistory } from 'react-router';
import "./Header.scss";

const Header = () => {
    const history = useHistory();

    return (
        <div>
            <div className="header">
                <p onClick={() => history.push("/")}>Technical Test</p>
            </div>
        </div>
    )
}

export default Header;
