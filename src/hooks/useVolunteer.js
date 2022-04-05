import { useEffect, useState } from "react";

const useVolunteer = () => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return [volunteer, setVolunteer];
};
export default useVolunteer;