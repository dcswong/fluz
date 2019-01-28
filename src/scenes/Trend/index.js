import React, { Component } from 'react';
import styled from 'styled-components';

import TrendBlock from './TrendBlock'
const TrendGp = styled.div`
  background-color: #ffffff;
  height: 20%;
  padding: 20px 0;
`;

class Trend extends Component{
  render(){
    return(
      <TrendGp>
        <TrendBlock/>
      </TrendGp>
    )
  }

}
export default Trend;
