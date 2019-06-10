import React from 'react'

const CatList = (props) => <ul>{props.catPics.map(catPic => <li><img src={catPic.url} /></li>)}</ul>

CatList.defaultProps = {
    catPics: []
}

export default CatList