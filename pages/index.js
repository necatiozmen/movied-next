import React from 'react';
import {connect} from 'react-redux'
import Home from './home';



class Index extends React.Component {
  // static getInitialProps ({ reduxStore, req }) {
  //   const isServer = !!req
  //   reduxStore.dispatch(serverRenderClock(isServer))
  //
  //   return {}
  // }

  // componentDidMount () {
  //   const {dispatch} = this.props
  //   this.timer = startClock(dispatch)
  // }
  //
  // componentWillUnmount () {
  //   clearInterval(this.timer)
  // }

  render () {
    return (
      <div className="App">
        <Home />

        <style jsx>{`
          .App {
            text-align: center;
            max-width: 1140px;
            margin-left: auto;
            margin-right: auto;
            }

            @media only screen
            and (min-width: 320px)
            and (max-width: 667px) {
            .App {
            overflow-x: hidden;
            }
            }

        `}</style>
      </div>
    )
  }
}

export default connect()(Index)
