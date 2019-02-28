import React, { Component } from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
  background-color: #ffffff;
  object-fit: contain;
`;

class AdBanner extends Component{
  render(){
    return(
      <BannerDiv className="bannerDiv">
        <a href="">
          <img src="../../assets/imgs/banner.png" width="100%" height="100%"/>
        </a>
      </BannerDiv>
    )
  }
}
export default AdBanner;
