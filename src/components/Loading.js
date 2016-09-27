import React from 'react';
import {
  Table,
  Glyphicon,
  Pagination
} from 'react-bootstrap';
import Radium, {StyleRoot} from 'radium';
import {LoadingText} from './LoadingText';
import {LoadingIcon} from './LoadingIcon';



export class Loading extends React.Component {

  render() {
    return (
      <StyleRoot style={styles.wrap}>
        <LoadingIcon/>
        <LoadingText/>
      </StyleRoot>
    )
  }
}


var styles = {
  wrap: {
    marginTop: 50,
    textAlign: 'center'
  }
};