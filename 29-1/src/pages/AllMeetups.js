import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Test',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Coat_types_3.jpg/1920px-Coat_types_3.jpg',
        address: 'Test 4, 1234 City',
        description: 'Test Test Test'
    },
    {
        id: 'm2',
        title: 'Test2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Coat_types_3.jpg/1920px-Coat_types_3.jpg',
        address: 'Test 22, 1234 City',
        description: 'Test2 Test2 Test2'
    }
]

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                <MeetupList meetups={DUMMY_DATA} />
            </ul>
        </section>
    );
}

export default AllMeetupsPage;
