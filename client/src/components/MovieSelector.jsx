var React = require('react');

var MovieSelector = React.createClass({

  getInitalState: function(){
    return { selectedIndex: undefined };
  },

  render: function (){
    var options = this.props.movies.map(function(movie, index){
      return (<option value={index} key={index}> {movie.show_title} </option>)
    });
    return (
      <select
      id="movies"
     
      onChange={this.handleChange}>
      <option>Movie Selector</option>
      {options}
      </select>
      );
  },

  handleChange: function(event){
    var newIndex = parseInt(event.target.value)
    this.setState({selectedIndex: newIndex})
    var movie = this.props.movies[newIndex]
    this.props.selectMovie(movie);
  }

});

module.exports = MovieSelector;