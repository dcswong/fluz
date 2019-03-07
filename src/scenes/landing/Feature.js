import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import RatioWrapper from '../../common/ratiowrapper';

import styled from 'styled-components';

const FeatureDiv = styled.div`
  height: 550px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 3%;
  position: relative;
`;

const LargeImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const DetailFrame = styled.div`
  background: rgba(0,0,0,0.5);
  position: absolute;
  bottom: 50px;
  top: 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
`;

const Title = styled.h4`
  width: 45%;
  margin-left: 3%;
  margin-top: 30%;
  color: white;
  line-height: 1.5em;
  font-size: 1.7em;
`;

class Feature extends Component {

  render() {

    var post = this.props.posts[0];
    console.log('post ', post);
    const media = post ? post.sections[0].medias[0].url : null
    const id = post ? post.id : null
    const title = post ? post.sections[0].title : null

    return (
      <FeatureDiv>
        <a href={"/articles/" + id}>
          <LargeImg src={media}/>
          <DetailFrame>
            <Title>{title}</Title>
          </DetailFrame>
        </a>
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
