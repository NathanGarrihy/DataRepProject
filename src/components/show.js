import React from 'react';
import MovieStars from './movieStars';
import axios from 'axios';
import '../App.css';

class Show extends React.Component {

  state = {
    movieStars: []
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/movieStars')
    .then((response)=>{
      this.setState({movieStars: response.data.movieStars})
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render() {
    return (
      <div className="AppAlt">
        <MovieStars myMovieStars= {this.state.movieStars}></MovieStars>
      </div>
    );
  }
}

export default Show;