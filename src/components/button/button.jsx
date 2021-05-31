import React from 'react';

export default function Button({status}) {
    return (
        <button
            onClick={(event) => {
                event.preventDefault();
                status();
            }}
        >
       
        </button>

    )


}