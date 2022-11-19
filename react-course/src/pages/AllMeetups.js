import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch(
            "https://react-getting-started-71ea1-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetupsData = [];

                for (const key in data) {
                    const meetups = {
                        id: key,
                        ...data[key],
                    };

                    meetupsData.push(meetups);
                }
                setIsLoading(false);
                setLoadedMeetups(meetupsData);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                <MeetupList meetups={loadedMeetups} />
            </ul>
        </section>
    );
}

export default AllMeetupsPage;
