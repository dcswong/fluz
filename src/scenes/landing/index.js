import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import styled from 'styled-components';

import Feature from './Feature';
import Grid3 from './Grid3';
import Trend from '../Trend';
import Grid2 from './Grid2';
import AdBanner from '../AdBanner';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getArticles = this.getArticles.bind(this);
  }

  getArticles() {
    fetch('/api/articles?tags=features', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => this.setState({features: (result.data || {}).posts || []}));
    console.log(this.state.features);

    fetch('/api/articles?tags=top', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => this.setState({top: (result.data || {}).posts || []}));

    fetch('/api/articles?tags=bottom', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => this.setState({bottom: (result.data || {}).posts || []}));
    console.log(this.state.features);
  }

  componentDidMount() {
    this.getArticles();
  }

  componentWillMount() {
    this.getArticles();
  }

  render() {
    const features = this.state.features || [];
    const top = this.state.top || [];
    const bottom = this.state.bottom || [];
    console.log('features: ', features);
    console.log('top: ', top);
    console.log('bottom: ', bottom);

    return (
      <div id="landing-wrapper">
        <Feature posts={features}/>
        <Grid3 posts={top.splice(0, 3)}/>
        <Grid2 posts={bottom.splice(0, 2)}/>
        <Grid3 posts={top.splice(0, 3)}/>
        <Grid2 posts={bottom.splice(0, 2)}/>
      </div>
    )
  }
}
export default Landing

Landing.defaultProps = {
  arr: [
    {
      title: '蓝色伊甸园：夏威夷之行时尚',
      category: '時尚',
      date: 'Dec 17',
      image: '../../assets/imgs/1.jpg',
    },
    {
      title: '坚韧不屈：人人都爱英式橄榄球衫时尚',
      category: '時尚',
      date: 'Dec 17',
      image: '../../assets/imgs/2.jpg',
    },
    {
      title: '与画家 SAM MCKINNISS 聊名人情怀这位纽约艺术家与 THORA SIEMSEN 探讨图像制造、尬聊、地狱和亨利·方丹·拉图尔',
      category: '文化',
      date: 'Dec 17',
      image: '../../assets/imgs/3.jpg',
    }
  ],
};
