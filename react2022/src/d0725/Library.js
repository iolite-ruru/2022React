import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="AA" numOfPage={100} />
            <Book name="BB" numOfPage={200} />
            <Book name="CC" numOfPage={300} />
        </div>
    );
}
export default Library;