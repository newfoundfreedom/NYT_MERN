// Require Dependencies
const React = require('react');

// Create the Main component
const Search = React.createClass({

    // Set a generic set of states for Search panel
    getInitialState: function () {
        return {
            searchTerm: "",
            startYear: "1900",
            endYear: "2017",
            // results: "",
            // savedArticles: []
        }
    },

    // This function will respond to the user input
    handleChange: function(event) {
        console.log('event', event);
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    // Render it when called on by app.js
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center"><strong>
                                Search Parameters</strong></h3>
                        </div>
                        <div className="panel-body">
                            <form>

                                <div className="form-group">
                                    <label>Search Term:</label>
                                    <input type="text"
                                           value={this.state.searchTerm}
                                           className="form-control"
                                           id="searchTerm"
                                           onChange={this.handleChange}
                                           required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Start Year (Optional):</label>
                                    <input type="number"
                                           value={this.state.startYear}
                                           className="form-control"
                                           id="startYear"
                                           onChange={this.handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>End Year (Optional):</label>
                                    <input type="number"
                                           value={this.state.endYear}
                                           className="form-control"
                                           id="endYear"
                                           onChange={this.handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-default" id="run-search"><span className="fa fa-search"/> Search</button>
                                <button type="button" className="btn btn-default" id="clear-all"><span className="fa fa-trash"/> Clear Results</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

// Export the component back for use in other files
module.exports = Search;