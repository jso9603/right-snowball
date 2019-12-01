/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './LabelFooter.css';

const LabelFooter = () => {
    return(
        <div className="footer-container">
            <span>팀 빅걸스 💪😎</span>
            <div>
                <span className="footer-link">About us</span>
                <span className="footer-link">Contact</span>
            </div>
        </div>
    )
}

export default LabelFooter;