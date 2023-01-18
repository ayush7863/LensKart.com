import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import img1 from "./Images/EYE KART.jpg";
import { BsCartCheckFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
// import { FaBeer} from 'react-icons/fa';
const Navbar = () => {
  //   console.log(img1);
  return (
    <div>
      <nav id="navbar">
        <div className="navbar-1">
          <div className="logo">
            <img
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="logo"
            />
          </div>
          <div className="nav-links">
            <ul>
              <Link className="track-order">
                <li>TrackOrder</li>
              </Link>
              <Link className="login" to="/signin">
                <li>SignIn</li>
              </Link>
              <Link className="signup" to="/signup">
                <li>
                  SignUp
                </li>
              </Link>
              <Link className="wishlist">
                <li>
                  <span>
                    <AiOutlineHeart />
                  </span>
                  <span>WishList</span>
                </li>
              </Link>
              <Link className="cart">
                <li>
                  <span className="cart-logo">
                    <BsCartCheckFill />
                  </span>
                  <span>Cart</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-2">
          <div className="navbar-2-1">
            <div id="eyeglasses">eyeglasses</div>
            <div id="computer">computer glasses</div>
            <div id="kids">kids glasses</div>
            <div id="contact">
              contact lenses
              <div>
                {/* <div>
                  <div>Brands</div>
                  <div>Explore By Disposability</div>
                  <div>Explore By Power</div>
                  <div>Explore By Colors</div>
                  <div> Solutions</div>
                </div> */}

                {/* <div>
                  <div>
                    <a href="#">Aqualelns</a>
                    <a href="#">Basuch Lomb</a>
                    <a href="#">Johnson & Johnson</a>
                    <a href="#">Soflens</a>
                    <a href="#">Acuvue</a>
                    <a href="#">Iconnect</a>
                    <a href="#">Alcon</a>
                    <a href="#">Air Optix</a>
                    <a href="#">Pure Vision</a>
                   
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div> */}
              </div>
            </div>
            <div id="sunglasses">sunglasses</div>
            <div id="eye-test">Home eye-test</div>
            <div id="store-locator">store-locator</div>
          </div>
          <div className="navbar-2-2">
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
                alt="n-image1"
              />
            </div>
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
                alt="n-image2"
              />
            </div>
            <div>
              <img
                src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
                alt="n-image3"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
