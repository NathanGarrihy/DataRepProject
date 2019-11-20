import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MovieStarItem extends React.Component{

    constructor(){
        super();
        this.deleteMovieStar = this.deleteMovieStar.bind(this);
    }

    deleteMovieStar(e) {
        console.log("Delete button clicked");

        axios.delete('http://localhost:4000/api/moviestars/'+ this.props.movieStar._id)
        .then()
        .catch();
    }

    render(){
        return(
            <div>
                 {/* <h4>{this.props.movieStar.Name}</h4>
                <p>{this.props.movieStar.Age}</p>
                <p>{this.props.movieStar.Sample}</p>
                <img src={this.props.movieStar.Image}></img> */}
            <Card border="dark" style={{width: '30rem'}}>
                <Card.Header>{this.props.movieStar.name}</Card.Header>
                <Card.Body>
                    <blockquote className="blackquote mb-10">
                    <img width="400" height="400" src={this.props.movieStar.image}></img>
                    <footer>
                    age: {this.props.movieStar.age}
                    </footer>
                    </blockquote>
                    <p>known for: {this.props.movieStar.sample}</p>
                </Card.Body>
                <Button variant="danger" onClick={this.deleteMovieStar} >Delete</Button>
                <Link to={"/edit/"+this.props.movieStar._id} className="btn btn-primary">Edit</Link> 
            </Card>
            </div>
        )
    }
}
export default MovieStarItem;