import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="Stone Coated Roofing Sheet" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>Stone Coated Roofing Sheet</h3>
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
                      Stone Coated Roofing Sheet
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
                  <h4>Introduction</h4>

                  {/* <div className="desc_holder">
										<p>Colour coated also known as powder coated sheets / pre-painted sheets and various other names, they are the next generation sheets used for industrial roofing and cladding. It is an alternate and better product for galvanized sheet. There are various types of colour coated sheets:</p>
									</div> */}

                  <div class="desc_holder">
                    <p>
                      Stone Coated Steel Roof is a world famous, unbelievably
                      light roofing system that can enhance the look of your
                      roof with its elegant design and great color range. Stone
                      Coated Steel Roof is designed and manufactured to
                      withstand all kinds of severe weather such as extreme hot
                      and cold weather, strong wind, and heavy rain.Stone Coated
                      Steel Roof can protect your home against all the
                      destructive forces of nature because the tiles are
                      designed to overlap and interlock into a horizontal fix
                      system. Stone Coated Steel Roof is a product that can
                      enhance the style of any home or commercial building and
                      give it a lasting beautiful look.
                    </p>
                  </div>

                  <div class="fn_cs_check_list">
                    <h3>Specification</h3>
                    <h6>CROSS SECTION OF STONE COATED STREEL ROOFING TILE :</h6>
                  </div>

                  <div class="img_holder">
                    <img src="/img/cross.jpeg" alt="" />
                  </div>

                  {/* <div className='fn_cs_check_list bullet-point'> */}
                  <h3>Advantages</h3>
                  <div class="list">
                    <ul>
                      {/* <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Light Weight</p></div></li> */}
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Easy Handling</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>ExcellenT Color And Design</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Outstanding Durability</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* </div> */}

                  <h3>Applications</h3>
                  <div class="list">
                    <ul>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Gazebos</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Farmhouses</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Residential Shades</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>School And University</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Clubhouse and Community Center</p>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <span class="material-symbols-outlined arrow">
                            arrow_forward
                          </span>
                          <p>Five Star Hotels And Resort Beaches</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h3>Accessories</h3>
                  {/* Check List Shortcode  */}
                  <div className="fn_cs_check_list">
                    <div className="list">
                      <ul>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>SDS SCREWS</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>RIDGES</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <div class="fn_cs_check_list "><h3>Applications</h3>
                                    <div class="desc_holder">
                                    <p>Aluminium, a versatile metal, is increasingly finding widespread use, due to its unique qualities.</p>
                                    </div>
                                    <div class="row">
                                    <div class="col-sm-3">
                                    <div class="advantages-box text-center">
                                    <img src="/img/icon1.jpeg" alt="" />
                                    <h3>DURABLE</h3>
                                    <p>Because they are made from the original 3105 aluminium alloy, Oralium roofing sheets ensure maximum durability.</p>
                                    </div>
                                    </div><div class="col-sm-3"><div class="advantages-box text-center"><img src="/img/icon2.jpeg" alt="" /><h3>THERMAL INSULATION</h3><p>Oralium reflects radiant heat to a great extent owing to purity and perfect chemical treatment with low thermal emissivity.</p></div>
                                    </div>
                                    <div class="col-sm-3"><div class="advantages-box text-center"><img src="/img/icon2.jpeg" alt="" /><h3>LOW MAINTENANCE COSTS</h3><p>Built to last, Oralium is made of superior quality aluminium alloys. Only highly durable materials have gone into its composition. Consequently, your Oralium Roofing Sheets require no maintenance.</p></div></div><div class="col-sm-3"><div class="advantages-box text-center"><img src="/img/icon4.jpeg" alt="" /><h3>LIGHT ON SUB-STRUCTURES</h3><p>Oralium is lighter on sub-structures compared to the sub-structure of asbestos or steel roofing sheets.</p></div></div></div><div class="row"><div class="col-sm-3"><div class="advantages-box text-center"><img src="/img/icon1.jpeg" alt="" /><h3>EASY INSTALLATION</h3><p>Since Oralium is lightweight, it makes for lighter and stronger structures and renders easy installation at cheaper costs.</p></div></div><div class="col-sm-3"><div class="advantages-box text-center"><img src="/img/icon2.jpeg" alt="" /><h3>FIRE RESISTANT</h3><p>A safe bet, Oralium Aluminium Sheets are non-combustible and non-sparking. Non-flammability is an important attribute.</p></div></div><div class="col-sm-3"><div class="advantages-box text-center"><img src="/img/icon3.jpeg" alt="" /><h3>LIGHTWEIGHT</h3><p>Oralium Aluminium alloy sheets are only about 2.70gm/cm3 dense. Being so light, yet strong and manageable makes them perfectly suitable for large and small roofing and cladding purposes.</p></div></div><div class="col-sm-3"><div class="advantages-box text-center"><img src="/img/icon4.jpeg" alt="" /><h3>CORROSION RESISTANT</h3><p>Corrosion resistance comes into play in wet weather and coastal areas, where Oralium roofing sheets ensure long-lasting performance. Oralium resists airborne chemical agents and salt spray which are common in industrial and coastal areas.</p></div></div></div></div>

                                    <div class="fn_cs_check_list "><h3>Profiles</h3><div class="row"><div class="col-sm-6 text-center"><img src="/img/Oralium-Grantile.jpeg" alt="" /><h3>Oralium Grantile</h3></div><div class="col-sm-6 text-center"><img src="/img/Oralium-Strong.jpeg" alt="" /><h3>Oralium Strong</h3></div></div></div> */}
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
									</div> */}
                  {/* 
                                    <div class="fn_cs_check_list"><h3>Specification</h3><h6>Durability</h6><div class="desc_holder"><p>Aluminium being weather-proof and corrosion-resistant ensures lasting and optimal performance.</p></div><h6>Flexibility</h6><div class="desc_holder"><p>Because of its inherent complementary properties, Aluminium can be easily shaped, which gives it unmatched design potential.</p></div><h6>Strength</h6><div class="desc_holder"><p>Aluminium is at once lightweight and strong. Its alloys are as strong as steel, while being one-third in weight.</p></div><h6>Corrosive Resistance</h6><div class="desc_holder"><p>Its natural oxide coating helps Aluminium to resist harsh weather conditions.</p></div><h6>Insular</h6><div class="desc_holder"><p>The insulated cladding of aluminium performs better than uninsulated timber cladding, brick, or stone masonry.</p></div><h6>Recyclability</h6><div class="desc_holder"><p>Nearly all of the Aluminium till in use has been recycled. This is because Aluminium is 100% recyclable. This makes it the most environment-friendly metal.</p></div><h6>Thermal Efficiency</h6><div class="desc_holder"><p>Aluminium has excellent thermal insulation and thermal efficiency properties. A factor that comes in handy in commercial structures, through cutting down on high operating costs of air conditioning.</p></div><h6>Fire Safety</h6><div class="desc_holder"><p>Aluminium is non-combustible, and since it does not burn, it is indispensable in construction material.</p></div><h6>Minimal Maintenance</h6><div class="desc_holder"><p>Because of all these latent properties, Aluminium roofing sheets require only minimal maintenance.</p></div></div> */}

                  {/* <h3>Accessories</h3>
									<div className="fn_cs_check_list">
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>SDS SCREENS</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>PROFILED EMBORSED & COMPACT SHEETS</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>CABLE WALL</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>RAIN WATER CUTTER</p>
													</div>
												</li>
											</ul>
										</div>
									</div> 

									 */}

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
