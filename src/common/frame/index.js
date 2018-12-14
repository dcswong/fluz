import React from 'react';

import Header from './header';
import Footer from './footer';

export default class Frame extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header/>
        <Footer/>
      </React.Fragment>
     //         <Header/>
     //         <div id="main-body">
     //         </div>
     //         <Footer/>
     //       </React.Fragment>
    )
  }
}
