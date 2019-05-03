import React, {Component} from 'react';
import Header from './componentes/Header'
import TimeLine from './componentes/TimeLine'

export default class App extends Component {
  render(){
    return (
      <div id="root">
      <div className="main">
        <Header />
        <TimeLine login={this.props.login}/>
        </div>
      </div>
  );
  }
}