import React from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activities from '../Activities/Activities';
import './Volunteer.css';

const Volunteer = () => {
    const [volunteer, setVolunteer] = useVolunteer();
    return (
        <div>
            <h1>Volunteer Container</h1>
            <div className='volunteer-container'>
                {
                    volunteer.map(activity => <Activities
                        key={activity._id}
                        activity={activity}
                    ></Activities>)
                }
            </div>
        </div>
    );
};

export default Volunteer;