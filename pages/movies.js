import Layout from '../components/layout';

const Movies = () => {
    return (
      <Layout>
      <div>
        <div>Buraya moviler</div>
        {/* <Content
          entries={this.props.movies}
          isReady={this.props.isReady}
          isSomethingWrong={this.props.isSomethingWrong}
        /> */}
      </div>
      </Layout>
    );
  }

export default Movies;
//
// componentDidMount() {
//     this.props.getMoviesDispatch();
//     this.props.changeHeaderTitle('Popular Movies');
//   };



// const mapStateToProps = state => ({
//   movies: state.movieList.movies,
//   isReady: state.movieList.getEntriesFromDatabase,
//   isSomethingWrong: state.movieList.getEntriesFromDatabaseFailed,
// });
//
// const mapDispatchToProps = dispatch => ({
//   getMoviesDispatch: data => dispatch(getMovies(data)),
//   changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
// });
