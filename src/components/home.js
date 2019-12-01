import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <h1><b>Welcome to the ultimate collection of Movie Stars!</b></h1>
        <h2 href="/edit">Feel free to update our collection where appropriate</h2>
        <Card bg="dark">
          <Card-Item>
        <Carousel>
          
  <Carousel.Item>
    <a href="https://oscar.go.com/">
    <img
      width="800" height="400"
      src="https://pmcvariety.files.wordpress.com/2018/06/oscars-placeholder.jpg?w=1000"
      alt="First slide"/>
    </a>
    <Carousel.Caption>
      <h3>Oscar trophy</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://www.imdb.com/title/tt0119217/">
    <img
      width="800" height="400"
      src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1069,w_1900,x_0,y_104/f_auto,q_auto,w_1100/v1554993984/shape/mentalfloss/good_will_hed.jpg"
      alt="Second slide"/>
    </a>
    <Carousel.Caption>
      <h3>Ben Affleck and Matt Damon in Good Will Hunting</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <a href="https://www.imdb.com/name/nm0000375/">
    <img
      width="800" height="400"
      src="https://media.vanityfair.com/photos/552b3cb916d0331d2b4d4420/16:9/w_2560%2Cc_limit/robert-downey-jr-mtv-movie-awards.png"
      alt="Third slide"/>
    </a>
    <Carousel.Caption>
      <h3>Robert Downey Jr. at the MTV Movie Awards</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <a href="https://www.imdb.com/name/nm0000113/">
    <img
      width="800" height="400"
      src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F12%2FMV5BMTZlNDBlNTEtZDYzOS00YzI2LTg0MDktYjE2MTllYzVlMjYyXkEyXkFqcGdeQXVyMjQ3NDc5MzY%40._V1_SX1777_CR001777888_AL_-1200x675.jpg"
      alt="Fourth slide"/>
    </a>
    <Carousel.Caption>
      <h3>Sandra Bullock in Birdbox</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://www.imdb.com/name/nm0001191/">
    <img
      width="800" height="400"
      src="https://usatftw.files.wordpress.com/2016/02/150305-news-happy-gilmore-barker-sandler.jpg?w=1000&h=600&crop=1"
      alt="Fifth slide"/>
  </a>
    <Carousel.Caption>
      <h3>Adam Sandler in Happy Gilmore</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="https://www.imdb.com/name/nm0001618/">
    <img
      width="800" height="400"
      src="https://i.ytimg.com/vi/dNjYNffQeks/maxresdefault.jpg"
      alt="Sixth slide"/>
      </a>
    <Carousel.Caption>
      <h3>Joaquin Phoenix as Joker</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Card-Item>
</Card>

<br></br>
        <h2>Time is {new Date().toLocaleTimeString()}.</h2>
        <h2>Date is {new Date().toLocaleDateString()}.</h2>
        <br></br>
        <p>© UCMS(Ultimate collection of movie stars)</p>
        <br></br>
      </div>
    );
  }
}

export default Home;