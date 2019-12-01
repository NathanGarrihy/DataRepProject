import React from 'react';
import '../App.css';
import axios from 'axios';

class Add extends React.Component {

constructor(props){
  super(props);

  this.state = { Name:'',
                  Age:'',
                  Sample:'',
                  Image:'',
                  Imdb:''};

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleMovieStarNameChange = this.handleMovieStarNameChange.bind(this);
  this.handleMovieStarAgeChange = this.handleMovieStarAgeChange.bind(this);
  this.handleMovieStarSampleChange = this.handleMovieStarSampleChange.bind(this);
  this.handleMovieStarImageChange = this.handleMovieStarImageChange.bind(this);
  this.handleMovieStarImdbChange = this.handleMovieStarImdbChange.bind(this);
}

handleMovieStarNameChange(e){
  this.setState({Name: e.target.value});
}

handleMovieStarAgeChange(e){
  this.setState({Age: e.target.value});
}

handleMovieStarSampleChange(e){
  this.setState({Sample: e.target.value});
}

handleMovieStarImageChange(e){
  this.setState({Image: e.target.value});
}

handleMovieStarImdbChange(e){
  this.setState({Imdb: e.target.value});
}

handleSubmit(e){
   e.preventDefault();

   const movieStarObject = {
     name: this.state.Name,
     age: this.state.Age,
     sample: this.state.Sample,
     image: this.state.Image,
     imdb: this.state.Imdb
   }

   axios.post('http://localhost:4000/api/moviestars/', movieStarObject)
   .then()
   .catch();

   this.setState({Name:'',
                  Age: '',
                  Sample:'',
                  Image:'',
                  Imdb: ''});

    alert(movieStarObject.name + ' has been added to the list of Movie Stars!');
}

  render() {
    return (
      <div className="form-group">
        <img width="150" src="http://knttraining.co.uk/wp-content/uploads/2018/11/how-to-add-a-png-to-a-photo.png" alt="Unable to load"/>
        <form onSubmit={this.handleSubmit}>
        <label>Movie Star Name</label>
        <div className='form-group'>
          <input
          type='text'
          className='App-form'
          value={this.state.Name}
          onChange={this.handleMovieStarNameChange}>
          </input>
        </div>
        <label>Movie Star Age</label>
        <div className='form-group'>
          <input
          type='text'
          className='App-form'
          value={this.state.Age}
          onChange={this.handleMovieStarAgeChange}>
          </input>
        </div>
        <label>Name of movie(s) star has appeared in</label>
        <div className='form-group'>
          <input
          type='text'
          className='App-form'
          value={this.state.Sample}
          onChange={this.handleMovieStarSampleChange}>
          </input>
        </div>
        <label>Picture of Movie Star</label>
        <div className='form-group'>
          <textarea
          row='3'
          className='App-form'
          value={this.state.Image}
          onChange={this.handleMovieStarImageChange}>
          </textarea>
        </div>
        <label>IMDB page (if exists)</label>
        <div className='form-group'>
          <input
          type='text'
          className='App-form'
          value={this.state.Imdb}
          onChange={this.handleMovieStarImdbChange}>
          </input>
        </div>
        <div>
          <input
          type="submit"
          value="Add Movie Star">
          </input>
        </div>
        </form>
        <br></br><br></br><br></br><br></br>
        <p>© UCMS(Ultimate collection of movie stars)</p>
        <br></br>
      </div>
    );
  }
}

export default Add;