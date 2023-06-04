import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'



export default function ServiceSingle1() {
    return (
        <>
            <Title title='MS CRC Sheets Plate & Structural Steel' />
            <Layout>
                {/* Page Title  */}
                <div className="industify_fn_pagetitle">
                    <div className="container">
                        <div className="title_holder">
                            <h3>MS CRC Sheets Plate & Structural Steel</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/services"><a title="Services">Plates & Sheets
                                    </a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><span className="bread-current">MS CRC Sheets Plate & Structural Steel</span></li>
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

                                    <div class="desc_holder"><p>CR sheets or cold rolled sheets are hot rolled products which provides a superior surface finish, with improved physical properties of the steel, such as high form ability, high strength, excellent dent resistance, good magnetic properties, tensile strength, and work ability and welding properties. CR Sheets are available in sheets and coils.</p><p>HR sheets or hot rolled sheets are steel sheets that are soft enough to bend flat on itself in any direction, without cracking. They are ductile enough for shallow drawing used in variety of industries in the domestic market.</p></div>


                                    <h4>Applications</h4>
                                    <h6>MS PLATES</h6>
                                    <div class="desc_holder"><p>MS Plates are used to make Boilers, Pressure vessels, Rail wagons, Ships, Pipes and provide the base and body of the heavy machine.They are used to make gusset plates for the frames of the industrial sheds and joining the transmissions towers. Plates are available in Wide arrays of thickness, lengths and widths of various steel compositions.</p></div>

                                    <h6>CHEQUERED PLATES</h6>
                                    <div class="desc_holder"><p>Chequered Plates are mostly used for industrial flooring. They have bead pattern on its surface so that it provides good grip for the people to walk.</p></div>

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
                                            <li><Link href="/404"><a>ALUMINIUM COIL / SHEET & CHEQURED PLATE</a></Link></li>
                                            <li><Link href="/galvanised-sheet"><a>GALVANISED (GI) SHEET & COIL</a></Link></li>
                                            <li><Link href="/ms-crc-sheet"><a>MS CRC SHEETS / PLATE & STRUCTURAL STEEL</a></Link></li>
                                            <li><Link href="/frp-sheet"><a>STRUCTURAL STEEL</a></Link></li>
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
