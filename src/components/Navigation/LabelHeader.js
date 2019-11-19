import React from 'react';
import {NavLink} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import SnowIcon from '@material-ui/icons/AcUnitOutlined';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import NavRouteData from './NavRouteData';
import './LabelHeader.css';

export default function LabelHeader() {
    const [state, setState] = React.useState({
        showNav: false,
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, showNav : open });
    };


  const nav = () => (
    <div
      className="nav-container"
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
        <CloseIcon className="nav-icon-close" onClick={toggleDrawer(false)} />
        <div className="nav-button-container">
            <div className="nav-menus">
                {NavRouteData.map((value) => (
                    <NavLink to={`/${value.routeName}`} key={value}>
                        <div className="menu-button">{value.text}</div>
                    </NavLink>
                ))}
            </div>
            <hr />
            <div className="nav-accounts">
                <div className="account-button">로그인</div>
                <div className="account-button">회원가입</div>
            </div>
        </div>
        <div className="nav-footer">
            <SnowIcon className="nav-icon-snow" />
            <div className="nav-logo-title">바른 눈덩이</div>
        </div>
    </div>
  );

    return (
        <div className="header-container">
            <div onClick={toggleDrawer(true)}><MenuIcon className="header-icon-menu" /></div>
            <div>
                <NavLink to="/Main">
                    <SnowIcon className="header-icon-logo" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/Search">
                    <SearchIcon className="header-icon-search" />
                </NavLink>
            </div>
            <Drawer open={state.showNav} onClose={toggleDrawer(false)}>
                {nav('left')}
            </Drawer>
        </div>
    )
}