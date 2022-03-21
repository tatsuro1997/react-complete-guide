import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/2560px-Munchen_collage.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/2560px-Munchen_collage.jpg',
        address: 'Some address 1, 54321 Some City',
        description: 'This is a Second meetup'
    },
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        }
    };
}

export default HomePage;
