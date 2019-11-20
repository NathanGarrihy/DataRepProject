import React from 'react';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to the ultimate collection of Movie Stars!</h1>
        <h2>Feel free to update our collection where appropriate</h2>
        <img width="800" src="https://pmcvariety.files.wordpress.com/2018/06/oscars-placeholder.jpg?w=1000"></img>
        <h2>Time is {new Date().toLocaleTimeString()}.</h2>
        <h2>Date is {new Date().toLocaleDateString()}.</h2>
      </div>
    );
  }
}

export default Home;