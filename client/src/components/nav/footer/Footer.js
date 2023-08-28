import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import location from "../../../img/loct.png";
const Footer = () => {
  return (
    <footer className="site-footer p-1">
      <div className="container pt-5 pb-5">
        <div id="footer-widgets">
          <div className="row">
            <div className="col-md-4 col-sm-6 widget-container">
              <div id="text-2" className="widget widget_text">
                <h3 className="footer-widget-title">
                  <span>About Us</span>
                </h3>
                <span className="underline left" />
                <div className="textwidget">
                  झापा जिल्लाको पश्चिम दक्षिणको ग्रामिण भेगमा स्थित साविक
                  महारानीझोडा गा.वि.स. हाल गौरादह नगरपालिका ४ र ५ मा २०५५ साल
                  कार्तिक १० मा साना किसान विकास आयोजनाको स्थापना गरी साना किसान
                  परिवारका महिलाहरु लाई समुहमा आवद्ध गराई प्रारम्भ गरेको
                  कार्यक्रम समय र विकासक्रम तथा सदस्यहरुको चाहाना अनुसार २०५९
                  पौष १७ मा डिभिजन सहकारी कार्यलयमा विधिवत् रुपमा साना किसान
                  सहकारी संस्था लि. दर्ता गरि उक्त आयोजनाको सम्पूर्ण कारोवार
                  २०६० वैशाख ३ बाट हस्तान्तरण गरि महिलाहरुकै नेत्तृत्वमा संचालित
                  छ ।
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 widget-container">
              <div id="nav_menu-2" className="widget widget_nav_menu">
                <h3 className="footer-widget-title">
                  <span>Quick Links</span>
                </h3>
                <span className="underline left" />
                <div className="menu-quick-links-container">
                  <ul id="menu-quick-links" className="menu">
                    <li>
                      <a href="https://www.skbbl.com.np/" target="__blank">
                        साना किसान विकास लघुवित्त वित्तीय संस्था लि.
                      </a>
                    </li>
                    <li>
                      <a href="https://gauradahamun.gov.np/" target="__blank">
                        गौरादह नगरपालिका, नगर कार्यपालिकाको कार्यालय
                      </a>
                    </li>
                    <li>
                      <a href="https://www.naccfl.org.np/" target="__blank">
                        नेपाल कृषि सहकारी केन्द्रीय संघ लि.
                      </a>
                    </li>
                    <li>
                      <a href="https://molcpa.gov.np/home" target="__blank">
                        भूमि व्यवस्था,सहकारी तथा गरिबी निवारण मन्त्रालय
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 widget-container">
              <div id="nav_menu-2" className="widget widget_nav_menu">
                <h3 className="footer-widget-title">
                  <span>Contact Us</span>
                </h3>
                <span className="underline left" />
                <address>
                  <div className="info">
                    <i className="fa fa-location-arrow" />
                    <span>गौरादह-5,झापा ,नेपाल</span>
                  </div>
                  <div className="info">
                    <i className="fa fa-envelope" />
                    <span>sfaclmaharanijhoda@gmail.com</span>
                  </div>
                  <div className="info">
                    <i className="fa fa-phone" />
                    <span>023-419017</span>
                  </div>
                </address>
                <h3 className="footer-widget-title">
                  <span>Social Links</span>
                </h3>
                <span className="underline left" />
                <address className="fsocial">
                  <div className="info">
                    <a
                      href="https://www.facebook.com/maharanijhodasanakisan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fab fa-facebook-f"
                        style={{ fontSize: "22px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="info">
                    <i
                      className="fab fa-whatsapp"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                  <div className="info">
                    <i
                      className="fab fa-instagram"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </div>
                </address>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 widget-container">
              <div className="widget twitter-widget">
                <h3 className="footer-widget-title">
                  <span>Our Loaction</span>
                </h3>
                <span className="underline left" />
                <a
                  href="https://www.google.com/maps/place/%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A5%80%E0%A4%9D%E0%A5%8B%E0%A4%A1%E0%A4%BE+%E0%A4%B8%E0%A4%BE%E0%A4%A8%E0%A4%BE+%E0%A4%95%E0%A4%BF%E0%A4%B8%E0%A4%BE%E0%A4%A8+%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%BF+%E0%A4%B8%E0%A4%B9%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80+%E0%A4%B8%E0%A4%82%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE+%E0%A4%B2%E0%A4%BF/@26.5676999,87.6834271,19z/data=!3m1!4b1!4m5!3m4!1s0x39e585ab18d44a55:0xdd5b1594054161da!8m2!3d26.5676999!4d87.6834271"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={location}
                    className="w-100 ps-3 pe-3"
                    alt="location"
                  />
                </a>
              </div>
            </div>
            <div className="clearfix hidden-lg hidden-md hidden-xs tablet-margin-bottom" />
          </div>
        </div>
      </div>
      <hr style={{ width: "90%", margin: "auto", color: "#000" }} />
      <div className="powered pt-3">
        <p>&copy;2022 महारानीझोडा साना किसान कृषि सहकारी संस्था लि.</p>
        <p>
          Powered by{" "}
          <a
            href="https://www.sinepal.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "green" }}
          >
            {" "}
            smart innovation
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
