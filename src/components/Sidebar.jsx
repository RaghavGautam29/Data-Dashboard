// Updated Sidebar Component
import PropTypes from 'prop-types';
export default function Sidebar({ handleSidebarToggle }) {
  return (
    <div id="nav-bar">
       <input type="checkbox" onClick={handleSidebarToggle} id="nav-toggle"/>
      <div id="nav-header">
          <a id="nav-title" href='/' target="blank">
              Dashboard
          </a>
          <label htmlFor="nav-toggle">
              <span id="nav-toggle-burger"></span>
          </label>
          <hr/>
      </div>
      <div id="nav-content">
          <div className="nav-button">
          <i className="fa-solid fa-cart-shopping  ml-[17px] pr-[17px]"></i><span>Products</span>
          </div>
          <div className="nav-button">
              <i className="fa-regular fa-envelope  ml-[17px] pr-[17px]"></i><span>Notifications</span>
          </div>
          <div className="nav-button">
          <i className="fa-solid fa-comments  ml-[17px] pr-[17px]"></i><span>Comments</span>
          </div>
          <hr/>
          <div className="nav-button">
          <i className="fa-solid fa-person  ml-[17px] pr-[17px]"></i><span>Team</span>
          </div>
          <div className="nav-button">
              <i className="fas fa-chart-line"></i><span>Charts</span>
          </div>
          <div className="nav-button">
          <i className="fa-solid fa-database ml-[17px] pr-[17px]"></i><span>Database</span>
          </div>
          <div id="nav-content-highlight"></div>
      </div>
      <input type="checkbox" id="nav-footer-toggle"/>
      <div id="nav-footer">
          <div id="nav-footer-heading">
              <div id="nav-footer-avatar">
                  <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="Avatar"/>
              </div>
              <div id="nav-footer-titlebox">
                  <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="blank">Raghav</a>
                  <span id="nav-footer-subtitle">Admin</span>
              </div>
              <label htmlFor="nav-footer-toggle">
                  <i className="fas fa-caret-up"></i>
              </label>
          </div>
          <div id="nav-footer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
      </div>
    </div>
  );
}
Sidebar.propTypes = {
    handleSidebarToggle: PropTypes.bool.isRequired,
  };