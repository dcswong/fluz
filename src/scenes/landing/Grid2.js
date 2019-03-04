import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import RatioWrapper from '../../common/ratiowrapper';

import styled from 'styled-components';

const textBox = styled.a`
  display: flex;
`;

class Grid2 extends Component {

  render() {

    var posts = this.props.posts;

    return (
      <div id="grid2-wrapper">
        <div className="row">
        {posts.map((post, i) => (
          <div className="image-grid col-sm-6" key={i}>
            <a href={"/articles/" + post.id}>
              <RatioWrapper ratio="70%" className="ratiowrapper">
                {post.sections[0].medias.length > 0 &&
<<<<<<< HEAD
                <img className="grid2-image" src={'url(' + (post.sections[0].medias[0] || {}).url + ')'}/>}
=======
                <img className="grid2-image" src={(post.sections[0].medias[0] || {}).url}/>}
>>>>>>> 633257981c7835d1fc1d198e06bde833da0db481
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
    )
  }

}
export default Grid2

Grid2.defaultProps = {
  details: [
    {
      title: '与画家 SAM MCKINNISS 聊名人情怀这位纽约艺术家与 THORA SIEMSEN 探讨图像制造、尬聊、地狱和亨利·方丹·拉图尔',
      image: '../../assets/imgs/grid2-1.png',
      category: 'Fashion',
      date: 'Dec 17',
    },
    {
      title: '坚韧不屈：人人都爱英式橄榄球衫经典条纹男装单品迈入 2019 年',
      image: '../../assets/imgs/grid2-2.png',
      category: 'Fashion',
      date: 'Dec 17',
    }
  ]
}
