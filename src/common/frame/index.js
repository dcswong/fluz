import React, { Component } from 'react';

import Header from './header';
import Category from '../../scenes/category';

import Landing from '../../scenes/landing';
import Articles from '../../scenes/Articles';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';

import Fluzfooter from '../../scenes/Fluzfooter';

import API from '../../helpers/api';

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    // get customer info
    API.get('/api/consumers/session', res => {
        const user = (((res || {}).data || {}).consumers || []).shift() || null;
        API.get('/api/credentials?type=email', result => {
          if(result.result) {
            user['email'] = (((result.data || {}).tokens || [])[0] || {}).token
          }
      })
      this.setState({ user });
    });
  }
  render () {
    return (
      <React.Fragment>
        <div className="frame">
          <Header user={this.state.user}/>
          {React.Children.map(this.props.children, (child) => React.cloneElement(child))}
          <Fluzfooter/>
        </div>
      </React.Fragment>
    )
  }
}
export default Frame
