import React, { Component } from 'react';
import Arm from './Arm';
import styled from 'styled-components';
import './App.css';

function convertTo12Hour(time) {
  return time < 12 ? time : time - 12;
}

function calcDegrees(time) {
  return time / 60 * 360 + 270;
}

const Clockcontainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid green 2px;
  text-align: center;
`;

const Armcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /* account for the height of the clock hands */
`;

class App extends Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0
  };

  getTime = () => {
    let t = new Date();
    let hour = calcDegrees(convertTo12Hour(t.getHours()));
    let minute = calcDegrees(t.getMinutes());
    let second = calcDegrees(t.getSeconds());
    this.setState({
      hour,
      minute,
      second
    });
  };

  componentDidMount() {
    this.tick = window.setInterval(() => this.getTime(), 1000);
  }
  render() {
    return (
      <Clockcontainer>
        <div className="clock">
          <Armcontainer>
            <Arm deg={this.state.hour} />
            <Arm deg={this.state.minute} />
            <Arm deg={this.state.second} />
          </Armcontainer>
        </div>
      </Clockcontainer>
    );
  }
}

export default App;
