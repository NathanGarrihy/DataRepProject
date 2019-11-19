import React from 'react';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to the ultimate collection of Movie Stars!</h1>
        <h2>Feel free to update our collection where appropriate</h2>
        <img width="1000" src="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/gettyimages-465350219_0.jpg"></img>
        <h2>Time is {new Date().toLocaleTimeString()}.</h2>
        <h2>Date is {new Date().toLocaleDateString()}.</h2>
      </div>
    );
  }
}

export default Home;