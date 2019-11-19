import React from 'react';
import '../App.css';
import axios from 'axios';

class Add extends React.Component {

constructor(props){
  super(props);

  this.state = { Name:'',
                  Age:'',
                  Sample:'',
                  Image:''};
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleMovieStarNameChange = this.handleMovieStarNameChange.bind(this);
  this.handleMovieStarAgeChange = this.handleMovieStarAgeChange.bind(this);
  this.handleMovieStarSampleChange = this.handleMovieStarSampleChange.bind(this);
  this.handleMovieStarImageChange = this.handleMovieStarImageChange.bind(this);
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

handleSubmit(e){
  // DEBUG alert(this.state.Title+ "      " + this.state.Year 
   // +"       "+ this.state.Poster);
   e.preventDefault();

   const movieStarObject = {
     name: this.state.Name,
     age: this.state.Age,
     sample: this.state.Sample,
     image: this.state.Image
   }

   axios.post('http://localhost:4000/api/DataRepAssignment/', movieStarObject)
   .then()
   .catch();

   this.setState({Name:'',
                  Age: '',
                  Sample:'',
                  Image:'' });
}

  render() {
    return (
      <div>
        <h1>Hello World from add</h1>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Movie Star Name</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Name}
          onChange={this.handleMovieStarNameChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Movie Star Age</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Age}
          onChange={this.handleMovieStarAgeChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Name of movie star has appeared in</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Sample}
          onChange={this.handleMovieStarSampleChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Picture of Movie Star</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Image}
          onChange={this.handleMovieStarImageChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Add Movie Star">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default Add;