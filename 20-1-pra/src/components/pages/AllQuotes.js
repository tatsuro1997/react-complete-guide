import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Max',
        test: 'Learning React is fun!'
    },
    {
        id: 'q2',
        author: 'Maximilian',
        test: 'Learning React is great!!!'
    },
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;
