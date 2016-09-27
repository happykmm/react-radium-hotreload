import React from 'react'
import {StyleRoot} from 'radium'
import {Loading} from './components/Loading'


export class App extends React.Component {

  render() {
    return (
      <div>
        <p>Hello World</p>
        <Loading/>
      </div>
    )
  }
}