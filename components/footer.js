import Icon from '../static/Icons';

const Footer = () => {
return  (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="footer-nav">
          <div className="footer-nav-list">
            <p>Home</p>
            <p>|</p>
            <p>Term and Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Collection Statement</p>
            <p>|</p>
            <p>Help</p>
            <p>|</p>
            <p>Manage Account</p>
          </div>
          <div className="footer-copyright">
            <p>Copyright © 2018 DEMO Streaming. All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-contact-container">
          <div className="footer-icons">
            <Icon name="facebook" width={50} height={25} />
            <Icon name="twitter" width={50} height={25} />
            <Icon name="instagram" width={50} height={25} />
          </div>
          <div className="footer-icons-app">
            <Icon name="appstore" width={140} height={35} />
            <Icon name="playstore" width={140} height={35} />
            <Icon name="windowstore" width={120} height={35} />
          </div>
        </div>
      </div>


      <style jsx>{`
          .footer-container {
          height: 200px;
          background-color: #1E1E1E;
        }

        .footer-inner-container {
          padding: 25px 95px;
        }

        .footer-nav {
          position: relative;
          width: 65%;
          margin-bottom: 50px;
          font-size: 12px;
          color:#B8B7A8;
        }

        .footer-nav-list {
          display: flex;
          justify-content: space-around;
        }

        .footer-copyright {
          position: absolute;
          margin-left: 7px;
        }

        .footer-contact-container {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .footer-icons {
          display: flex;
        }

        .footer-icons-app {
          display: flex;
        }

        @media only screen
          and (min-width: 375px)
          and (max-width: 667px) {
          .footer-container {
            height: 250px;
          }

          .footer-inner-container {
            padding-left: 10px;
            padding-right: 10px;
          }

          .footer-nav{
            width: 100%;
            margin-bottom: 50px;
            font-size: 8px;
          }

          .footer-copyright {
            padding-left: 30px;
          }

          .footer-contact-container {
            flex-direction: column;
            align-items: center;
          }

          .footer-icons {
            margin-bottom: 30px;
          }

          .footer-icons-app > div {
            width: 125px;
          }
        }


        @media only screen
          and (min-width: 320px)
          and (max-width: 568px) {
          .footer-container {
            height: 300px;
          }

          .footer-inner-container {
            padding-left: 10px;
            padding-right: 10px;
          }

          .footer-nav{
            width: 100%;
            font-size: 7px;
          }

          .footer-copyright {
            margin-left: 60px;
          }

          .footer-contact-container {
            flex-direction: column;
            align-items: center;
          }

          .footer-icons {
            margin-bottom: 30px;
          }

          .footer-icons-app {
            flex-direction: column;
            justify-content: center;
          }

          .footer-icons-app > div {
            margin-bottom: 5px;
          }
        }

        @media only screen
          and (min-width: 768px)
          and (max-width: 1024px) {
          .footer-nav {
            width: 100%;
          }
        }
    `}</style>
  </div>
)
  };

  export default Footer;
