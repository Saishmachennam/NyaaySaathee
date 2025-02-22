import React from 'react';

const ActsListItem = ({ act }) => {
    if (!act) {
        return <p>Error: Act details not found.</p>; // Prevents the destructuring error
    }

    const { name, year, abbreviation, description } = act; // Now safe to destructure

    return (
        <li className="act-item">
            <h3>{name} ({year})</h3>
            <p><strong>Abbreviation:</strong> {abbreviation}</p>
            <p>{description}</p>
        </li>
    );
};

export default ActsListItem;
