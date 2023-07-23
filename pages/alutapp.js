import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="ALUTAPP" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>ALUTAPP</h3>
              <div className="industify_fn_breadcrumbs">
                <ul>
                  <li>
                    <Link href="/">
                      <a title="Home">Home</a>
                    </Link>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <Link href="/services">
                      <a title="Services">Metal & Tile Roofing Sheet</a>
                    </Link>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <span className="bread-current">ALUTAPP</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title  */}

        {/* Sidebar Page  */}
        <div className="industify_fn_sidebarpage">
          <div className="container">
            <div className="s_inner">
              {/* Main Sidebar: Left  */}
              <div className="industify_fn_leftsidebar">
                {/* Single Service  */}
                <div className="industify_fn_service_single">
                  {/* <div className="img_holder">
										<img src="img/Teja-Waterproof-UPVC-Roof-Sheet.jpeg" alt="" />
									</div> */}
                  {/* <h3>INTRODUCTION</h3>
                  <div className="desc_holder">
                    <p>
                      Metal Deck Sheets with Strong and Reliable Shear Bond
                      Performance Which Is Augmented By Cross Embossing Located
                      In the Profile. The Composite Floor Profile Offers The
                      Ultimate In The Light Weight Steel Decking Which Reduced
                      Concrete Usage To Provide A Cost Effective And Alternative
                      Floor Solution That Easy To Install.
                    </p>
                  </div> */}

                  <div class="img_holder">
                    <img src="/img/BIMATAPP.jpg" alt="" />
                  </div>

                  <table
                    class="PdtTable"
                    border="0"
                    width="100%"
                    cellspacing="1"
                    cellpadding="5"
                    bgcolor="#666666"
                  >
                    <tbody>
                      <tr>
                        <td valign="top" bgcolor="#FFFFFF" width="30%">
                          <div align="left">
                            <strong>Head Type</strong>
                          </div>
                        </td>
                        <td valign="middle" bgcolor="#FFFFFF" width="70%">
                          <div align="left">Hex Washer Head (HWH)</div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" bgcolor="#FFFFFF" width="30%">
                          <div align="left">
                            <strong>Available Diameter</strong>
                          </div>
                        </td>
                        <td valign="top" bgcolor="#FFFFFF" width="70%">
                          <div align="left">M5.5 (#12) &amp; M6.3 (#14)</div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" bgcolor="#FFFFFF" width="30%">
                          <div align="left">
                            <strong>Point Type</strong>
                          </div>
                        </td>
                        <td valign="top" bgcolor="#FFFFFF">
                          <div align="left">
                            LEVIN<sup>®</sup> Drill Point / &nbsp;LEVIN
                            <sup>®5</sup> Drill Point
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" bgcolor="#FFFFFF">
                          <div align="left">
                            <strong>Steel Penetration</strong>
                          </div>
                        </td>
                        <td valign="top" bgcolor="#FFFFFF">
                          <div align="left">
                            MAX 5.0mm thick / MAX 12.5mm thick
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" bgcolor="#FFFFFF">
                          <div align="left">
                            <p>
                              <strong>Washer Option</strong>
                            </p>
                          </div>
                        </td>
                        <td valign="top" bgcolor="#FFFFFF">
                          <div align="left">
                            Φ16mm ALU/SS Bonded EPDM washer
                          </div>
                          <div align="left">
                            Φ19mm ALU/SS Bonded EPDM washer
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" bgcolor="#FFFFFF">
                          <div align="left">
                            <p>
                              <strong>Adapter to use</strong>
                            </p>
                          </div>
                        </td>
                        <td valign="top" bgcolor="#FFFFFF">
                          <div align="left">
                            CORROSHIELD<sup>®</sup>&nbsp;Hi – Torque magnetic
                            Hex socket
                          </div>
                          <div align="left">
                            <img
                              loading="lazy"
                              class="alignnone size-full wp-image-1223"
                              src="https://asons.in/wp-content/uploads/2016/05/bimaatapp.jpg"
                              alt=""
                              width="220"
                              height="59"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="img_holder" style={{ width: "50%" }}>
                    <img src="/img/bimatapp-crest.png" alt="" />
                  </div>

                  {/* <p style={{ fontSize: "18px", marginTop: "-20px" }}>
                    Also the traditional Cold storage sectors & Modern Cold
                    chain demands including Fruits, Vegetables, Dairy & Allied
                    Products, Meat & Poultry, Sea Food, Food Processing,
                    Beverages, Cold logistics, etc.
                  </p> */}

                  {/* /Get Random Services  */}
                </div>
                {/* /Single Service  */}
              </div>
              {/* /Main Sidebar: Left  */}

              {/* Main Sidebar: Right  */}
              <div className="industify_fn_rightsidebar">
                {/* Service List  */}
                <div className="service_list_as_function">
                  <div className="title">
                    <h3>Full list of Services</h3>
                  </div>
                  <div className="list_holder">
                    <ul>
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
                  </div>
                </div>
                {/* /Service List  */}

                {/* Get Sidebar  */}
                <Sidebar />
                {/* /Get Sidebar  */}
              </div>
              {/* Main Sidebar: Right  */}
            </div>
          </div>
        </div>
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
