import { connect } from 'react-redux'
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className="header-container">
    <div className="header-nav">
      <div>
        <Link href="/home">
          <h1 className="header-title">DEMO Streaming</h1>
        </Link>
      </div>
      <div className="login-container">
        <div className="login-box"><p>Log in</p></div>
        <div className="login-box"><p>Start your free trial</p></div>
      </div>
    </div>
    <div className="entries-type">
      <div className="entries-type-title">
        <p>{props.headerTitle}</p>
      </div>
    </div>
    <style jsx>{`
      .header-container {
        display: flex;
        flex-direction: column;
        height: 90px;
        color: white;
        font-size: 12px;
      }

      .header-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 100px;
        padding-right: 100px;
        height: 55%;
        background-image: linear-gradient(#1DA4FC,#0072FF);
      }

      .header-title {
       font-size: 27px;
       font-weight:400;
      }

      .login-container{
        display: flex;
        justify-content: space-around;
        height: 27px;
      }

      .login-container > div:first-child {
        background: transparent;
        margin-right: 12px;
      }

      .login-box {
        display: flex;
        align-items: center;
        padding-right: 10px;
        padding-left: 10px;
        background-color: #414141;
      }

      .entries-type {
        display: flex;
        align-items: center;
        height: 45%;
        padding-left: 100px;
        background-color: #414141;
        box-shadow:0 5px 10px rgba(0, 0, 0, 0.4);
      }

      .entries-type-title > p {
       font-size: 17px;
      }

      @media only screen
        and (min-width: 320px)
        and (max-width: 667px) {
          .header-container {
            height: 140px;
            font-size: 7px;
          }

          .header-nav {
            flex-direction: column;
            padding: 0 0 10px;
          }

          .header-title {
           font-size: 22px;
          }

          .entries-type {
            justify-content: center;
            height: 35%;
            padding-left: 0;
          }
      }
    `}</style>
  </div>
)

const mapStateToProps = state => ({
  headerTitle: state.headerType.headerTitle,
});

Header.propTypes = {
  headerTitle: PropTypes.string,
};

export default connect(mapStateToProps)(Header)
