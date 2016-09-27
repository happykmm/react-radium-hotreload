import React from 'react'
import Radium from 'radium'


@Radium
export class LoadingText extends React.Component {

  render() {
    return (
      <span style={styles.text}>Loading...</span>
    )
  }
}



var styles = {
  text: {
    fontSize: 16,
    verticalAlign: 'middle',
    color: 'red',
    '@media print': {color: 'black'}
  }
};
