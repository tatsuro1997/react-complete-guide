import React from "react";

const MyParagraph = (props) => {
    console.log('DEMO OUTPUT MyParagraph')
    return <p>{props.children}</p>
};

export default MyParagraph;
