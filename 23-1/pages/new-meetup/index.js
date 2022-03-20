import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage(params) {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
