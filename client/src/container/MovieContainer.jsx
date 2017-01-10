var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetail = require('../components/MovieDetail');
var MovieButton = require('../components/MovieButton');

var MovieContainer = React.createClass({
  getInitialState: function() {
    return {
      movies: [],
      focusMovie: null
    };
  },

  componentDidMount: function() {
    var url = "http://netflixroulette.net/api/api.php?actor=Keanu%20Reeves";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({movies: data});
    }.bind(this);
    request.send(null);
  },

  handleClick: function(){
    console.log("Bill and Ted's Excellent Adventures");
  },

  render: function() {
    return (
      <div className='kontainer'>
        <h2>Keanu Reeves Kontainer</h2>
        <MovieSelector
        movies={this.state.movies}
        selectMovie={this.setFocusMovie}
        />
        <MovieDetail movie={this.state.focusMovie}/>
        <MovieButton handleClick={this.handleClick}/>
      </div>
      );
  },

  setFocusMovie: function(movie) {
    this.setState({focusMovie: movie})
  }
});

module.exports = MovieContainer;