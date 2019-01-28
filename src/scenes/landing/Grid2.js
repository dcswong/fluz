import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import RatioWrapper from '../../common/ratiowrapper';

class Grid2 extends Component {

  render() {

    var details = this.props.details;

    return (
      <div id="grid2-wrapper">
        {details.map((detail, i) => (
          <a href="/">
            <div className="image-grid" key={i}>
              <img className="grid2-image" src={detail.image}/>
              <p className="title-text">{detail.title}</p>
              <b className="category-text">{detail.category} | {detail.date}</b>
            </div>
          </a>
        ))}
      </div>
    )
  }

}
export default Grid2

Grid2.defaultProps = {
  details: [
    {
      title: 'Cinephiles: Gloves Glove Scenes for a Gripping New YEar with Balenciaga, MSGM & Gucci',
      image: '../../assets/imgs/grid2-1.png',
      category: 'Fashion',
      date: 'Dec 17',
    },
    {
      title: 'The Dawn of a New History: Shushu/Tong Writer Yoshiko Kurata and Photographer Lorenzo Dalbosco Travel to China to meet the Designers behind one of Shanghai Most Exciting New Brands',
      image: '../../assets/imgs/grid2-2.png',
      category: 'Fashion',
      date: 'Dec 17',
    }
  ]
}
