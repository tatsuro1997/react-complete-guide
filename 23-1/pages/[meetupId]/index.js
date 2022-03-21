import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/2560px-Munchen_collage.jpg'
            title='A First Meetup'
            address='Some Street 5, Some City'
            description='The meetup description'
         />
    );
};

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Munchen_collage.jpg/2560px-Munchen_collage.jpg',
                id: meetupId,
                title: 'A First Meetup',
                address: 'Some Street 5, Some City',
                description: 'The meetup description',
            }
        }
    }

}

export default MeetupDetails;
