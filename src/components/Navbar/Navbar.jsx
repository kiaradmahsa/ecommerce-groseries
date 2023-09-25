import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar__user_action">
                <ul className="navbar__user_action_list">
                    <li className="navbar__user-action-item"><a href="#">Sign in</a></li>
                    <li className="navbar__user-action-item"><a href="#">Contact us</a></li>
                    <li className="navbar__user-action-item"><a href="#">Help</a></li>
                    <li className="navbar__user-action-item"><a href="#"><AccountCircleOutlinedIcon className="navbar__user-action-item-icon"/>My account</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;