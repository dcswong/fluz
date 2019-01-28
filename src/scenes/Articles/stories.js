import React, { Component } from 'react';

import styled from 'styled-components';

import Related from './related';
import Next from './next';

const StoryWrapper = styled.div`
  margin-left: 2.4%;
  margin-right: 2.4%;
  margin-bottom: 5%;
  display: flex;
`;

class Stories extends Component {
  render () {
    return (
      <StoryWrapper>
        <Related stories={this.props.stories}/>
        <Next/>
      </StoryWrapper>
    )
  }
}
export default Stories

Stories.defaultProps = {
  stories: [
    {
      title: "BRAIN DEAD 主理人 KYLE NG 最爱的七件 T 恤",
      category: "时尚",
      date: "Jan 23",
      image: "../../assets/imgs/story1.png"
    },
    {
      title: "偷食禁果与庸俗升级：皮裤的华丽转身",
      category: "时尚",
      date: "Jan 16",
      image: "../../assets/imgs/story2.png"
    }
  ]
}
