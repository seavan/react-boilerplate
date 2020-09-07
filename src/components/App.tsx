import * as React from 'react';
import { hot } from 'react-hot-loader';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

import './../assets/scss/App.scss';

@observer
class App extends React.Component {
  @observable counter = 0;

  @action.bound handleIncrease() {
    this.counter++;
  }

  @action.bound handleDecrease() {
    this.counter--;
  }

  public render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <ul>
          <li>
            <input type="button" onClick={this.handleIncrease} value="Increase" />
          </li>
          <li>{this.counter}</li>
          <li>
            <input type="button" onClick={this.handleDecrease} value="Decrease" />
          </li>
        </ul>
      </div>
    );
  }
}

export default hot(module)(App);
