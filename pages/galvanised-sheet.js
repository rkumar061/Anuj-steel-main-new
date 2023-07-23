import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="Galvanised (GI) Sheet & Coil" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>Galvanised (GI) Sheet & Coil</h3>
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
                      <a title="Services">Plates & Sheets</a>
                    </Link>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <span className="bread-current">
                      Galvanised (GI) Sheet & Coil
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

                  <div class="desc_holder">
                    <p>
                      The zinc-iron alloy layers formed during the process of
                      galvanizing create a protective coat around the steel,
                      keeping moisture out and preventing corrosion. Galvanizing
                      also imparts excellent adhesion and abrasion resistance,
                      giving our products unmatched protection against the
                      elements.
                    </p>
                  </div>

                  <h3>Specification</h3>
                  {/* Check List Shortcode  */}
                  <div className="fn_cs_check_list">
                    <div className="list">
                      <ul>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>GALVANIZED COILS & SHEET FROM 0.14 MM TO 3 MM</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>
                              GALVANIZED CORRUGATED SHEET FROM 0.14 MM TO 1.2 MM
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3>Advantages</h3>
                  {/* Check List Shortcode  */}
                  <div className="fn_cs_check_list">
                    <div className="list">
                      <ul>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>LOW COST METAL ROOFING.</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>CAN BE EASILY BEND FOR DUCTING.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h4>Applications</h4>

                  <div class="desc_holder">
                    <p>
                      <span class="material-symbols-outlined arrow">
                        arrow_forward
                      </span>{" "}
                      The GI sheets are used in automotive applications as it
                      has enhanced paint ability, weld ability and corrosion
                      resistance. <br />
                      <span class="material-symbols-outlined arrow">
                        arrow_forward
                      </span>{" "}
                      GI sheets are also used in AC Ducting, Refrigeration,
                      Ducting in textile / hotels, washers, refrigerators,
                      air-conditioners, vending machines, microwaves etc.
                      <br />
                      <span class="material-symbols-outlined arrow">
                        arrow_forward
                      </span>{" "}
                      Galvanised Corrugated Sheets are used to cover the Steel
                      Structure and Industrial Sheds, Warehousing Buildings,
                      Houses, Sheet metal bending for cupboards.
                    </p>
                  </div>

                  <h3>Accessories</h3>
                  {/* Check List Shortcode  */}
                  <div className="fn_cs_check_list">
                    <div className="list">
                      <ul>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>SDS SCREWS.</p>
                          </div>
                        </li>
                        <li>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>UPVC GUTTER.</p>
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
                        <Link href="/acrylic-sheet">
                          <a>MS CRC SHEETS / PLATE & STRUCTURAL STEEL</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/frp-sheet">
                          <a>STRUCTURAL STEEL</a>
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
