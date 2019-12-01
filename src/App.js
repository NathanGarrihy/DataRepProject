import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home';
import Show from './components/show';
import Add from './components/add';
import Edit from './components/edit';

class App extends React.Component {
  render() {
  return (
   <BrowserRouter>
    <div className="App">
      <Navbar bg="dark" variant = "dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/show">Show</Nav.Link>
          <Nav.Link href="/add">Add</Nav.Link>
        </Nav>
      </Navbar>
      
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/show" component={Show} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>

    </div>
   </BrowserRouter>
  );
}
}

export default App;