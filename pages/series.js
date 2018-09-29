import Layout from '../components/layout'
import { connect } from 'react-redux'
import { getSeries, changeHeaderTitle } from '../actions'
import Content from '../components/content.js'

class Series extends React.Component {
    componentDidMount () {
      this.props.getSeries()
      this.props.changeHeaderTitle('Popular Series')
    }
  render () {
    return (
      <Layout>
        <div>
          <Content
            entries={this.props.series}
            isReady={this.props.isReady}
            isSomethingWrong={this.props.isSomethingWrong}
          />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  series: state.serieList.series,
  isReady: state.serieList.getEntriesFromDatabase,
  isSomethingWrong: state.serieList.getEntriesFromDatabaseFailed
});

const mapDispatchToProps = dispatch => ({
  getSeries: data => dispatch(getSeries(data)),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Series)
