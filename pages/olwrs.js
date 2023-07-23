import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="Onduline Light Weight Roofing Sheet" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>Onduline Light Weight Roofing Sheet</h3>
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
                    <span className="bread-current">
                      Onduline Light Weight Roofing Sheet
                    </span>
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

                  <div class="img_holder">
                    <img src="/img/onduline-duro.png" alt="" />
                  </div>
                  <h3>INTRODUCTION</h3>
                  <div className="desc_holder">
                    <p>
                      Onduline proposes opaque roofing solutions for all
                      sectors, both for new building and for renovation. We
                      offer a large choice of opaque roofing materials to match
                      all your needs, with a variety of designs and aesthetic
                      finishes, from large roofing sheets to smaller tiles or
                      shingles, and waterproofing membranes for pitched and flat
                      roofs. We also propose over-roofing solutions, a roof over
                      the roof to avoid leakages and improve the comfort inside.
                    </p>
                  </div>

                  {/* <div class="img_holder"><img src="/img/Deck-Sheet-II-Specification.png" alt="" /></div>

                                    <table class="table"><thead>
                                    <tr>
                                    <th>Nominal Thickness!</th><th>Design Thickness</th>
                                    <th>Profile Weight </th><th>Area Of Steel</th>
                                    <th>Height Of Neutral Axis </th><th>Moment Of Lnertia</th>
                                    <th colspan="2">Moment Carrying Capacity <br /> Sagging  <br /> Hogging </th>
                                    </tr>
                                    </thead><tbody><tr><td>Mm</td><td>Mm</td><td>Kn/M²</td><td>Mm²/M</td><td>Mm</td><td>Cm/M</td><td>Kn.M/M</td><td>Kn.M/M</td></tr><tr><td>0.8</td><td>0.76</td><td>0.082</td><td>1041</td><td>24.69</td><td>46.04</td><td>4.66</td><td>4.55</td></tr><tr><td>1.0</td><td>0.96</td><td>0.103</td><td>1302</td><td>24.79</td><td>57.55</td><td>5.80</td><td>5.71</td></tr><tr><td>1,2</td><td>1.16</td><td>0.124</td><td>1562</td><td>24.89</td><td>69.06</td><td>6.94</td><td>6.88</td></tr></tbody></table>

                                    <div class="col-sm-12"><table><thead><tr><th rowspan="4">Span In Meters</th><th rowspan="1">Thickness</th><th colspan="10">Load Carrying Capacity For Various Spans In Kg</th></tr></thead><tbody><tr><td rowspan="0"></td><td rowspan="1"></td><td>1.0 Mtr</td><td>1.2 Mtr</td><td>1.4 Mtr</td><td>1.6 Mtr</td><td>1.8 Mtr</td><td>2.0 Mtr</td></tr><tr><td>0.</td><td>2009</td><td>139</td><td>102</td><td>78</td><td>62</td><td>50</td></tr><tr><td>1.</td><td>2512</td><td>174</td><td>128</td><td>98</td><td>77</td><td>62</td></tr><tr><td>1.</td><td>2936</td><td>203</td><td>149 </td><td>114</td><td>90</td><td>73</td></tr></tbody></table></div> */}

                  <br />
                  <h3>Advantages</h3>
                  <h5>Onduline Duro</h5>
                  <div class="list">
                    <ul>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>
                            Lightweight and ideal for all types of applications.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>High wind resistant</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Thermal and acoustic comfort</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Waterproofing Guaranteed</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>10% Higher coverage surface</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Eco-friendly and safe</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* <h5>Onduvilla Tile</h5>
                                    <div class="list"><ul>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Length: 1070 mm</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Height: 400 mm</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Thickness: 3 mm</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Surface per tile: 0.31 m2</p></div></li>
									</ul></div> */}

                  {/* <h3>Products</h3> */}
                  {/* Check List Shortcode  */}
                  {/* <div className="fn_cs_check_list">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>ONDULINE SHEETS</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>ONDUVILLA TILES</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}

                  <h3>Accessories</h3>
                  <div class="list">
                    <ul>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Housing</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Leisure housing</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Public access</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Auxiliaries</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Check List Shortcode  */}

                  {/* Check List Shortcode 
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Preconstruction &amp; Consulting</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Small Projects &amp; Maintenance</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Leed &amp; Green Building</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Design Build</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Adaptive Reuse</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>New Construction</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Interiors</p>
													</div>
												</li>
											</ul>
										</div>
									</div> */}
                  {/* Check List Shortcode  */}

                  {/* <h3>SPECIFICATION</h3>

									<h6>GLX SHEETS</h6>
									<div className="desc_holder">
										<p>The sheets which are made up of aluminium, Zinc/Magnesium & silicon in the ration of 55:43.5:1.5 % respectively. GLX is an alloy of aluminium, zinc & magnesium which has good strength and durability more than galvalume sheets.</p>
									</div>

									<h6>PPGL SHEETS</h6>
									<div className="desc_holder">
										<p>It stands for Pre-Painted Galvalume Sheets which are made up of aluminium, Zinc & silicon in the ration of 55:43.5:1.5 % respectively. Galvalume is an alloy of aluminium & zinc which has good strength and durability.</p>
									</div>

									<h6>BGL SHEETS</h6>
									<div className="desc_holder">
										<p>It stands for Bare Galvalume sheets. It has the same properties as PPGL with the same ratio of coating without color. It is mill finish.</p>
									</div>

									<h6>PPGL SHEETS</h6>
									<div className="desc_holder">
										<p>It stands for Pre-Painted Galvanized Iron, typically with a hot dip zinc coated steel substrate. The term is an extension of GI which is a traditional abbreviation for Galvanized Iron. Today the term GI typically refers to essentially pure zinc (&gt;99%) continuously hot dip coated steel, as opposed to batch dip processes</p>
									</div>

									<h3>APPLICATION</h3>
									<div className="fn_cs_check_list">
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Industries</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Warehouse</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Multi Purpose Hall</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Compound Wall</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Commercial Building</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Railway Stations</p>
													</div>
												</li>
											</ul>
										</div>
									</div> 

									<h3>PROFILE / COLOR</h3>
									<br />
									<table class="table"><thead><tr><th>Profile</th><th>Industrial Profile</th><th>Liner Profile</th><th>Mangalur Tile Profile</th><th>Spanish Tile Profile</th><th>Aluminium Profile Sheet</th><th>Aluminium Tile Sheet</th></tr></thead><tbody><tr><td>Brands Available</td><td>Bhushan Power &amp; Steel (Alucolor)</td><td>Bhushan Power &amp; Steel (Alucolor)</td><td>Essar Steel India Ltd.</td><td></td><td>Oralium</td><td>Oralium</td></tr><tr><td></td><td><p>JSW Essar </p><p>Steel India Ltd. </p><p>TATA Bluscope</p></td><td>JSW</td><td>Essar Steel India Ltd. </td><td></td><td></td><td></td></tr><tr><td>Colors available</td><td><p>Mill Finish </p><p> Grey  </p><p>Coffee Brown </p><p>  White </p><p> Brick Red </p><p> Sky Blue</p><p>  Turquoise Blue </p><p> Caulfield Green </p></td><td><p>White </p><p>Brick Red</p><p> Sky Blue</p> </td><td><p>White </p><p>Brick Red</p><p> Sky Blue </p></td><td><p>Grey</p><p>  Red</p><p>  Coffee Brown </p></td><td><p>Mill Finish</p><p>  Brick Red</p><p>  Cool Grey</p><p>  Coffee Brown </p><p> Sky Blue</p><p> Green</p></td><td><p>Brick Red</p><p> Cool Grey</p><p> Coffee Brown</p><p>  Shaded Grey</p><p>  Shaded Red </p><p> Shaded Orange</p> </td></tr></tbody></table> */}

                  {/* Call to Action Shortcode (with corner)  */}
                  {/* <div className="fn_cs_call_to_action corner">
										<div className="container">
											<div className="cta_holder">
												<div className="title_holder">
													<h3>Industify LLC</h3>
													<p>We build your dream house. Contact us for detailed information.</p>
												</div>
												<div className="link_holder">
													<Link href="/contact"><a>Our Responsibility</a></Link>
												</div>
											</div>
										</div>
									</div> */}
                  {/* /Call to Action Shortcode (with corner)  */}

                  {/* Get Random Services  */}
                  {/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
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
