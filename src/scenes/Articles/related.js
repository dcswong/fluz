import React, { Component } from 'react';

import styled from 'styled-components';

const RelatedWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: 2.4%;
    width: 49%;
  }
  @media (max-width: 767px) {
    margin-left: calc(2% + 1em);
    margin-right: calc(2% + 1em);
  }
  border-top: 1px solid var(--border-grey);
`;

const Heading = styled.p`
  padding-top: 10px;
  text-transform: uppercase;
  font-size: 12px;
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
 @media (min-width: 768px) {
   margin-top: 5%;
   margin-right: 3%;
 }
 @media (max-width: 767px) {
   padding: 3%;
   margin-bottom: 14%;
 }
  color: var(--theme-grey);

  :hover {
    text-decoration: none;
    color: var(--theme-grey);
    text-decoration: none
  }
`;

const GridPhoto = styled.img`
  width: 100%;
`;

const Title = styled.div`
  @media (min-width: 768px) {
    line-height: 30px;
  }
  margin-top: 3%;
  font-size: 19px;
`;

const Category = styled.div`
  margin-top: 3%;
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
                <GridPhoto src={story.image}/>
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
