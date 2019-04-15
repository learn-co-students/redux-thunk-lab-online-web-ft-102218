import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./actions/catActions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.cats.pictures} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cats: state.cats };
}

function mapDispatchToProps(dispatch) {
  return { fetchCats: () => dispatch(fetchCats()) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// ./src/actions/fetchCats.js
//export function fetchCats() {
//const cats = fetch("http://localhost:4000/db");
//return {
//type: "FETCH_CATS",
//cats
//  };
//}
