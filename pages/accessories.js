import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'



export default function ServiceSingle1() {
    return (
        <>
            <Title title='Accessories' />
            <Layout>
                {/* Page Title  */}
                <div className="industify_fn_pagetitle">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Accessories</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/services"><a title="Services">Roofing Accessories
                                    </a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><span className="bread-current">Accessories</span></li>
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
                                    {/* <h4>Introduction</h4>

                                    <div class="desc_holder"><p>High Performance Self Adhesive Flashing Strip Butyl rubber compound forms the core of multilayer composite strip with High Density Poly Ethylene film and Aluminum foil on the top and Silicon adhesive layer protected by release paper on the bottom.</p></div>


                                    <h3>Specification</h3>
                                    <div class="desc_holder"><p>Butyl rubber compound forms the core of multilayer composite strip with High Density Poly Ethylene film and Aluminum foil on the top and Silicon adhesive layer protected by release paper on the bottom.</p></div> */}

                                    <h4>Metal Accessories</h4>
                                    <br />
                                    <div class="img_holder"><img src="/img/matal.png" alt="" /></div>


                                    <h4>Aluminium Accessories</h4>

                                    <div class="desc_holder"><p>Same as above few difference call me when you will be editing.</p></div>

                                    <br />
                                    <h3>Polycarbonate Accessories</h3>
                                    <div class="list"><ul>
                                        <li><div class="item"><span class="material-symbols-outlined arrow">
                                            arrow_forward
                                        </span><p>Aluminium Top & Bottom – Aluminium top & bottom is used for connecting multiwall / embossed plain / compact plain sheets as they cannot be over lapped.</p></div></li>
                                        <li><div class="item"><span class="material-symbols-outlined arrow">
                                            arrow_forward
                                        </span><p>PC H Joint & U End Cap – PC H is also used for connecting only multiwall sheets & U is used for sealing multiwall sheets so that the dust doesn’t enter the hollow sheets.</p></div></li>
                                    </ul></div>

                                    <br />
                                    <h3>Other Accessories</h3>
                                    <div class="list"><ul>
                                        <li><div class="item"><span class="material-symbols-outlined arrow">
                                            arrow_forward
                                        </span><p>The waterproofing of rooftops using Asbestos Sheets or GI Sheets can be ensured by applying bitumen tape on the overlaps, joints and places of J Hooks. It can be applied to seal crumple/expansion joints to prevent dust accumulation and seepage.</p></div></li>
                                        <li><div class="item"><span class="material-symbols-outlined arrow">
                                            arrow_forward
                                        </span><p>Apply Durastrip over the gaps and joints to seal the cracks, holes and breakages observed in the Asbestos and GI Sheets.</p></div></li>
                                        <li><div class="item"><span class="material-symbols-outlined arrow">
                                            arrow_forward
                                        </span><p>Also can be used for the following :</p></div></li>
                                    </ul></div>

                                    {/* Check List Shortcode  */}
                                    <div className="fn_cs_check_list">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>Silicon Sealant</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>Silicon Applicator</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>SDS Screw</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>UPVC Solution</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>




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
                                            <li><Link href="/404"><a>SDS SCREWS & FASTNERS</a></Link></li>
                                            <li><Link href="/itav"><a>INDUSTRIAL TURBO AIR VENTILATORS</a></Link></li>
                                            <li><Link href="/bitument"><a>BITUMEN & BUTYL TAPE</a></Link></li>
                                            <li><Link href="/accessories"><a>ACCESSORIES</a></Link></li>
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
