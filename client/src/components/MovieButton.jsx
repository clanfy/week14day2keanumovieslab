var React = require('react');

var MovieButton = function(props){

  return (
    <div className='movie-button'>
    <button className='btn-movie'
    onClick={props.handleClick}> Random Keanu Movie! >></button>
    </div>
    )

};


module.exports = MovieButton;