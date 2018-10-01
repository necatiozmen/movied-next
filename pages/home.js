import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link';
import PropTypes from 'prop-types'
import { changeHeaderTitle } from '../actions'
import Layout from '../components/layout';

class Home extends React.Component {
  componentDidMount() {
    this.props.changeHeaderTitle('Popular Titles')
  }
  render() {
    return (
      <Layout>
        <div className="container">
           <div className="home-container">
             <div className="box-container">
               <Link href="/series">
                 <div className="box">
                   <h1>SERIES</h1>
                 </div>
               </Link>
               <div className="box-under-title"><p>Popular Series</p></div>
             </div>
             <div className="box-container">
                <Link href="/movies">
                 <div className="box">
                   <h1>MOVIES</h1>
                 </div>
               </Link>
               <div className="box-under-title"> <p>Popular Movies</p></div>
             </div>
           </div>
           <style jsx>{`
             .container {
               font-weight: 300;
               font-size: 14px;
             }

             .home-container {
               display: flex;
               padding: 35px 95px 80px;
               background-color: #FDFDFD;
             }

             .home-container > div:first-child {
               margin-right: 15px;
             }

             .box-container {
               display: flex;
               flex-direction: column;
               align-items: flex-start;
             }

             .box {
               display: flex;
               justify-content: center;
               align-items: center;
               width: 140px;
               height: 200px;
               background-color: #1E1E1E;
               background-image: url('../static/placeholder.png');
               background-size: cover;
               background-repeat: no-repeat;
               background-position: center;
             }

             .box > h1 {
               color:#fff;
             }

             @media only screen
               and (min-width: 320px)
               and (max-width: 667px) {
               .container {
                 display: flex;
                 flex-direction: column;
                 align-items: center;
               }

               .home-container {
                 flex-direction: column;
               }

               .home-container > div:first-child {
                 margin-right: 0;
                 margin-bottom: 25px;
               }

               .box {
                 width: 240px;
                 height: 300px;
               }

               .box-under-title {
                 align-self: center;
               }
             }
           `}</style>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeHeaderTitle: data => dispatch(changeHeaderTitle(data)),
});

Home.propTypes = {
  changeHeaderTitle: PropTypes.func.isRequired,
};

export default connect(null,mapDispatchToProps)(Home);
