import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="Deck Sheet" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>Deck Sheet</h3>
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
                    <span className="bread-current">Deck Sheet</span>
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
                  <h3>INTRODUCTION</h3>
                  <div className="desc_holder">
                    <p>
                      Metal Deck Sheets with Strong and Reliable Shear Bond
                      Performance Which Is Augmented By Cross Embossing Located
                      In the Profile. The Composite Floor Profile Offers The
                      Ultimate In The Light Weight Steel Decking Which Reduced
                      Concrete Usage To Provide A Cost Effective And Alternative
                      Floor Solution That Easy To Install.
                    </p>
                  </div>

                  <div class="img_holder">
                    <img src="/img/Deck-Sheet-II-Specification.png" alt="" />
                  </div>

                  <table class="table">
                    <thead>
                      <tr>
                        <th>Nominal Thickness!</th>
                        <th>Design Thickness</th>
                        <th>Profile Weight </th>
                        <th>Area Of Steel</th>
                        <th>Height Of Neutral Axis </th>
                        <th>Moment Of Lnertia</th>
                        <th colspan="2">
                          Moment Carrying Capacity <br /> Sagging <br /> Hogging{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mm</td>
                        <td>Mm</td>
                        <td>Kn/M²</td>
                        <td>Mm²/M</td>
                        <td>Mm</td>
                        <td>Cm/M</td>
                        <td>Kn.M/M</td>
                        <td>Kn.M/M</td>
                      </tr>
                      <tr>
                        <td>0.8</td>
                        <td>0.76</td>
                        <td>0.082</td>
                        <td>1041</td>
                        <td>24.69</td>
                        <td>46.04</td>
                        <td>4.66</td>
                        <td>4.55</td>
                      </tr>
                      <tr>
                        <td>1.0</td>
                        <td>0.96</td>
                        <td>0.103</td>
                        <td>1302</td>
                        <td>24.79</td>
                        <td>57.55</td>
                        <td>5.80</td>
                        <td>5.71</td>
                      </tr>
                      <tr>
                        <td>1,2</td>
                        <td>1.16</td>
                        <td>0.124</td>
                        <td>1562</td>
                        <td>24.89</td>
                        <td>69.06</td>
                        <td>6.94</td>
                        <td>6.88</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="col-sm-12">
                    <table>
                      <thead>
                        <tr>
                          <th rowspan="4">Span In Meters</th>
                          <th rowspan="1">Thickness</th>
                          <th colspan="10">
                            Load Carrying Capacity For Various Spans In Kg
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowspan="0"></td>
                          <td rowspan="1"></td>
                          <td>1.0 Mtr</td>
                          <td>1.2 Mtr</td>
                          <td>1.4 Mtr</td>
                          <td>1.6 Mtr</td>
                          <td>1.8 Mtr</td>
                          <td>2.0 Mtr</td>
                        </tr>
                        <tr>
                          <td>0.8</td>
                          <td>2009</td>
                          <td>139</td>
                          <td>102</td>
                          <td>78</td>
                          <td>62</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>1.0</td>
                          <td>2512</td>
                          <td>174</td>
                          <td>128</td>
                          <td>98</td>
                          <td>77</td>
                          <td>62</td>
                        </tr>
                        <tr>
                          <td>1.2</td>
                          <td>2936</td>
                          <td>203</td>
                          <td>149 </td>
                          <td>114</td>
                          <td>90</td>
                          <td>73</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <br />
                  <h3>Application</h3>
                  <div class="list">
                    <ul>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>High load bearing capacity at low weight</p>
                        </div>
                      </li>
                      {/* <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Excellent and durable thermal insulation</p>
                        </div>
                      </li> */}
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Absolute water and vapour barrier</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>
                            Excellent air tightness and free of thermal bridges
                            which results in considerable energy savings.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>
                            Surface finished facings providing resistance to
                            weather and aggressive environments
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>
                            Capacity for rapid erection without lifting
                            equipments; easier installation in hostile weather
                            conditions
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h3>Application</h3>
                  {/* Check List Shortcode  */}
                  <div className="fn_cs_check_list">
                    <div className="list">
                      <ul>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>High Rise Building</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>Apartments</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>Ware Houses </p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>Infrastructures </p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>Automobiles</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <p style={{ fontSize: "18px", marginTop: "-20px" }}>
                    Also the traditional Cold storage sectors & Modern Cold
                    chain demands including Fruits, Vegetables, Dairy & Allied
                    Products, Meat & Poultry, Sea Food, Food Processing,
                    Beverages, Cold logistics, etc.
                  </p> */}

                  <br />
                  <h3>Accessories</h3>
                  {/* Check List Shortcode  */}
                  <div className="fn_cs_check_list">
                    <div className="list">
                      <ul>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>RIDGES</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>FLASHING</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>GABLE WALL</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>RAIN WATER GUTTER</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>SDS SCREWS</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    data-html="includes/random-service.html"
                    data-index="1"
                    data-count="2"
                  ></div>
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
