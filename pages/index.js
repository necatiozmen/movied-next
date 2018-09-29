import React from 'react';
import {connect} from 'react-redux'
import Home from './home';
import Head from 'next/head'



class Index extends React.Component {

  render () {
    return (
      <div >
        <Home />
      </div>
    )
  }
}

export default connect()(Index)
