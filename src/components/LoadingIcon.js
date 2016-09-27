import React from 'react';
import {
  Glyphicon,
} from 'react-bootstrap';
import Radium from 'radium';



@Radium
export class LoadingIcon extends React.Component {

  render() {
    return (
      <Glyphicon glyph="refresh" style={styles.icon}/>
    )
  }
}



var rotate = Radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'rotate(0deg)'
  },
  '50%': {
    transform: 'rotate(180deg)'
  },
  '100%': {
    opacity: 1,
    transform: 'rotate(360deg)'
  }
}, 'rotate');


var styles = {
  icon: {
    marginRight: 10,
    fontSize: 20,
    fontWeight: 100,
    verticalAlign: 'middle',
    color: '#ccc',
    animation: 'rotate 3s ease 0s infinite',
    animationName: rotate,
  }
};

