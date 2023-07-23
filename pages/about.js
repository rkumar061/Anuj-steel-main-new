import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
// import Sidebar from '../layout/sidebar'
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="Service Single 1" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>About us</h3>
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
                      <a title="Services">About</a>
                    </Link>
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
              <div className="desc_holder" style={{ marginTop: "20px" }}>
                <p>
                  Our Glorious saga since 1990, Anuj Steel Centre has carved a
                  niche in the roofing market. We are the leading authorized
                  Distributors in Kolhapur for many renowned brands like
                  Georoof, Bhushan Power & Steel, Essar (Colour Coated Sheet &
                  Deck Sheet, VMI Plastics Ltd. (Polycarbonate Sheet & Rolls),
                  Euro Guard uPVC Rain Water Gutter, Spanish Tile Sheet, VIVA
                  (Aluminium Composite Panel), Oralium (Aluminium Sheet &
                  Coils), Roofex & Corroshield (SDS Screw), Durastrip (Bitumen
                  Tape) to name a few.
                </p>
                <p>
                  Vast experience & in-depth knowledge of all types of roofing
                  products, that suit the requirements of our clients, we
                  suggest not only the appropriate material but also provide
                  complete roofing solution to our clients with cost effective
                  rates. Our profile sheets are designed keeping in mind all the
                  elements & creating trust with superior products services &
                  ideas not only in Kolhapur but also in rest of Maharashtra,
                  Goa & Karnataka.
                </p>
                <p>
                  With our extensive dealer network, ex. Stock availability,
                  prime location office, manufacturing unit & warehouse with
                  easy transportation facility, experienced team value added
                  services like Pre-sale & Post-sale services. We have covered
                  over more than 5 cr. Sq. ft. of roofing and cladding with over
                  more than 5000 projects completed in the past 3 decades which
                  reflected in the long list of our satisfied customers from
                  various segments of the industry.
                </p>
              </div>
              {/* Main Sidebar: Left  */}
              <div className="industify_fn_leftsidebar">
                {/* Single Service  */}
                <div className="industify_fn_service_single">
                  {/* <div className="img_holder">
										<img src="img/service/single/1.jpg" alt="" />
									</div> */}

                  {/* <div className="desc_holder" style={{marginTop: "-90px"}}>
										<p>Our Glorious saga since 1990, Anuj Steel Centre has carved a niche in the roofing market. We are the leading authorized Distributors in Kolhapur for many renowned brands like Georoof, Bhushan Power & Steel, Essar (Colour Coated Sheet & Deck Sheet, VMI Plastics Ltd. (Polycarbonate Sheet & Rolls), Euro Guard uPVC Rain Water Gutter, Spanish Tile Sheet, VIVA (Aluminium Composite Panel), Oralium (Aluminium Sheet & Coils), Roofex & Corroshield (SDS Screw), Durastrip (Bitumen Tape) to name a few.</p>
										<p>Vast experience & in-depth knowledge of all types of roofing products, that suit the requirements of our clients, we suggest not only the appropriate material but also provide complete roofing solution to our clients with cost effective rates. Our profile sheets are designed keeping in mind all the elements & creating trust with superior products services & ideas not only in Kolhapur but also in rest of Maharashtra, Goa & Karnataka.</p>
										<p>With our extensive dealer network, ex. Stock availability, prime location office, manufacturing unit & warehouse with easy transportation facility, experienced team value added services like Pre-sale & Post-sale services. We have covered over more than 5 cr. Sq. ft. of roofing and cladding with over more than 5000 projects completed in the past 3 decades which reflected in the long list of our satisfied customers from various segments of the industry.</p>
									</div> */}

                  {/* Check List Shortcode  */}
                  {/* <div className="fn_cs_check_list">
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
              {/* <div className="industify_fn_rightsidebar"> */}

              {/* Service List  */}
              {/* <div className="service_list_as_function">
									<div className="title">
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
										<ul>
											<li><Link href="/service-single-9"><a>Aerospace and Defense</a></Link></li>
											<li><Link href="/service-single-8"><a>Automative Manufacturing</a></Link></li>
											<li><Link href="/service-single-7"><a>Chemical Industry</a></Link></li>
											<li><Link href="/service-single-6"><a>Oil and Gas Industry</a></Link></li>
											<li><Link href="/service-single-5"><a>Energy &amp; Commodities</a></Link></li>
											<li><Link href="/service-single-4"><a>Medical Devices</a></Link></li>
											<li><Link href="/service-single-3"><a>Housewares &amp; Home Decor</a></Link></li>
											<li><Link href="/service-single-2"><a>Textiles &amp; Apparel</a></Link></li>
											<li className="active"><Link href="/service-single-1"><a>Construction &amp; Engineering</a></Link></li>
										</ul>
									</div>
								</div> */}
              {/* /Service List  */}

              {/* Get Sidebar  */}
              {/* <Sidebar/> */}
              {/* /Get Sidebar  */}
            </div>
            {/* Main Sidebar: Right  */}
          </div>
        </div>
        {/* </div> */}
        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
