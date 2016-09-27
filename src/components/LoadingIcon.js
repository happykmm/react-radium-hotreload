import React from 'react';
import {
  Glyphicon,
} from 'react-bootstrap';
import Radium from 'radium';



@Radium
export class LoadingIcon extends React.Component {

  render() {
    return (
      <div style={styles.icon}>
        <Glyphicon glyph="refresh" />
      </div>
    )
  }
}



var rotate = Radium.keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '50%': {
    transform: 'rotate(180deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
}, 'rotate');


var styles = {
  icon: {
    animation: 'x 2s linear 0s infinite',
    animationName: rotate,
    fontSize: 20,
    fontWeight: 100,
    verticalAlign: 'middle',
    color: '#ccc',
    display: 'inline-block',
  }
};


