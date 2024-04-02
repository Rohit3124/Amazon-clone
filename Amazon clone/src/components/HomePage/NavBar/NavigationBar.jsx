import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="logo "></div>
      <div className="address">
        <div className="location-logo">
          <FaLocationDot />
        </div>
        <div>
          <p className="pin-code">Delivering to Roorkee 247667</p>
          <p className="location">Update location</p>
        </div>
      </div>
      <div className="search-container">
        <div className="search-categories">All</div>
        <input className="search" type="text" placeholder="Search Amazon.in" />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
      <div className="language navItem">EN</div>
      <div className="account-container">
        <p className="signIn">Hello,sign in</p>
        <p className="account">Account & Lists</p>
      </div>
      <div className="order-container">
        <p className="returns">Returns</p>
        <p className="orders">& Orders</p>
      </div>
      <div className="cart navItem">
        <div>
          <FiShoppingCart className="cart-icon" />
        </div>
        <p>Cart</p>
      </div>
    </div>
  );
};
export default NavigationBar;
