import React from 'react';
import './Loader.css';

export const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
        </div>
    );
};
