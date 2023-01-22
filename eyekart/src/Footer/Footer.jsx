import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div>
          <h1>Buy The Best Eyewear From Lenskart</h1>
          <p>
            Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It
            Has Revolutionised The Eyewear Industry In The Country With Its
            Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores
            Across Major Cities In The Country To Innovative Integration Of
            Technology While Purchasing Online, Lenskart Caters To Every
            Customer With Several Deals And Offers.
          </p>
          <p>
            A One-Stop Online Solution For Purchasing Eyewear And Its
            Accessories, Lenskart Delivers Them Right At Your Doorstep With
            Convenient Methods Of Payment. Sunglasses As Well As Eyeglasses Are
            Available For Men And Women In A Diverse Array Of Styles And Trendy
            Colours. If You Want To Try Out Contact Lenses, Pick The Ones Of
            Your Choice From The Extensive Variety Of Coloured Contact Lenses
            From Our Online Store.
          </p>
        </div>
        <div>
          <div>
            <div>
                <h2>Services</h2>
                <p>Store Locator</p>
                <p>Enter My Power</p>
                <p>Buying Guide</p>
                <p>Frame Size</p>
            </div>
            <div>
                <h2>About Us</h2>
                <p>We Are Hiring</p>
                <p>Refer & Earn </p>
                <p>About Us </p>
                <p>Lenskart Coupons</p>
            </div>
            <div>
                <h2>Help</h2>
                <p>FAQ's</p>
               
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.lenskart.com/media/desktop/img/play-store.svg"
                alt="footer-section"
              />
              <img
                src="https://static.lenskart.com/media/desktop/img/app-store.svg"
                alt=""
              />
            </div>
            <div>
               <p>Download Lenskart App to buy<br/>Eyeglasses, Sunglasses and Contact Lenses</p>
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Footer;
