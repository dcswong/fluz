import React, { Component } from 'react';

import styled from 'styled-components';

const RelatedWrapper = styled.div`
  border-top: 1px solid var(--border-grey);
  margin-right: 2.4%;
  width: 49%;
`;

const Heading = styled.p`
  padding-top: 7px;
  text-transform: uppercase;
  font-size: 10px;
  color: var(--theme-grey);
`;

const PostRow = styled.div`
  display: flex;
  color: var(--theme-grey);
`;

const PostLink = styled.a`
  color: var(--theme-grey);
  text-decoration: none;
  
`;

const PostGrid = styled.div`
  margin-top: 15px;
  margin-right: 20px;
  color: var(--theme-grey);

  :hover {
    text-decoration: none;
    color: var(--theme-grey);
    text-decoration: none
  }
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 19px;
  line-height: 30px;
`;

const Category = styled.div`
  font-size: 12px;
`;

class Related extends Component {

  render () {
    console.log('this.props.stories', this.props.stories);
    var stories = this.props.stories;

    return (
      <RelatedWrapper>
        <Heading>
          Related Stories
        </Heading>
        <PostRow>
          {stories.map((story, i) => (
            <PostLink href="/">
              <PostGrid key={i}>
                <img src={story.image} width="285"/>
                <Title>{story.title}</Title>
                <Category>
                  {story.category} | {story.date}
                </Category>
              </PostGrid>
            </PostLink>
          ))
          }
        </PostRow>
      </RelatedWrapper>
    )
  }
}
export default Related
