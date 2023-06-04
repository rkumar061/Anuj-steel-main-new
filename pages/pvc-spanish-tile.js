import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'



export default function ServiceSingle1() {
	return (
		<>
		<Title title='PVC Spanish Tile' />
			<Layout>
				{/* Page Title  */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>PVC Spanish Tile</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Polycarbonate / UPVC Roofing Sheet
                                    </a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">PVC Spanish Tile</span></li>
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

                                    <div class="desc_holder"><p>ASA synthetic tiles are also known locally as Mangalore roof tiles. The ASA is a Spanish style synthetic resin roof tile made from ternary polymer co-extruded by three kinds fo materirials: acrylonitrile, strene and acrylat. These spanish roof tilescan withstand strong wind as thy have on outstanding corrosion resistance and anti-UV Performance.</p></div>

                                   <h3>Specification</h3>
                                   <table class="table"><tbody><tr><td>Profile</td><td colspan="3"><img src="/img/Spanish-Tile-profile.png" alt="" /></td></tr><tr><td>Thicknese</td><td>2.5mm</td><td>2.8mm</td><td>3.0mm</td></tr><tr><td>Length</td><td colspan="3">Customizable (must be a multiple of 219mm)</td></tr><tr><td>Overall width</td><td colspan="3">1049mm</td></tr><tr><td>Effective width</td><td colspan="3">600mm</td></tr><tr><td>Purlin span</td><td colspan="3">&gt; 20<sup>0</sup></td></tr></tbody></table>

                                    {/* <div className='fn_cs_check_list bullet-point'> */}
                                    <br />
                                    <h3>Advantages</h3>
                                    <div class="list"><ul>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Long lasting color stability</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Super corrosion resistance</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Point remarkable heat & sound insulation</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Highly fire resistant</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Exceptional waterproff perfomance</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Convenient and effcient installation</p></div></li>
									</ul></div>
                                    {/* </div> */}

                                    <br />
                                    <h3>Applications</h3>
                                    <div class="list"><ul>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Shoocl And University</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Clubhouse and Community Center</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Five Star Hotels And Resort Beaches</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Gazebos</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Farmhouses</p></div></li>
									<li><div class="item"><span class="material-symbols-outlined arrow">arrow_forward</span> 
									<p>Residential Shades</p></div></li>
									</ul></div>
                                    {/* </div> */}

                                    <h3>Specification</h3>

                                    <div class="img_holder"><img src="/img/Accessories.png" alt="" /></div>
                                   

                                    {/* <h3>Accessories</h3> */}
                                    {/* Check List Shortcode  */}
                                    {/* <div className="fn_cs_check_list">
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
