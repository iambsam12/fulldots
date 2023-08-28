import React, { useState, useEffect } from "react";
import "./estyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header1 from "../nav/Header1";
import Header from "../nav/Header";
import Footer from "../nav/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../components/store/asyncAction/NewsAction";

const Homeeng = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { news, loading } = useSelector((state) => state.NewsReducer);
  const dispatch = useDispatch();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1324,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
      },
    ],
  };
  useEffect(() => {
    dispatch(fetchNews());
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <>
      <Header1 />
      <Header />
      <div className="objectives pt-5 pb-5 p-3">
        <div
          className="col-md-10 col-lg-10 offset-md-1 offset-lg-1"
          data-aos="zoom-in"
        >
          <h2 className="text-center mb-3">
            <span>Mission-Vision-Objectives</span>
          </h2>
          <div className="row pt-md-5">
            <div className="col-md-6">
              <img src="./images/mvg.png" className="w-100" alt="" />
            </div>
            <div className="col-md-6 aimage">
              <img
                src="./images/office.jpg"
                alt="about__image"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about-us pt-5 pb-5" data-aos="zoom-in">
        <div className="col-md-10 col-lg-10 offset-md-1 offset-lg-1">
          <h2 className="text-center mb-3">
            <span>Our Introduction</span>
          </h2>
          <div className="pt-md-4 pt-3">
            <div className="row">
              <div className="col-md-6 aimage">
                <img
                  src="./images/office.jpg"
                  alt="about__image"
                  className="w-100"
                />
              </div>
              <div className="col-md-6">
                <div className=" pt-lg-5 mt-lg-3">
                  <p className="ps-3 pe-3">
                    Former Maharanijhoda VDC located in the rural southwest of
                    Jhapa district. At present Small Farmers Development Project
                    has been started in Gauradaha Municipality 4 and 5 by
                    establishing small farmer development project on 10 Kartik
                    2055 BS. The entire project has been registered and handed
                    over from 3rd Baishakh 2060 BS and is being operated under
                    the leadership of women. At present, the organization has 13
                    inter-groups, 339 small farmer groups and 2100 women
                    members.
                  </p>
                  {seeMore ? (
                    <>
                      {" "}
                      <p className="ps-3 pe-3">
                        At the time of its establishment, the organization
                        provided loans for personal business operation to make
                        the share members self-employed by giving priority to
                        membership expansion and capital formation. In the
                        course of progress, organization went ahead by
                        conducting training related to agriculture and also
                        programs related to social, community and cultural
                        protection. The organization is conducting its
                        activities by giving priority to the programs related to
                        agriculture by increasing the number of members,
                        increasing the transactions and also developing the
                        manpower and management capacity. As the main occupation
                        of the share members of the organization is agriculture,
                        the organization has taken the strategy of operating the
                        project through individual, institutional and
                        collaboration between the members and the organization
                        to bring employment and prosperity to the members
                        through the agricultural profession.
                      </p>
                      <p>
                        And the current Gauradaha municipality as well as the
                        entire small farmer development campaign has succeeded
                        in becoming the identity. All the share members of the
                        organization and the committee, sub-committee
                        dignitaries and staff involved in its operation and
                        management. Many people who have personally assisted in
                        the planning and implementation of this campaign have
                        also contributed to bring this identity to this stage of
                        identity. The main objective of this organization is to
                        bring positive change in the economic condition of the
                        members through the programs related to agriculture. The
                        organization has envisioned to be a model cooperative
                        for providing financial and non-financial services to
                        its members, increasing the productivity of agriculture
                        and livestock, modernizing and marketing the products.
                        This organization will mobilize rural savings and
                        agricultural loans in the coming days. The objective is
                        to promote agriculture and livestock production,
                        processing and marketing through the use of new
                        technology and skills. Similarly, the organization will
                        reduce poverty by increasing the production and
                        productivity of agriculture and livestock by developing
                        local labor, skills and capital.
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="see-more">
                    <button
                      className="slide_from_left
                    ms-3 p-2 mt-3"
                      onClick={() => setSeeMore(!seeMore)}
                    >
                      {seeMore ? "See Less" : "See More"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-and-works newks pb-2 pt-4" data-aos="zoom-in">
        <div className="col-md-10 col-lg-10 offset-1">
          <h2 className="text-center mb-4 pt-4">
            <span>News & Events</span>
          </h2>
          <div className="carousel">
            <Slider {...settings}>
              {news.map((n) => {
                if (n.language == "English") {
                  if (n.upcomming == "No") {
                    return (
                      <div key={n._id}>
                        <div className="card">
                          <img
                            src={`/images/${n.image}`}
                            style={{ height: "220px" }}
                            className="w-100"
                            alt="news__image"
                          />
                          <h5>{n.title}</h5>
                          <div className="see-more pb-2">
                            <center>
                              {" "}
                              <button className="slide_from_left p-1 mt-2">
                                <Link
                                  to={`/news-details/${n._id}`}
                                  style={{
                                    color: "#fff",
                                    textDecoration: "none",
                                  }}
                                >
                                  Read More
                                </Link>
                              </button>
                            </center>
                          </div>
                        </div>
                      </div>
                    );
                  } else return;
                } else return;
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="news-and-works pt-5 pt-1 pb-3" data-aos="zoom-in">
        <div className="col-md-10 col-lg-10 offset-1">
          <h2 className="text-center mb-4 pt-2">
            <span>Announcement & Upcoming Events</span>
          </h2>
          <div className="carousel">
            <Slider {...settings}>
              {news.map((n) => {
                if (n.language == "English") {
                  if (n.upcomming === "Yes") {
                    return (
                      <div key={n._id}>
                        <div className="card">
                          <img
                            src={`/images/${n.image}`}
                            style={{ height: "220px" }}
                            className="w-100"
                            alt="news__image"
                          />
                          <h5>{n.title}</h5>
                          <div className="see-more pb-2">
                            <center>
                              {" "}
                              <button className="slide_from_left p-1 mt-2">
                                <Link
                                  to={`/news-details/${n._id}`}
                                  style={{
                                    color: "#fff",
                                    textDecoration: "none",
                                  }}
                                >
                                  Read More
                                </Link>
                              </button>
                            </center>
                          </div>
                        </div>
                      </div>
                    );
                  } else return;
                } else return;
              })}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homeeng;
