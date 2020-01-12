/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './LabelFooter.css';

const LabelFooter = () => {
    return(
        <div className="footer-container">
            <span>팀 빅걸스 💪😎</span>
            <div>
                <span className="footer-link" onClick={() => this.props}>About us</span>
                <a className="footer-link" href="mailto:verybiggirls@gmail.com">Contact</a>
            </div>
        </div>
    )
}

export default LabelFooter;