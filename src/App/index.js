import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let liffData;
  window.liff.init(
    (data) => {
      liffData = data;
      console.log(data);
    },
    (err) => {
      console.log(err);
    },
  );
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
            <td id="languagefield">{liffData.language}</td>
          </tr>
          <tr>
            <th>context.viewType</th>
            <td id="viewTypefield">{liffData.context.viewType}</td>
          </tr>
          <tr>
            <th>context.userId</th>
            <td id="userIdfield">{liffData.context.userId}</td>
          </tr>
          <tr>
            <th>context.utouId</th>
            <td id="utouIdfield">{liffData.context.utouId}</td>
          </tr>
          <tr>
            <th>context.roomId</th>
            <td id="roomIdfield">{liffData.context.roomId}</td>
          </tr>
          <tr>
            <th>context.groupId</th>
            <td id="groupIdfield">{liffData.context.groupId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
