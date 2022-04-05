import React from 'react';
import './Activities.css';

const Activities = ({ activity }) => {
    // console.log(activity);
    const { title, img } = activity;
    return (
        <div className='result-container'>
            <h2>{title}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Activities;