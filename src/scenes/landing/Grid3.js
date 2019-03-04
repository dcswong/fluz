import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import RatioWrapper from '../../common/ratiowrapper';

import styled from 'styled-components';

const textBox = styled.a`
  display: flex;
`;

class Grid3 extends Component {

  render() {

    var posts = this.props.posts;

    return (
    <center>
      <div id="grid3-wrapper">
        <div className="row">
        {posts.map((post, i) => (
          <div className="image-grid col-md-4" key={i}>
            <a href={"/articles/" + post.id}>
              <RatioWrapper ratio="90%" className="ratiowrapper">
                {post.sections[0].medias.length > 0 &&
                <img className="grid2-image" src={'url(' + (post.sections[0].medias[0] || {}).url + ')'}/>}
              </RatioWrapper>
              <textBox>
                <p className="title-text">{post.sections[0].title}</p>
                <b className="category-text">{post.tags.length > 0 ? post.tags.join(' ') + ' | ' + post.time : post.time}</b>
              </textBox>
            </a>
          </div>
        ))}
        </div>
      </div>
    </center>
    )
  }

}
export default Grid3
