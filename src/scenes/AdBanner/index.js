import React, { Component } from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
  padding: 3.6% 3.6%;
  background-color: #ffffff;
  height: 280px;
  margin-bottom: 15%;
`;
class AdBanner extends Component{
  render(){
    return(
      <BannerDiv>
        <a href="">
          <img src="../../assets/imgs/banner.png" width="1178" height="280"/>
        </a>
      </BannerDiv>
    )
  }
}
export default AdBanner;
