// Require Dependencies
const axios = require("axios");

// NYT API
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";


// These variables will hold the results we get from the user's inputs via HTML
// var searchTerm = "";
// var numResults = 0;
// var startYear = 0;
// var endYear = 0;

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
let queryURLBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=`;

// Counter to keep track of article numbers as they come in
// var articleCounter = 0;




// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {

    console.log(location);

    // Figure out the geolocation
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
