import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import styled from 'styled-components';

import Grid3 from './Grid3';
import Trend from '../Trend';
import Grid2 from './Grid2';
import AdBanner from '../AdBanner';

class Landing extends Component {

  render() {

    /*var components = {
        '2-images': 3Grid,
        '3-images': 2Grid
    }*/

    return (
     <div id="landing-wrapper">
       <Grid3 posts={this.props.arr}/>
       <Trend/>
       <Grid2/>
       <AdBanner/>
       <Grid3 posts={this.props.arr}/>
       <Trend/>
       <Grid2/>
     </div>
    )
  }
}
export default Landing

Landing.defaultProps = {
  arr: [
    {
      title: 'Archiving the 20Teens with Ayesha A. Siddiqi',
      category: 'Fashion',
      date: 'Dec 17',
      image: '../../assets/imgs/1.jpg',
    },
    {
      title: 'Market Research: Gucci L Aveugle par amour Round Sunglasses',
      category: 'Fashion',
      date: 'Dec 17',
      image: '../../assets/imgs/2.jpg',
    },
    {
      title: 'Market Research: Burberry "Multicolor Scarf Print Shirt"',
      category: 'Fashion',
      date: 'Dec 17',
      image: '../../assets/imgs/3.jpg',
    }
  ],
};
