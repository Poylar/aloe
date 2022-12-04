import './App.scss';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const BaseLayout = ({ children, className }: any) => (
  <div className='page-wrapper'>
    <Header />
    <main className={`main ${className || ''}`}>{children}</main>
    <Footer />
  </div>
);
export default BaseLayout;
