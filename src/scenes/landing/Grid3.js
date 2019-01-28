import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import RatioWrapper from '../../common/ratiowrapper';

class Grid3 extends Component {

  render() {

    var posts = this.props.posts;

    return (
      <div id="grid3-wrapper">
        {posts.map((post, i) => (
          <div className="image-grid col-md-4" key={i}>
            <a href="/">
              <RatioWrapper ratio="100%" className="ratiowrapper">
                {/*Imageframe*/}
                <img className="image" src={post.image}/>
                <p className="title-text">{post.title}</p>
                <b className="category-text">{post.category} | {post.date}</b>
              </RatioWrapper>
            </a>
          </div>
        ))}
      </div>
    )
  }

}
export default Grid3
