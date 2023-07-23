import Link from "next/link";
import React from "react";
import Layout from "../layout/layout";
import Sidebar from "../layout/sidebar";
import Title from "../layout/title";
import { Check } from "../public/svg/icon";

export default function ServiceSingle1() {
  return (
    <>
      <Title title="Color Coated Sheet Tile" />
      <Layout>
        {/* Page Title  */}
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>SDS SCREWS & FASTNERS</h3>
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
                      <a title="Services">SDS SCREWS & FASTNERS</a>
                    </Link>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <span className="bread-current">SDS SCREWS & FASTNERS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2>We are updating this page. Please check back later.</h2>
        {/* /Page Title  */}

        {/* Sidebar Page  */}

        {/* /Sidebar Page  */}
      </Layout>
    </>
  );
}
