import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
    };

    return <QuoteForm onAddQoute={addQuoteHandler} />;
};

export default NewQuote;
