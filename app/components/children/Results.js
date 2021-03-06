// Require Dependencies
const React = require('react');

// Create the Main component
const Results = React.createClass({

    // Set a generic set of states for Results
    // getInitialState: function () {
    //     return {
    //         searchTerm: "",
    //         startYear: "",
    //         endYear: "",
    //         results: "",
    //         savedArticles: []
    //     };
    // },


    // Render it when called on by app.js
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">Results</h3>
                        </div>
                        <div className="panel-body text-center">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Results;



