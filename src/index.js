import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStroopwafel, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import i18n from './helpers/i18n';
import Frame from './common/frame';

import Landing from './scenes/landing';

import Category from './scenes/category';

import Articles from './scenes/Articles';

import ArticlesH from './scenes/ArticlesH';

//library.add(faStroopwafel, faArrowRight, faArrowLeft);

$(document).ready(() => render((
    <I18nextProvider i18n={ i18n }>
      <Router>
          <Frame>
            <Switch>
              <Route exact path="/" component={ Landing }/>
              <Route exact path="/:keywords" component={ Landing }/>
              <Route exact path="/category" component={ Category }/>
              <Route exact path="/validate/:key" component={ Landing }/>
              <Route exact path="/articles/:id" component={ Articles }/>
              <Route exact path="/articlesH" component={ ArticlesH }/>
            </Switch>
          </Frame>
      </Router>
    </I18nextProvider>
), document.getElementById('root')))
