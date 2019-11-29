
import React from 'react';
import SnowIcon from '@material-ui/icons/AcUnitOutlined';

import './NotMobile.css';

const NotMobile = () => {
    return(
        <div className="not-mobile-container">
            <div className="icon-container">
                <SnowIcon className="nav-icon-snow" />
            </div>
            <div className="title">
                현재 바른눈덩이 서비스는<br />
                <span className="bold">모바일만</span> 지원하고 있어요
            </div>
        </div>
    )
}

export default NotMobile;