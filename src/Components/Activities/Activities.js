import React from 'react';

const Activities = ({ activity }) => {
    console.log(activity);
    const { title, img } = activity;
    return (
        <div>
            <h2>{title}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Activities;