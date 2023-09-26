import React,{ useState } from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


const Navbar = () => {
    // const [isSearchVisible, setSearchVisible] = useState(false);
    // const toggleSearch = () => {
    //     setSearchVisible(!isSearchVisible);
    // };

    return (<div className="navbar">
            <div className="navbar__user_action">
                <ul className="navbar__user_action_list">
                    <li className="navbar__user-action-item"><a href="#">Sign in</a></li>
                    <li className="navbar__user-action-item"><a href="#">Contact us</a></li>
                    <li className="navbar__user-action-item"><a href="#">Help</a></li>
                    <li className="navbar__user-action-item"><a href="#"><AccountCircleOutlinedIcon
                        className="navbar__user-action-item-icon"/>My account</a></li>
                </ul>
            </div>

            <div className="navbar__search inner-container">
                <div className="navbar__logo">
                    <span className="navbar__logo-text">Shop<span>&</span>Save</span>
                </div>
                <div className="navbar__search-box">
                    <div className="navbar__search-box-container">
                        <input className="form-control navbar__search-box-input"
                               type="text"
                               placeholder="Search"/>
                    </div>
                    <button type="button"
                            className="btn navbar__search-box-icon">
                        <SearchOutlinedIcon/>
                    </button>



                </div>
            </div>
        </div>)
}

export default Navbar;