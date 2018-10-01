import Layout from '../components/layout'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getMovies, changeHeaderTitle } from '../actions'
import Content from '../components/content'

class Movies extends React.Component {
  componentDidMount () {
    this.props.getMovies()
    this.props.changeHeaderTitle('Popular Movies');
  }
  render () {
    return (
      <Layout>
        <div>
          <Content
            entries={this.props.movies}
            isReady={this.props.isReady}
            isSomethingWrong={this.props.isSomethingWrong}
          />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  isReady: state.movieList.getEntriesFromDatabase,
  isSomethingWrong: state.movieList.getEntriesFromDatabaseFailed
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies()),
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  changeHeaderTitle: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  isReady: PropTypes.bool,
  isSomethingWrong: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
