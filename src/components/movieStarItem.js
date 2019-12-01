import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom';

class MovieStarItem extends React.Component{
    constructor(){
        super();
        this.deleteMovieStar = this.deleteMovieStar.bind(this);
    }

    deleteMovieStar(e) {
        //console.log("Delete button clicked");

        axios.delete('http://localhost:4000/api/moviestars/'+ this.props.movieStar._id)
        .then( alert("Movie star has been deleted, please refresh the page to complete."))
        .catch();

    }

    render(){
        return(
                <div>   
                <Card bg="dark" border="primary" style={{width: '50rem'}}>
                <a  className="App" href= {this.props.movieStar.imdb}>
                <Card.Header>{this.props.movieStar.name}</Card.Header>
                <Card.Body>
                    <blockquote className="blackquote mb-10">
                    <img width="400" height="400" src={this.props.movieStar.image} alt="Unable to load"></img>
                    <footer>
                    age: {this.props.movieStar.age}
                    </footer>
                    </blockquote>
                    <p>known for: {this.props.movieStar.sample}</p>
                </Card.Body>
                </a>
                <Link className="ButtonLink" to={"/edit/"+this.props.movieStar._id} className="btn btn-primary">Edit</Link> 
                <Button variant="outline-danger" onClick={this.deleteMovieStar}>Delete</Button>
            </Card>
            </div>
        )
    }
}
export default MovieStarItem;