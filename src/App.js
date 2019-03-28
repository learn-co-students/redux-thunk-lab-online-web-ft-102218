import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import cats from './actions/catActions';
import CatList from './CatList';

class App extends Component {

  componentDidMount() {
    this.props.cats();
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

const mapDispatchToProps = dispatch => ({
  cats: () => dispatch(cats())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);