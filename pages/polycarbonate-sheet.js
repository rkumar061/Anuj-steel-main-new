import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'



export default function ServiceSingle1() {
	return (
		<>
		<Title title='Polycarbonate Sheet' />
			<Layout>
				{/* Page Title  */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Polycarbonate Sheet</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Polycarbonate / UPVC Roofing Sheet
                                    </a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Polycarbonate Sheet</span></li>
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

                                    <div class="desc_holder"><p>Polycarbonate is a polymer with a unique blend of desirable properties. This polymer can be given shape by different processes, which include injection moulding, blow moulding, extrusion -and thermoforming. Polycarbonate roof sheets are manufactured by the process of extrusion. With many years of sheet extrusion experience, we offer a wide product portfolio of solid, embossed, multiwall and other polycarbonate sheets suitable for many applications and industries.</p> <p>Polycarbonate roof sheets are commonly called transparent steel due to their wonderful impact resistance and glass like clarity.</p></div>

                                   

                                    {/* <div className='fn_cs_check_list bullet-point'> */}
                                    <h3>Types</h3>
                                    <div class="list"><ul>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Multiwall Sheet</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>U-45 Corrugated Sheet</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Solid / Compact Sheet</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Plain Embossed</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Industrial Profiled Embossed & Compact Sheet</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Polycarbonate Base Plate</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Polycarbonate Louvers</p></div></li>
									</ul></div>
                                    {/* </div> */}

                                    <h3>Advantages</h3>
                                    <div class="list"><ul>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Easy handling and installation</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Lightweight</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Optimum impact resistance</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Exceptional light transmission</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Excellent structural endurance</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Weather and UV resistant</p></div></li></ul></div>

                                    <h3>Applications</h3>
                                    <div class="list"><ul>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Residential and Industrial Roofing and Glazing</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Open Ducts</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Sound proof wall for Highways</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Skylights and conservatories</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Capped walkways</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Signages and Layoutss</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Capped swimming pools</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Horticultural coverings</p></div></li>
									</ul></div>

                                    <h3>Accessories</h3>
                                    {/* Check List Shortcode  */}
                                    <div className="fn_cs_check_list">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>POLYCARBONATE RIDGE</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>POLYCARBONATE H & U / ALUMINIUM TOP & BOTTOM</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>SILICON SEALENT</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <Check className="fn__svg" />
                                                        <p>SDS POLYCARBONATE SCREW</p>
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
											<li><Link href="/polycarbonate-sheet"><a>POLYCARBONATE SHEET</a></Link></li>
											<li><Link href="/pvc-spanish-tile"><a>PVC SPANISH TILE</a></Link></li>
											<li><Link href="/upvc"><a>UPVC ROOFING SHEET</a></Link></li>
										</ul>
									</div>
								</div>
								{/* /Service List  */}

								{/* Get Sidebar  */}
								<Sidebar/>
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
