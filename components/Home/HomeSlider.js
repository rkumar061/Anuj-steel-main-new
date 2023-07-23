import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Images imported
const slider1 = "/img/home/banner-1.jpg";
const slider2 = "/img/home/banner-4.jpg";
const slider3 = "/img/home/banner-3.jpg";
const slider4 = "/img/home/banner-4.jpg";
const slider5 = "/img/home/banner-5.jpg";

export default function HomeSlider() {
  return (
    <>
      <div
        className="industify_slider_alpha"
        data-desc-show="yes"
        data-category-show="yes"
        data-nav-types="square"
        data-autoplay-switch="enabled"
        data-autoplay-time="8000"
        data-effect="cards"
        data-progress="enabled"
        data-box-pos="cr"
        data-img-effect="enabled"
        data-text-effect="enabled"
      >
        {/* <!-- Alpha Slider: navigation --> */}
        <div className="owl_control">
          <div className="fn_prev">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
          <div className="fn_next">
            <span>
              <span className="a"></span>
              <span className="b"></span>
              <span className="c"></span>
            </span>
          </div>
        </div>
        {/* <!-- /Alpha Slider: navigation --> */}

        {/* <!-- Alpha Slider: pagination --> */}
        <div className="swiper-pagination"></div>
        {/* <!-- /Alpha Slider: pagination --> */}

        {/* <!-- Alpha Slider: wrapper --> */}
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          autoplaydisableoninteraction={false}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".fn_prev",
            nextEl: ".fn_next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="custom-class"
        >
          <SwiperSlide>
            <div className="item">
              <div
                className="img_holder"
                style={{ backgroundImage: `url(${slider1})` }}
              ></div>
              <div className="title_holder">
                <div className="inner">
                  <div className="in">
                    <p>{/* <span>Industry</span> */}</p>
                    <h3>
                      <span>Spanish Tile Sheet</span>
                    </h3>
                    <div className="desc">
                      <span>
                        The ASA is a Spanish style synthetic resin roof tile
                        made from ternary polymer co-extruded by three kinds fo
                        materials: acrylonitrile, styrene and acrylate.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div
                className="img_holder"
                style={{ backgroundImage: `url(${slider2})` }}
              ></div>
              <div className="title_holder">
                <div className="inner">
                  <div className="in">
                    <p>{/* <span>Construction</span> */}</p>
                    <h3>
                      <span>Polycarbonate Sheet</span>
                    </h3>
                    <div className="desc">
                      <span>
                        Polycarbonate is a polymer with a unique blend of
                        desirable properties. This polymer can be given shape by
                        different processes, which include injection molding,
                        blow molding, extrusion -and thermoforming.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div
                className="img_holder"
                style={{ backgroundImage: `url(${slider3})` }}
              ></div>
              <div className="title_holder">
                <div className="inner">
                  <div className="in">
                    <p>{/* <span>Modern</span> */}</p>
                    <h3>
                      <span>Euro Guard Rain Water Gutter</span>
                    </h3>
                    <div className="desc">
                      <span>
                        Modern, architecturally designed homes require a gutter
                        with simple, clean and refined lines. EURO GUARD
                        HYSQUARE rainwater gutter features the latest cutting
                        edge styling.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div
                className="img_holder"
                style={{ backgroundImage: `url(${slider4})` }}
              ></div>
              <div className="title_holder">
                <div className="inner">
                  <div className="in">
                    <p>{/* <span>Technology</span> */}</p>
                    <h3>
                      <span>Color Coated Tile Sheet</span>
                    </h3>
                    <div className="desc">
                      <span>
                        Colour coated also known as powder coated sheets /
                        pre-painted sheets and various other names, they are the
                        next generation sheets used for industrial roofing and
                        cladding.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div
                className="img_holder"
                style={{ backgroundImage: `url(${slider5})` }}
              ></div>
              <div className="title_holder">
                <div className="inner">
                  <div className="in">
                    <p>{/* <span>Construction</span> */}</p>
                    <h3>
                      <span>Sandwich Puff Panel</span>
                    </h3>
                    <div className="desc">
                      <span>
                        High load bearing capacity at low weight. Excellent and
                        durable thermal insulation. Absolute water and vapour
                        barrier.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <!-- Alpha Slider: wrapper --> */}
      </div>
      {/* <!-- /Alpha Slider --> */}
    </>
  );
}
