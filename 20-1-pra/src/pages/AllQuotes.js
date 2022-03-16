import { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import NoQuoesFound from '../components/quotes/NoQuotesFound';
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(
        getAllQuotes,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centerd">
                <LoadingSpinner />;
            </div>
        );
    }

    if (error) {
        return <p className="centered focused">{error}</p>;
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuoesFound />;
    }


    return <QuoteList quotes={loadedQuotes} />
};

export default AllQuotes;
