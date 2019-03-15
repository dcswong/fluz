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
            <a href={"/articles/" + post.id}>
              <RatioWrapper ratio="60%" className="ratiowrapper" minHeight="500px">
                {/*Imageframe*/}
                {post.sections[0].medias.length > 0 && <div  className="grid3-image" style={{
                  backgroundImage: 'url(' + (post.sections[0].medias[0] || {}).url + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>}
              </RatioWrapper>
              <p className="title-text">{post.sections[0].title}</p>
              <b className="category-text">{post.tags.length > 0 ? post.tags.join(' ') + ' | ' + post.time.split('T').shift() : post.time.split('T').shift()}</b>
            </a>
          </div>
        ))}
      </div>
    )
  }

}
export default Grid3
