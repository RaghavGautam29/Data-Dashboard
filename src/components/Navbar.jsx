import PropTypes from 'prop-types';
export default function Navbar({ sidebarVisible }) {
  const fullSidebarWidth = '275px';
  const collapsedSidebarWidth = '110px'; 

  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{
        marginLeft: sidebarVisible ? fullSidebarWidth : collapsedSidebarWidth,
        borderRadius: '30px',
        marginTop: '15px'
      }}
    >
      <a className="navbar-brand ml-[30px] text-violet-500 hover:text-teal-600" href='/'><strong>E-Commerce</strong></a>

      <a className="nav-item nav-link ml-[550px] text-violet-500 hover:text-teal-600" href="/">LogOut</a>
      <a className="nav-item nav-link  text-violet-500 hover:text-teal-600" href="/">Sales</a>
      <a className="nav-item nav-link  text-violet-500 hover:text-teal-600 mr-[40px]" href="/">Pricing</a>
    </nav>
  );
}
Navbar.propTypes = {
    sidebarVisible: PropTypes.bool.isRequired,
  };