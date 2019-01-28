import React, { Component } from 'react';
import styled from 'styled-components';

const TabGp = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;

const TabBtn = styled.a`
  text-decoration: none;
  color: #808080;
  text-transform: uppercase;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;

  :hover{
    text-decoration: none;
    color: #808080;

  }

  :focus{
    text-decoration: none;
    color: #808080;

  }
`;
class Navigation extends Component{
  render(){
    return(
      <div>
        <TabBtn href="">About</TabBtn>
        <TabBtn href="">Jobs</TabBtn>
        <TabBtn href="">Contact</TabBtn>
        <TabBtn href="">Imprint</TabBtn>
        <TabBtn href="">Privacy policy</TabBtn>
        <TabBtn href="">Terms</TabBtn>
      </div>
    )
  }
}
export default Navigation;
