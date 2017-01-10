var React = require('react');

var MovieDetail = function(props){
  if(!props.movie) {
    return <h3>Pick a Keanu Reeves Movie</h3>
  }
  return (
    <div className='movie-detail'>
    <h3>{props.movie.show_title}</h3>
    <p>
    Category: {props.movie.category}<br/>
    Year: {props.movie.release_year} --- Rating: {props.movie.rating}<br/>
    Summary: {props.movie.summary}
    </p>
    <img src={props.movie.poster}/>
    </div>
    );
};

module.exports = MovieDetail;