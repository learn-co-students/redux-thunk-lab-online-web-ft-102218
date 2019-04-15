import React, { Component } from "react";

class CatList extends Component {
  render() {
    let newCats = this.props.catPics.map(catPic => <img src={catPic.url} />);
    return <div>{newCats}</div>;
  }
}
CatList.defaultProps = {
  catPics: []
};

export default CatList;
