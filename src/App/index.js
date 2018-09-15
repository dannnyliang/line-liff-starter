import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const defaultProps = {
  liffData: {
    language: 'default',
    context: {},
  },
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    window.liff.init(
      (data) => {
        this.liffData = data;
        console.log(data);
      },
      (err) => {
        this.liffData = props.liffData;
        console.log(err);
      },
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <table>
          <tbody>
            <tr>
              <th>language</th>
              <td id="languagefield">{this.liffData.language}</td>
            </tr>
            <tr>
              <th>context.viewType</th>
              <td id="viewTypefield">{this.liffData.context.viewType}</td>
            </tr>
            <tr>
              <th>context.userId</th>
              <td id="userIdfield">{this.liffData.context.userId}</td>
            </tr>
            <tr>
              <th>context.utouId</th>
              <td id="utouIdfield">{this.liffData.context.utouId}</td>
            </tr>
            <tr>
              <th>context.roomId</th>
              <td id="roomIdfield">{this.liffData.context.roomId}</td>
            </tr>
            <tr>
              <th>context.groupId</th>
              <td id="groupIdfield">{this.liffData.context.groupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

App.propTypes = {
  liffData: PropTypes.shape({
    language: PropTypes.string,
    context: PropTypes.object,
  }),
};

App.defaultProps = defaultProps;

export default App;
