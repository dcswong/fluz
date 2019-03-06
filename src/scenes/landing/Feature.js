import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import RatioWrapper from '../../common/ratiowrapper';

import styled from 'styled-components';

const FeatureDiv = styled.div`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

class Feature extends Component {

  render() {

    var post = this.props.posts[0];
    console.log('post ', post);

    return (
      <FeatureDiv>

      </FeatureDiv>
    )
  }

}
export default Feature

/*
const textBox = styled.a`
  display: flex;
`;
<div id="feature-wrapper">
  {posts.map((post, i) => (
    <div className="image-grid col-md-6" key={i}>
      <a href={"/articles/" + post.id}>
        <RatioWrapper ratio="60%" className="ratiowrapper">
          {post.sections[0].medias.length > 0 && <div  className="grid3-image" style={{
            backgroundImage: 'url(' + (post.sections[0].medias[0] || {}).url + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>}
        </RatioWrapper>
        <p className="title-text">{post.sections[0].title}</p>
        <b className="category-text">{post.tags.length > 0 ? post.tags.join(' ') + ' | ' + post.time : post.time}</b>
      </a>
    </div>
  ))}
</div>

*/
