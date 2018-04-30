require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePageComponent from './HomePage/HomePageComponent';
import Contacts from './StaticPages/Contacts';
import Cemetery from './Cemetery/Cemetery';
import Feedback from './Feedback/Feedback';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wraper" >
        <Switch>
          <Route path="/" exact render={({history}) => (
            <HomePageComponent history={history}
             />
          )} />
          <Route path="/contacts" exact render={({history}) => (
            <Contacts history={history}
             />
          )} />
          <Route path="/cemetery" exact render={({history}) => (
            <Cemetery history={history}
             />
          )} />
          <Route path="/feedback" exact render={({history}) => (
            <Feedback history={history}
             />
          )} />
        </Switch>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
