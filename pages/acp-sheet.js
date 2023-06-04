import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'



export default function ServiceSingle1() {
    return (
        <>
            <Title title='ACP Sheet (Aluminium Composite Panel)' />
            <Layout>
                {/* Page Title  */}
                <div className="industify_fn_pagetitle">
                    <div className="container">
                        <div className="title_holder">
                            <h3>ACP Sheet (Aluminium Composite Panel)</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/services"><a title="Services">Interior / Exterior Ceiling Products
                                    </a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><span className="bread-current">ACP Sheet (Aluminium Composite Panel)</span></li>
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

                                    <div class="desc_holder"><p>Aluminium composite panel is popularly known as ACP. It is made up of aluminium composite material(ACM), which contains two thinly coated aluminium sheets. Being comprised of two distinct materials that is metals and non-metal, as aluminium is a metal and polyethylene plastic is a nonmetal, it overcomes the limitations and the drawbacks of the original material.</p></div>

                                   
                                    {/* <div className='fn_cs_check_list bullet-point'> */}
                                    <br />
                                    <h3>Advantages</h3>
                                    <div class="list"><ul>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Lightweight</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Delightfully flexible</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Easy to work with</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Easy to install</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Installed real fast</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Cost-effective</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Durable & easy to maintain</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Offers a wider variety of colors and textures</p></div></li>
                                    </ul></div>
                                    {/* </div> */}

                                    <br />
                                    <h3>Applications</h3>
                                    <div class="list"><ul>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Facade or Cladding</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Partitions</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Signage</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Interiors</p></div></li>
                                    <li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> <p>Ceiling</p></div></li>
                                    </ul></div>
                                    {/* </div> */}

                                    {/* <h3>E-Catalogue</h3> */}

                                    <div class="fn_cs_check_list"><h3>E-Catalogue</h3><div class="row"><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/Disinfectant-Booth-FINAL.pdf"><img src="/img/1A.jpeg" layout="fill" alt="" /></a><h6>Disinfectant Booth</h6></div></div><div class="col-sm-3">
                                    <div class="text-center p-2"><a href="/img/e-catalog/Booth-Technical-Details.pdf"><img src="/img/1B.jpeg" layout="fill" alt="" /></a><h6>Disinfectant Booth Specifications</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/METAL-ABSTRACT.pdf"><img src="/img/img48.jpeg" layout="fill" alt="" /></a><h6>Metal Abstract</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/SEND-BLAST-SERIES-FINAL.pdf"><img src="/img/img55.jpeg" layout="fill" alt="" /></a><h6>Sand Blast Series</h6></div></div></div><div class="row"><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/Natural-Stone-Series-E-Brochure-compressed-ilovepdf-compressed-ilovepdf-compressed.pdf"><img layout="fill" src="/img/rsz_1stone.png" alt="" /></a><h6>Natural Stone Series</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/VIVA-PREMIUM-ECATALOGUE.pdf"><img layout="fill" src="/img/04.jpeg" alt="" /></a><h6>Premium Catalogue</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/Viva-Aluminium-Partition-Panel-E-Catalogue.pdf"><img layout="fill" src="/img/1.jpeg" alt="" /></a><h6>Partition Panel</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/Viva-Busbody-Color-Shades.pdf"><img layout="fill" src="/img/2.jpeg" alt="" /></a><h6>Busy Body</h6></div></div></div><div class="row"><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/VIVA-HPL-E-Catalogue.pdf"><img layout="fill" src="/img/hpl.jpeg" alt="" /></a><h6>HPL E-Catalogue</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/Viva-6-Fold-Color-Chart.pdf"><img layout="fill" src="/img/1B-1.jpeg" alt="" /></a><h6>Viva Fold Coulor Chart</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/VIVA-DECOR-SERIES.pdf"><img layout="fill" src="/img/decor.jpeg" alt="" /></a><h6>Viva Decor Series</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/e-catalog/Viva-Partition-Panel-Color-Shades.pdf"><img src="/img/decorative.jpeg" layout="fill" alt="" /></a><h6>Decorative Panel</h6></div></div></div></div>

                                   {/* Certification */}

                                   <div class="fn_cs_check_list"><h3>Certification</h3><div class="row"><div class="col-sm-3"><div class="text-center p-2"><a href="/img/ARAI-Test-Report-certi-1.pdf">
                                   <img layout="fill" src="/img/certi-1.png" alt="" />
                                   </a><h6>ARAI Test Report</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/Exova-Certification-E-84-certi-2.pdf">
                                   <img layout="fill" src="/img/certi-2.png" alt="" />
                                   </a><h6>Exova Certification E-84</h6></div>
                                   </div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/Exova-Certification-EN-13501-WF-397641-certi-3.pdf">
                                   <img layout="fill" src="/img/certi-3.png" alt="" />
                                   </a><h6>Exova Certification EN-13501-WF-397641</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/Exova-Certification-EN-TS-15117-WF-397640-certi-4.pdf">
                                   <img layout="fill" src="/img/certi-4.png" alt="" />
                                   </a><h6>Exova Certification EN-TS-15117-WF-397640</h6></div></div></div><div class="row"><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/IIT-Bombay-VIVA-4mm-Thickness-PVDF-28-05-18-certi-5.pdf">
                                   <img layout="fill" src="/img/certi-5.png" alt="" />
                                   </a><h6>IIT Bombay VIVA 4mm Thickness PVDF 28-05-18</h6></div>
                                   </div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/ISO-14001-2015-certi-6.pdf">
                                   <img layout="fill" src="/img/certi-6.png" alt="" />
                                   </a><h6>ISO 14001 2015</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/SGS-REPORTS-4MM-0.50-certi-7.pdf">
                                   <img layout="fill" src="/img/certi-7.png" alt="" />
                                   </a><h6>SGS REPORTS 4MM 0.50</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/Shriram-Institute-certi-8.pdf">
                                   <img layout="fill" src="/img/certi-8.png" alt="" />
                                   </a><h6>Shriram Institute</h6></div></div></div><div class="row"><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/VIVA-7-Star-A-1-Corrugated-IIT-Bomnbay-certi-9.pdf">
                                   <img layout="fill" src="/img/certi-9.png" alt="" />
                                   </a><h6>VIVA 7 Star A-1 Corrugated IIT Bomnbay</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/Viva-Composite-Panel-Pvt-Ltd-IGBC-Certificate-certi-10.pdf">
                                   <img layout="fill" src="/img/certi-10.png" alt="" />
                                   </a><h6>Viva Composite Panel Pvt Ltd IGBC Certificate</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/VIVA-SGS-FR-TEST-REPORT-certi-11.pdf">
                                   <img layout="fill" src="/img/certi-11.png" alt="" />
                                   </a><h6>VIVA SGS FR TEST REPORT</h6></div></div><div class="col-sm-3"><div class="text-center p-2"><a href="/img/certificates/Ecoplast-Adhesive-Filim-for-ACP-12.jpeg">
                                   <img layout="fill" src="/img/certi-12.png" alt="" />
                                   </a><h6>Ecoplast Adhesive Filim for ACP</h6></div></div></div></div>

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
