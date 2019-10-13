import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SnowIcon from '@material-ui/icons/AcUnitOutlined';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
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
    //   onKeyDown={toggleDrawer(false)}
    >
        <CloseIcon className="nav-icon-close" onClick={toggleDrawer(false)} />
        <div className="nav-button-container">
            <List>
                {['나의눈덩이', '공지사항', '고객센터'].map((text, index) => (
                    <ListItem button key={text} onClick={() => console.log(text)}>
                        <ListItemText className="nav-button-text" primary={text} />
                    </ListItem>
                ))}
            </List>
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
            <div><SnowIcon className="header-icon-logo" /></div>
            <div><SearchIcon className="header-icon-search" /></div>
            <Drawer open={state.showNav} onClose={toggleDrawer(false)}>
                {nav('left')}
            </Drawer>
        </div>
    )
}