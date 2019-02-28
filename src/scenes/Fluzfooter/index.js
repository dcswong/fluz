import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import SocialMedia from './SocialMedia';

const FooterGrp = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Copyright = styled.p`
  margin-top: 1%;
  color: #808080;
`;
class Fluzfooter extends Component{
  render(){
    return(

      <FooterGrp>
        <Navigation/>
        <Copyright>© 2019 fluz.co</Copyright>
        <SocialMedia/>
      </FooterGrp>

    )
  }
}
export default Fluzfooter;
