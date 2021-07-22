import React from 'react'
import "./Header.css"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                < Avatar className="header__avatar" alt="himanshu" />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Himanshu Arora" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
