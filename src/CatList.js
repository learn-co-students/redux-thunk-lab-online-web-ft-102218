import React, { Component } from 'react';

class CatList extends Component {
  render() {
    const catPics = this.props.catPics.map((cat, id) => {return <span key={id}><img src={cat.url}></img></span>});
    return(
      <React.Fragment>
        {catPics}
      </React.Fragment>
    );
  };
};

export default CatList;