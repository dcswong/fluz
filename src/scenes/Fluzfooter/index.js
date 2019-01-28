import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import SocialMedia from './SocialMedia';

const FooterGrp = styled.div`
  background-color: #262626;
  width: 100%;
  height: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Copyright = styled.p`
  margin-top: 1%;
  font-weight: bold;
  color: #808080;
`;
class Fluzfooter extends Component{
  render(){
    return(

      <FooterGrp>
        <Copyright>© FLUZ 2019</Copyright>
        <Navigation/>
        <SocialMedia/>
      </FooterGrp>

    )
  }
}
export default Fluzfooter;
