import React, { Component } from 'react';

import styled from 'styled-components';

const NextWrapper = styled.div`
  border-top: 1px solid var(--border-grey);
  width: 49%;
`;

const Heading = styled.p`
  padding-top: 10px;
  text-transform: uppercase;
  font-size: 10px;
  color: var(--theme-grey);
  margin-bottom: 4%;
`;

const NextGrid = styled.a`
  margin-left: 8px;
  margin-right: 8px;
  text-align: center;
  color: var(--theme-grey);
  text-decoration: none;
`;

const Title = styled.p`
  font-size: 40px;
`;

const SubTitle = styled.p`
  font-size: 20px;
`;

class Next extends Component {
  render () {

    return (
      <NextWrapper>
        <Heading>
          Next Story
        </Heading>
        <NextGrid href="/">
          <Title>从容随性：DRIES VAN NOTEN 男装系列上线 SSENSE</Title>
          <SubTitle>由 SHANIQWA JAVIS 掌镜的 2019 春夏系列现正发售</SubTitle>
        </NextGrid>
      </NextWrapper>
    )
  }
}
export default Next
