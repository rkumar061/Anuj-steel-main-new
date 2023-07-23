import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="PP / PVC / FRP Sheet & Roll" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>PP / PVC / FRP Sheet & Roll</h3>
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
                      <a title="Services">
                        Interior / Exterior Ceiling Products
                      </a>
                    </Link>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <span className="bread-current">
                      PP / PVC / FRP Sheet & Roll
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

                  {/* <div
                    data-html="includes/random-service.html"
                    data-index="1"
                    data-count="2"
                  ></div> */}
                  {/* /Get Random Services  */}
                  <div class="fn_cs_check_list">
                    <h3>PP Sheets</h3>
                    {/* -a----        23-07-2023     08:39          32566 10001.jpg
-a----        23-07-2023     08:39          20829 10002.jpg
-a----        23-07-2023     08:39          25003 10003.jpg
-a----        23-07-2023     08:39           8888 10004.jpg
-a----        23-07-2023     08:39          25272 10005.jpg
-a----        23-07-2023     08:39          17912 10006.jpg
-a----        23-07-2023     08:42          21733 400000066.jpg
-a----        23-07-2023     08:42          23291 400000099.jpg
-a----        23-07-2023     08:42          10512 400000132.jpg
-a----        23-07-2023     08:42          11169 400000165.jpg
-a----        23-07-2023     08:42          11925 400000198.jpg
-a----        23-07-2023     08:42          22793 400000231.jpg
-a----        23-07-2023     08:42           9555 400000264.jpg
-a----        23-07-2023     08:42          23371 400000297.jpg
-a----        23-07-2023     08:42          11012 400000330.jpg
-a----        23-07-2023     08:42          12851 400000396.jpg
-a----        23-07-2023     08:42          16617 400000429.jpg
-a----        23-07-2023     08:45          13259 500000066.jpg
-a----        23-07-2023     08:45           9824 500000099.jpg
-a----        23-07-2023     08:45          11733 500000132.jpg
-a----        23-07-2023     08:45          28116 500000165.jpg
-a----        23-07-2023     08:45          16136 500000198.jpg
-a----        23-07-2023     08:45          34153 500000231.jpg
-a----        23-07-2023     08:45          38052 500000264.jpg
-a----        23-07-2023     08:45          28657 500000297.jpg
-a----        23-07-2023     08:45          33996 500000330.jpg
-a----        23-07-2023     08:45          32256 500000363.jpg
-a----        23-07-2023     08:45          33240 500000396.jpg
-a----        23-07-2023     08:45          35367 500000429.jpg */}
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img src="/img/frp/10001.jpg" layout="fill" alt="" />
                          <h6>PP - Printed Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img src="/img/frp/10002.jpg" layout="fill" alt="" />
                          <h6>PP - Circle</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img src="/img/frp/10003.jpg" layout="fill" alt="" />
                          <h6>PP - Leather</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img src="/img/frp/10004.jpg" layout="fill" alt="" />
                          <h6>PP - Frosted </h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img src="/img/frp/10005.jpg" layout="fill" alt="" />
                          <h6>PP - Leather </h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img src="/img/frp/10006.jpg" layout="fill" alt="" />
                          <h6>PP - Circle</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000066.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Diamond</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000099.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Diamond</h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000132.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Frosted</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000165.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Frosted</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000198.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Box Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000231.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Leather</h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000264.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Plain</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000297.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Diamond</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000330.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP - Plain</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000396.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Box Sheet</h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/400000429.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Box Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000066.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP + PC RIB Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000099.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP + PC RIB Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000132.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP + PC RIB Sheet</h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000165.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000198.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000231.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000264.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000297.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000330.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000363.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000396.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <img
                            src="/img/frp/500000429.jpg"
                            layout="fill"
                            alt=""
                          />
                          <h6>PP Printed Sheet</h6>
                        </div>
                      </div>

                      {/* <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/Booth-Technical-Details.pdf">
                            <img src="/img/1B.jpeg" layout="fill" alt="" />
                          </a>
                          <h6>Disinfectant Booth Specifications</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/METAL-ABSTRACT.pdf">
                            <img src="/img/img48.jpeg" layout="fill" alt="" />
                          </a>
                          <h6>Metal Abstract</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/SEND-BLAST-SERIES-FINAL.pdf">
                            <img src="/img/img55.jpeg" layout="fill" alt="" />
                          </a>
                          <h6>Sand Blast Series</h6>
                        </div>
                      </div> */}
                    </div>
                    {/* <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/Natural-Stone-Series-E-Brochure-compressed-ilovepdf-compressed-ilovepdf-compressed.pdf">
                            <img
                              layout="fill"
                              src="/img/rsz_1stone.png"
                              alt=""
                            />
                          </a>
                          <h6>Natural Stone Series</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/VIVA-PREMIUM-ECATALOGUE.pdf">
                            <img layout="fill" src="/img/04.jpeg" alt="" />
                          </a>
                          <h6>Premium Catalogue</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/Viva-Aluminium-Partition-Panel-E-Catalogue.pdf">
                            <img layout="fill" src="/img/1.jpeg" alt="" />
                          </a>
                          <h6>Partition Panel</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/Viva-Busbody-Color-Shades.pdf">
                            <img layout="fill" src="/img/2.jpeg" alt="" />
                          </a>
                          <h6>Busy Body</h6>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/VIVA-HPL-E-Catalogue.pdf">
                            <img layout="fill" src="/img/hpl.jpeg" alt="" />
                          </a>
                          <h6>HPL E-Catalogue</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/Viva-6-Fold-Color-Chart.pdf">
                            <img layout="fill" src="/img/1B-1.jpeg" alt="" />
                          </a>
                          <h6>Viva Fold Coulor Chart</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/VIVA-DECOR-SERIES.pdf">
                            <img layout="fill" src="/img/decor.jpeg" alt="" />
                          </a>
                          <h6>Viva Decor Series</h6>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="text-center p-2">
                          <a href="/img/e-catalog/Viva-Partition-Panel-Color-Shades.pdf">
                            <img
                              src="/img/decorative.jpeg"
                              layout="fill"
                              alt=""
                            />
                          </a>
                          <h6>Decorative Panel</h6>
                        </div>
                      </div>
                    </div> */}
                  </div>
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
