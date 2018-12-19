import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStroopwafel, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import i18n from './helpers/i18n';
import Frame from './common/frame';

import Category from './scenes/category';

//library.add(faStroopwafel, faArrowRight, faArrowLeft);

$(document).ready(() => render((
    <I18nextProvider i18n={ i18n }>
      <Router>
        <Frame>
          <Switch>
            <Route exact path="/category" component={ Category }/>
          </Switch>
        </Frame>
      </Router>
    </I18nextProvider>
), document.getElementById('root')))
