import React, {useState} from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


const Navbar = () => {

    return (<div className="navbar">
        <div className="navbar__user_action">
            <ul className="navbar__user_action_list">
                <li className="navbar__user-action-item"><a href="#">Sign in</a></li>
                <li className="navbar__user-action-item"><a href="#">Contact us</a></li>
                <li className="navbar__user-action-item"><a href="#">Help</a></li>
                <li className="navbar__user-action-item"><a href="#" className="navbar__user-action-item-icon">
                    <AccountCircleOutlinedIcon/>My account</a></li>
            </ul>
        </div>

        <div className="navbar__search inner-container">
            <div className="navbar__logo">
                <span className="navbar__logo-text">Shop<span>&</span>Save</span>
            </div>
            <div className="navbar__search-box">
                <input className="form-control navbar__search-box-input"
                       type="text"
                       placeholder="Search"/>
                <button className="navbar__search-box-btn">
                    Search
                </button>
            </div>
            <div className="navbar__search-box-icon-container">
                <a href="#" className="navbar__search-box-icon">
                    <AccountCircleOutlinedIcon/>
                </a>
                <button type="button"
                        className="btn navbar__search-box-icon">
                    <SearchOutlinedIcon/>
                </button>
            </div>
        </div>
    </div>)
}

export default Navbar;