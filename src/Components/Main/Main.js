import useVolunteer from '../../hooks/useVolunteer';
import Activities from '../Activities/Activities';

const Main = () => {
    const [volunteer, setVolunteer] = useVolunteer();
    return (
        <div>
            {
                volunteer.map(activity => <Activities
                    key={activity._id}
                    activity={activity}
                ></Activities>)
            }
        </div>
    );
};

export default Main;