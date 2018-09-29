import Header from './header';
import Footer from './footer';
import Home from './footer';
//
// export default () => (
//
// )

const Layout = (props) => (
  <div>
    <Header/>
    {props.children}
    <Footer />
  </div>
);

export default Layout;
