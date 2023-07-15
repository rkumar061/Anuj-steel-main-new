import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";

const background = "img/call.png";

export default function DesktopHeader() {
  const [isActive, setActive] = useState(false);
  const activeTrueFalse = () => setActive(!isActive);
  const [isSelect, setSelect] = useState("USD");

  return (
    <>
      <div className="industify_fn_header">
        {/* <!-- Header: Top Panel --> */}
        <div className="industify_fn_toppanel">
          <div className="left_panel">
            <div className="info">
              <Link href="tel:07787744741">
                <a>(0940) 522 - 955 -8</a>
              </Link>
            </div>
            <div className="info">
              <Link href="mailto:rendycoder.com@gmail.com">
                <a>infol@anujsteel.com</a>
              </Link>
            </div>
            <div className="industify_fn_social_list">
              <ul>
                <li>
                  <Link href="#">
                    <a target="_blank" rel="noreferrer">
                      <Facebook className="fn__svg" />
                    </a>
                  </Link>
                </li>
                {/* <li>
                                    <Link href="#"><a target="_blank" rel="noreferrer">
                                        <Twitter className="fn__svg" />
                                    </a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a target="_blank" rel="noreferrer">
                                        <Instagram className="fn__svg" />
                                    </a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a target="_blank" rel="noreferrer">
                                        <Vk className="fn__svg" />
                                    </a></Link>
                                </li>
                                <li>
                                    <Link href="#"><a target="_blank" rel="noreferrer">
                                        <Linkedin className="fn__svg" />
                                    </a></Link>
                                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Top Panel --> */}

        {/* <!-- Header: Bottom Panel --> */}
        <div className="header_inner">
          <div className="menu_logo">
            <Link href="/">
              <a>
                <img
                  className="desktop_logo"
                  src="img/logo-light.png"
                  alt="Industry HTML Template"
                />
                <img
                  className="desktop_logo_dark"
                  src="img/logo-dark.png"
                  alt="Industry HTML Template"
                />
              </a>
            </Link>
          </div>
          <div className="menu_nav">
            <ul className="industify_fn_main_nav vert_nav">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
                {/* <ul className="sub-menu">
                                    <li><Link href="/"><a>Home Alpha</a></Link></li>
                                    <li><Link href="/index-1"><a>Home Beta</a></Link></li>
                                    <li><Link href="/index-2"><a>Home Gamma</a></Link></li>
                                    <li><Link href="/index-3"><a>Home Delta</a></Link></li>
                                </ul> */}
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="menu-item-has-children">
                <a>Products</a>
                <ul className="sub-menu">
                  <li>
                    <a>METAL & TILE ROOFING SHEET</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/color-coated-sheet-tile">
                          <a>COLOR COATED SHEET & TILE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/oralium-arst">
                          <a>ORALIUM ALUMNIUM ROOFING SHEET & TILE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/sandwich-puf-panel">
                          <a>SANDWICH PUF PANEL (ROOF & WALL)</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/deck-sheet">
                          <a>DECK SHEET</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/olwrs">
                          <a>ONDULINE LIGHT WEIGHT ROOFING SHEET</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/scrs">
                          <a>STONE COATED ROOFING SHEET</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>POLYCARBONATE /UPVC ROOFING SHEET</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/polycarbonate-sheet">
                          <a>POLYCARBONATE SHEET</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pvc-spanish-tile">
                          <a>PVC SPANISH TILE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/upvc">
                          <a>UPVC ROOFING SHEET</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/service-single-7">
                      <a>RUN WATER GUTTER & SOLUTION</a>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/egur">
                          <a>EURO GUARD UPVC RAIN WATER GUTTER</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/service-single-6">
                      <a>INTERIOIR / EXTERIOR CELING PRODUCTS</a>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/acp-sheet">
                          <a>ACP SHEET (ALUMNIUM COMPOSITE PANEL)</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pvc-ceil">
                          <a>PVC CEILING PANEL</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/acrylic-sheet">
                          <a>ACRALIC SHEET</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/frp-sheet">
                          <a>PP / FRP / PVC SHEET & ROLL</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/service-single-5">
                      <a>PLATES & SHEETS</a>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/404">
                          <a>ALUMINIUM COIL / SHEET & CHEQURED PLATE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/galvanised-sheet">
                          <a>GALVANISED (GI) SHEET & COIL</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ms-crc-sheet">
                          <a>MS CRC SHEETS / PLATE & STRUCTURAL STEEL</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/404">
                          <a>STRUCTURAL STEEL</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/service-single-4">
                      <a>ROOFING ACCESSORIES</a>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/404">
                          <a>SDS SCREWS & FASTNERS</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/itav">
                          <a>INDUSTRIAL TURBO AIR VENTILATORS</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/bitument">
                          <a>BITUMEN & BUTYL TAPE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/accessories">
                          <a>ACCESSORIES</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li><Link href="/service-single-3"><a>Housewares &#038; Home Decor</a></Link></li>
                                    <li><Link href="/service-single-2"><a>Textiles &#038; Apparel</a></Link></li>
                                    <li><Link href="/service-single-1"><a>Construction &#038; Engineering</a></Link></li> */}
                </ul>
              </li>
              {/* <li className="menu-item-has-children">
                                <Link href="#"><a>Pages</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/gallery"><a>Gallery</a></Link></li>
                                    <li><Link href="/404"><a>404 Page</a></Link></li>
                                    <li><Link href="/principles"><a>Our Principles</a></Link></li>
                                    <li><Link href="/services"><a>Our Services</a></Link></li>
                                    <li><Link href="/blog-full"><a>Blog Full</a></Link></li>
                                    <li><Link href="/protected"><a>Protected Page</a></Link></li>
                                </ul>
                            </li> */}
              <li>
                <Link href="/downloads">
                  <a>Downloads</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="toll_free_lang">
            {/* <div className="lang_switcher">
                            <span onClick={activeTrueFalse} className="click">{isSelect}</span>
                        </div>
                        <div className={isActive ? "industify_fn_moving_lang opened" : "industify_fn_moving_lang"} style={{ "position": "absolute", "left": "1281.16px", "top": "105.085px" }}>
                            <ul onClick={activeTrueFalse}>
                                <li onClick={() => setSelect("Eng")}><span>Eng</span></li>
                                <li onClick={() => setSelect("Spa")}><span>Spa</span></li>
                                <li onClick={() => setSelect("Rus")}><span>Rus</span></li>
                            </ul>
                        </div> */}
            <div className="toll_free">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <span className="shape3"></span>
              <div className="tf_in">
                <div
                  className="img_holder"
                  style={{
                    backgroundImage: `url(${background})`,
                    fontWeight: "bold",
                  }}
                ></div>
                <p>
                  <span>Toll Free:</span> (0940) 522 - 955 -8
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Bottom Panel --> */}
      </div>
      <div className="my-class"></div>
    </>
  );
}
