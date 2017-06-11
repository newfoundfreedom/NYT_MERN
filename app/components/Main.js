// Require Dependencies
const React = require('react'),
    Search = require('./children/Search.js'),
    Results = require('./children/Results.js'),
    Articles = require('./children/Articles.js');

// Create the Main component
const Main = React.createClass({
    // Render it when called on byt app.js
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="jumbotron text-center">
                        <h1>New York Times Article Scrubber</h1>
                        <h2>Search for and annotate articles of interest!</h2>
                    </div>
                </div>

                <div className="row">
                    <Search/>
                </div>

                <div className="row">
                    <Results/>
                </div>

                <div className="row">
                    <Articles/>
                </div>

            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Main;