import React, { Component } from 'react';
import styled from 'styled-components';

const Arm = styled.div`
  width: 50%;
  height: 6px;
  background-color: black;
  transform: rotate(${props => props.deg}deg);

  transform-origin: 100%;
  position: absolute;
  top: 50%;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;

const ArmComponent = props => {
  return <Arm border={props.border} deg={props.deg} width={props.width} />;
};

export default ArmComponent;
