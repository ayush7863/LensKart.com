import React from "react";
import "./Home.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Footer from "../Footer/Footer";

const SliderData = [
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Jan23/23jan/hooper/hooper-web.jpg",
  },
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
  },
  {
    image: "https://static1.lenskart.com/media/desktop/img/Jan23/desktoop.gif",
  },
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Dec22/new-collection/desktop.gif",
  },
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Dec22/blend-edit/web.jpg",
  },
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Nov22/airplay/desk-play.jpg",
  },
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Jan23/helios-plp/web%20banner.gif",
  },
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif",
  },
  {
    image:
      "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
  },
];

const Home = () => {
  const [current, setCurrent] = React.useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  //    console.log(current)
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
    <div>
      <div>
        <div className="first-section">
          <div className="eyeglass">
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png"
                alt="avatar-1"
              />
            </div>
            <div>EyeGlasses</div>
          </div>
          <div className="eyeglass">
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
                alt="avatar-2"
              />
            </div>
            <div>SunGlasses</div>
          </div>
          <div className="eyeglass">
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png"
                alt="avatar-3"
              />
            </div>
            <div>Computer Glasses</div>
          </div>
          <div className="eyeglass">
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/Apr22/d.png"
                alt="avatar-4"
              />
            </div>
            <div>Contact Lenses</div>
          </div>
          <div className="eyeglass">
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/Apr22/e2.png"
                alt="avatar-5"
              />
            </div>
            <div>Power Glasses</div>
          </div>
          <div className="eyeglass">
            <div>
              <img
                src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
                alt="avatar-6"
              />
            </div>
            <div>Progressive Lenses</div>
          </div>
        </div>
        <div className="second-section">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt="slideshow"
                    className="slide-image"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="third-section">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
            alt="third-section"
          />
        </div>
        <div className="fourth-section">
          <div>
            <h1>WEAR</h1>
            <h1>THE</h1>
            <h1>TREND</h1>
            <p>Our Hottest Collections</p>
          </div>
          <div>
            <div>
              <div>
                <img
                  src="https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg"
                  alt="fourth-section"
                />{" "}
                Blend Edit
              </div>
              <div>
                <button>Explore</button>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg"
                  alt="fourth-section"
                />
                Air Clip On{" "}
              </div>
              <div>
                <button>Explore</button>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg"
                  alt="fourth-section"
                />
                Air Flex
              </div>
              <div>
                <button>Explore</button>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg"
                  alt="fourth-section"
                />
                Retro Aviator
              </div>
              <div>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
        <div className="fifth-section">
          <div>
            <hr />
            <h1>As Seen on Shark Tank</h1>
            <hr />
          </div>
          <div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
              alt="fifth-section"
            />
          </div>
        </div>
        <div className="sixth-section">
          <div>
            <hr />
            <h1>Trending Sunglasses</h1>
            <hr />
          </div>
          <div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
              alt="sixth-section"
            />
          </div>
        </div>
        <div className="seventh-section">
          <div>
            <hr />
            <h1>As Seen On Kiara</h1>
            <hr />
          </div>
          <div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg"
              alt="seventh-section"
            />
          </div>
        </div>
        <div className="eight-section">
          <div>
            <hr />
            <h1>Aquacolor - Glam Up With Color Lenses</h1>
            <hr />
          </div>
          <div>
            <img
              src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
              alt="eight-section"
            />
          </div>
        </div>
        <div className="ninth-section">
          <div>
            <div>
              <hr />
              <h1>Aquacolor - Glam Up With Color Lenses</h1>
              <hr />
            </div>
          </div>
          <div>
            {/* <div id="f-div"><img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg" alt="ninth-section"/></div>
            <div><img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" alt="ninth-section"/></div>
            <div><img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="ninth-section"/></div>
            <div><img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="ninth-section"/></div>
            <div><img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="ninth-section"/></div>
            <div><img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="ninth-section"/></div> */}
             <div><img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg" alt="ninth-section"/></div>
             <div><img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" alt="ninth-section"/></div>
             <div><img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="ninth-section"/></div>
             <div><img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="ninth-section"/></div>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
