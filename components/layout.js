import Header from './header';
import Footer from './footer';
import Head from 'next/head';

const Layout = (props) => (
  <div className="Layout">
    <Head>
      <title>Movied Next</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header/>
      {props.children}
    <Footer />
    <style jsx global>{`
      .Layout {
        text-align: center;
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
       }

       @media only screen
       and (min-width: 320px)
       and (max-width: 667px) {
         .Layout {
           overflow-x: hidden;
          }
        }

        body {
          background-color: black;
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }
    `}</style>
  </div>
);

export default Layout;
