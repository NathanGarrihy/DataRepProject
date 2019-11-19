import React from 'react';
import MovieStars from './movieStars';
import axios from 'axios';

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
      <div>
        <h1>Hello from Show</h1>
        <MovieStars myMovieStars= {this.state.movieStars}></MovieStars>
      </div>
    );
  }
}

export default Show;