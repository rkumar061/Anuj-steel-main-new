import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'



export default function ServiceSingle1() {
    return (
        <>
            <Title title='Bitument Butyle Tape' />
            <Layout>
                {/* Page Title  */}
                <div className="industify_fn_pagetitle">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Bitument Butyle Tape</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/services"><a title="Services">Roofing Accessories
                                    </a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><span className="bread-current">Bitument Butyle Tape</span></li>
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

                                    <div class="desc_holder"><p>High Performance Self Adhesive Flashing Strip Butyl rubber compound forms the core of multilayer composite strip with High Density Poly Ethylene film and Aluminum foil on the top and Silicon adhesive layer protected by release paper on the bottom.</p></div>


                                    <h3>Specification</h3>
                                    <div class="desc_holder"><p>Butyl rubber compound forms the core of multilayer composite strip with High Density Poly Ethylene film and Aluminum foil on the top and Silicon adhesive layer protected by release paper on the bottom.</p></div>

                                    <div class="img_holder"><img src="/img/product_o.jpeg" alt="" /></div>

                                    <br />
                                    <h3>Advantages</h3>
                                    <div class="list"><ul>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
                                    <p>The composition and its proper application offers the following benefits in the field of construction industry.</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>The Aluminium topping provides protection from the external environmental factors like Ultra Violet Rays, Reactive Gases and Sunlight and thus enhances the life of bond.</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>The strong adhesion quality ensures a stronger bond lasting for a long period unless it is deliberately peeled off.</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>The qualities of flexibility and pliability helps to withstand the structural movements and thus prevents cracking of bonded substrates.</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>The application on AC Ducts and Coils provides insulation and prevent energy losses.</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>The DIY attribute results in economy of resources.</p></div></li>
                                    </ul></div>

                                    <br />
                                    <h3>Applications</h3>
                                    <div class="list"><ul>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>The waterproofing of rooftops using Asbestos Sheets or GI Sheets can be ensured by applying bitumen tape on the overlaps, joints and places of J Hooks. It can be applied to seal crumple/expansion joints to prevent dust accumulation and seepage.</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Apply Durastrip over the gaps and joints to seal the cracks, holes and breakages observed in the Asbestos and GI Sheets.</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Also can be used for the following :</p></div></li>
                                    </ul></div>

                                    {/* Check List Shortcode  */}
                                    <div className="fn_cs_check_list">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>Cement based substrates- Asbestos, Concrete and Vitrified Tiles.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>Metal based substrates- Steel, Aluminum, Copper, Zinc, Mild Steel, Galvanized Iron and other alloy products.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>Polymers- Polyethylene, Polypropylene, Polycarbonate, PVC and ABS materials.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>Other Materials- Wood, Glass, Fiberglass and Canvas products.</p>
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
