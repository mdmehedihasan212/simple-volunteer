import { useState } from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activities from '../Activities/Activities';
import './Main.css';

const Main = () => {
    const [volunteer] = useVolunteer();
    const [searchResult, setSearchResult] = useState([])

    const handleToSearch = event => {
        const searchText = event.target.value;
        const match = volunteer.filter(v => v.title.includes(searchText));
        setSearchResult(match);
    }

    return (
        <div>
            <h1>Main Container</h1>
            <div className='input-container'>
                <input onChange={handleToSearch} type="search" name="" id="" placeholder='Search' />
            </div>
            <div className='main-container'>
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

export default Main;