import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

const SubtitleDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubCat = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-left: 20px;
  :hover {
    color: black;
  }
`;

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Fashion
      </a>

      <a className="menu-item" href="/laravel">
        Lifestyle
      </a>

      <a className="menu-item" href="/angular">
        Travel
      </a>

      <a className="menu-item" href="/react">
        Food
      </a>

      <SubtitleDiv>
        Follow Us
        <SubCat>
          Facebook
        </SubCat>
        <SubCat>
          Instagram
        </SubCat>
      </SubtitleDiv>
    </Menu>

  );
};
