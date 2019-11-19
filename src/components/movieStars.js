import React from 'react';
import MovieStarItem from './movieStarItem';

class MovieStars extends React.Component {

    render() {
        return this.props.myMovieStars.map((movieStar)=>{
           // console.log({movieStar});
            return<MovieStarItem key={movieStar.Poster} movieStar= {movieStar}></MovieStarItem>
        });
    }
}
export default MovieStars;