import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'



export default function ServiceSingle1() {
    return (
        <>
            <Title title='PP / PVC / FRP Sheet & Roll' />
            <Layout>
                {/* Page Title  */}
                <div className="industify_fn_pagetitle">
                    <div className="container">
                        <div className="title_holder">
                            <h3>PP / PVC / FRP Sheet & Roll</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/services"><a title="Services">Interior / Exterior Ceiling Products
                                    </a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><span className="bread-current">PP / PVC / FRP Sheet & Roll</span></li>
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
                                    

                                    <div data-html="includes/random-service.html" data-index="1" data-count="2"></div>
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
                                            <li><Link href="/acp-sheet"><a>ACP SHEET (ALUMNIUM COMPOSITE PANEL)</a></Link></li>
                                            <li><Link href="/pvc-ceil"><a>PVC CEILING PANEL</a></Link></li>
                                            <li><Link href="/acrylic-sheet"><a>ACRALIC SHEET</a></Link></li>
                                            <li><Link href="/frp-sheet"><a>PP / FRP / PVC SHEET & ROLL</a></Link></li>
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
    )
}
