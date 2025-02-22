import React, { Component } from 'react';
import ActsListItem from './actsListItemPage';
import './actsListPage.css';

class ActsListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '', // Search input state
            indianLaws: [
                { name: "The Indian Penal Code", year: 1860, abbreviation: "IPC", description: "Defines offenses and penalties in India." },
                { name: "The Code of Criminal Procedure", year: 1973, abbreviation: "CrPC", description: "Procedural law for criminal cases in India." },
                { name: "The Transfer of Property Act", year: 1882, abbreviation: "TPA", description: "Regulates property transfers in India." },
                { name: "The Registration Act", year: 1908, abbreviation: "RA", description: "Provides rules for document registration." },
                { name: "The Negotiable Instruments Act", year: 1881, abbreviation: "NIA", description: "Regulates promissory notes, cheques, and bills of exchange." },
            ]
        };
    }

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        const { searchQuery, indianLaws } = this.state;

        // Filter the acts based on search input
        const filteredActs = indianLaws.filter((act) =>
            act.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div className="acts-list-container">
                <h1>List of Indian Laws</h1>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search for an Act..."
                    value={searchQuery}
                    onChange={this.handleSearch}
                    className="search-bar"
                />

                {/* Filtered Acts List */}
                <ul className="acts-list">
                    {filteredActs.length > 0 ? (
                        filteredActs.map((act, index) => 
                            act ? <ActsListItem key={index} act={act} /> : null
                        )
                    ) : (
                        <p>No results found.</p> // Handles case when no match is found
                    )}
                </ul>
            </div>
        );
    }
}

export default ActsListPage;
