var React = require('react');

var MovieSelector = React.createClass({

  getInitialState: function(){
    return { selectedIndex: undefined };
  },

  handleChange: function(event){
    event.preventDefault();
    var newIndex = parseInt(event.target.value)
    this.setState({selectedIndex: newIndex})
    var movie = this.props.movies[newIndex]
    this.props.selectMovie(movie);
  },

  render: function (){
    var options = this.props.movies.map(function(movie, index){
      return (<option value={index} key={index}> {movie.show_title} </option>)
    });
    return (
      <select id="movies" 
      value={this.state.selectedIndex} 
      onChange={this.handleChange}>
      <option>Select a righteous movie! </option>
        {options}
      </select>
      );
  }



});

module.exports = MovieSelector;