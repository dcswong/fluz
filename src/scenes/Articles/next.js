import React, { Component } from 'react';

import styled from 'styled-components';

const NextWrapper = styled.div`
  @media (min-width: 768px) {
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
  margin-bottom: 4%;
`;

const NextGrid = styled.a`

  text-align: center;
  color: var(--theme-grey);
  text-decoration: none;
`;

const Title = styled.p`
  @media (min-width: 768px) {
    padding-top: 4%
    font-size: 40px;
  }
  @media (max-width: 767px) {
    padding-right: 2%;
    font-size: 30px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
`;

const BorderLine = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 767px) {
    margin-top: 20%;
    width: 100%;
  }
  border-top: 1px solid var(--border-grey);
`;

class Next extends Component {
  render () {

    return (
      <React.Fragment>
        <NextWrapper>
          <Heading>
            Next Story
          </Heading>
          <NextGrid href="/">
            <Title>从容随性：DRIES VAN NOTEN 男装系列上线 SSENSE</Title>
            <SubTitle>由 SHANIQWA JAVIS 掌镜的 2019 春夏系列现正发售</SubTitle>
          </NextGrid>
        </NextWrapper>
        <BorderLine/>
      </React.Fragment>
    )
  }
}
export default Next
