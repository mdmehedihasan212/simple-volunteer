import React, { useEffect, useState } from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activities from '../Activities/Activities';
import './Volunteer.css';

const Volunteer = () => {
    // const [volunteer] = useVolunteer();
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        console.log('ki khoju monu');
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText))
                setSearchResult(match)
            })
    }, [searchText])

    const handleToSearch = event => {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <h1>Volunteer Container</h1>
            <div className="input-field">
                <input onChange={handleToSearch} type="search" name="" id="" placeholder='search' />
            </div>
            <div className='volunteer-container'>
                {
                    searchResult.map(activity => <Activities
                        key={activity._id}
                        activity={activity}
                    ></Activities>)
                }
            </div>
        </div>
    );
};

export default Volunteer;