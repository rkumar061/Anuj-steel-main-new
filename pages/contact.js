import React from 'react'
import Layout from '../layout/layout'
import Title from '../layout/title'
import { Location } from '../public/svg/icon'
import Link from 'next/link'



export default function Contact() {

	const styles = {
		display: "inline-block",
		marginRight : "20px",
		marginLeft: "10px"
	}


	return (
		<>
			<Layout>
				{/* Page Title */}
				<Title title='Contact' />
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Get in Touch</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Contact</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}

				{/* Contact */}
				<div className="industify_fn_contact">
					<div className="container">
						<div className="contact_in">

							<div className="map_holder"> 
								{/* <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}

								<iframe className='mapPlace' style={styles}  width="30%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.17617803301!2d74.27514971486781!3d16.767908188452566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1012c8cf98943%3A0xf676f7cc7cc970a1!2sAnuj%20Steel%20Centre%2C%20Toap!5e0!3m2!1sen!2sin!4v1613027868553!5m2!1sen!2sin&amp;output=embed"></iframe>

								<iframe className='mapPlace' style={styles} width="30%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8896411974697!2d74.28130441486725!3d16.732357388474217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1019e14f9e04d%3A0x2ac80713cf2d6a62!2sAnuj%20Steel%20Centre%2C%20Shiroli!5e0!3m2!1sen!2sin!4v1613027833158!5m2!1sen!2sin&amp;output=embed"></iframe>

								<iframe className='mapPlace' style={styles} width="30%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.68954188994115!2d74.23036690379892!3d16.70106952862906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1006d6f4fd22b%3A0x210b8272e09e2cd9!2sAnuj%20Steel%20Centre!5e0!3m2!1sen!2sin!4v1588415530054!5m2!1sen!2sin&amp;output=embed"></iframe>
							</div>

							<div className="contact_holder">
								<div className="contact_left">
									<h3>Get in touch with us</h3>
									<form className="contact_form" action="/" method="post" autoComplete="off" data-email="info@anujsteel.com">


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="success" data-success="Your message has been received, we will contact you soon."></div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										{/*  */}
										<div className="items">
											<div className="item">
												<input id="name" type="text" placeholder="Name" />
											</div>
											<div className="item">
												<input id="email" type="email" placeholder="Email" />
											</div>
											<div className="item">
												<textarea id="message" placeholder="Message"></textarea>
											</div>
											<div className="item">
												<Link href="#"><a id="send_message">Send Message</a></Link>
											</div>
										</div>
									</form>
								</div>
								<div className="contact_right">

									<div className="fn_cs_location_list">
										<ul className="list">

											<li className="location_item">
												<div className="item">
													<div className="title_holder">
														<span className="icon_wrapper">
															<span className="icon">
																<Location className="fn__svg" />
															</span>
															<span className="shape"></span>
														</span>
														<h3>Corporate Office</h3>
													</div>
													<div className="content_holder">
														<ul>
															<li>1430/A, 'C' Ward, Sambhaji Pul, Laxmipuri, Kolhapur - 416002. Maharashtra</li>
															<li>Email: <Link href="mailto:w.industify@gmail.com"><a>info@anujsteel.com</a></Link></li>
														</ul>
													</div>
												</div>
											</li>

											<li className="location_item">
												<div className="item">
													<div className="title_holder">
														<span className="icon_wrapper">
															<span className="icon">
																<Location className="fn__svg" />
															</span>
															<span className="shape"></span>
														</span>
														<h3>FACTORY</h3>
													</div>
													<div className="content_holder">
														<ul>
															<li>Plot no. 2548, Opp. Manugraph Factory, Pune - Bengaluru Highway, A.P. Toap, Dist. Kolhapur - 416122</li>
															<li>Email: <Link href="mailto:n.industify@gmail.com"><a>info@anujsteel.com</a></Link></li>
														</ul>
													</div>
												</div>
											</li>

											<li className="location_item">
												<div className="item">
													<div className="title_holder">
														<span className="icon_wrapper">
															<span className="icon">
																<Location className="fn__svg" />
															</span>
															<span className="shape"></span>
														</span>
														<h3>Corporate Office</h3>
													</div>
													<div className="content_holder">
														<ul>
															<li>120/1, Pune - Bengaluru Highway, Shiroli (Pulachi), Dist. Kolhapur - 416122</li>
															<li>Email: <Link href="mailto:b.industify@gmail.com"><a>info@anujsteel.com</a></Link></li>
														</ul>
													</div>
												</div>
											</li>

										</ul>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				{/* /Contact */}

			</Layout>

		</>
	)
}
