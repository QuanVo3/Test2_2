import React from 'react';

const GLink = (sLinks,type) => {
    return (
        <div>
            <h1>Your link is {sLinks.data.result.type}</h1>
        </div>
    );
};

export default GLink;