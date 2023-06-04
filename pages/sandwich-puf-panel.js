import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'
import arrow from  '../public/svg/arrow-r.svg'
import Image from 'next/image'



export default function ServiceSingle1() {
	return (
		<>
		<Title title='Sandwich PUF Panel (Roof & Wall)' />
			<Layout>
				{/* Page Title  */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Sandwich PUF Panel (Roof & Wall)</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Metal & Tile Roofing Sheet</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Sandwich PUF Panel (Roof & Wall)</span></li>
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


                                <div class="fn_cs_check_list"><h3>Specification</h3><div class="img_holder"><img src="/img/image1-3.png" alt="" /><img src="/img/image2.png" alt="" /><img src="/img/image3.png" alt="" /></div></div>

                                <h3>Advantages</h3>

                                <div className='list'>
                                    <ul>
                                        <li>
                                            <div className='item'>
                                            {/* <Image src={arrow} /> */}
											<span class="material-symbols-outlined arrow">arrow_forward</span> 
                                            <p>High load bearing capacity at low weight</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='item'>
                                            {/* <Image src={arrow} /> */}
											<span class="material-symbols-outlined arrow">arrow_forward</span> 
                                            <p>Excellent and durable thermal insulation</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='item'>
                                            {/* <Image src={arrow} /> */}
											<span class="material-symbols-outlined arrow">arrow_forward</span> 
                                            <p>Absolute water and vapour barrier</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='item'>
                                            {/* <Image src={arrow} /> */}
											<span class="material-symbols-outlined arrow">arrow_forward</span> 
                                            <p>Excellent air tightness and free of thermal bridges which results in considerable energy savings.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='item'>
                                            {/* <Image src={arrow} /> */}
											<span class="material-symbols-outlined arrow">arrow_forward</span> 
                                            <p>Surface finished facings providing resistance to weather and aggressive environments</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='item'>
                                            {/* <Image src={arrow} /> */}
											<span class="material-symbols-outlined arrow">arrow_forward</span> 
                                            <p>Capacity for rapid erection without lifting equipments; easier installation in hostile weather conditions</p>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                

                                <div class="fn_cs_check_list"><h3>Application</h3><div class="desc_holder"><p>Steel, Power, Automobiles, IT, Pharma, Oil &amp; Gas, Infrastructure Sectors, etc. Also the traditional Cold storage sectors &amp; Modern Cold chain demands including Fruits, Vegetables, Dairy &amp; Allied Products, Meat &amp; Poultry, Sea Food, Food Processing, Beverages, Cold logistics, etc.,</p></div></div>

                                <h4>Accessories</h4>
									<div className="fn_cs_check_list">
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>RIDGES</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>FLASHING</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>GABLE WALL</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>RAIN WATER GUTTER</p>
													</div>
												</li>
                                                <li>
													<div className="item">
														<Check className="fn__svg" />
														<p>SDS SCREWS</p>
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
											<li><Link href="/color-coated-sheet-tile"><a>COLOR COATED SHEET & TILE</a></Link></li>
											<li><Link href="/oralium-arst"><a>ORALIUM ALUMNIUM ROOFING SHEET & TILE</a></Link></li>
											<li><Link href="/sandwich-puf-panel"><a>SANDWICH PUF PANEL (ROOF & WALL)</a></Link></li>
											<li><Link href="/deck-sheet"><a>DECK SHEET</a></Link></li>
											<li><Link href="/olwrs"><a>ONDULINE LIGHT WEIGHT ROOFING SHEET</a></Link></li>
											<li><Link href="/scrs"><a>STONE COATED ROOFING SHEET</a></Link></li>
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
