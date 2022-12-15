import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DigitalServices } from "../../network";
import "./Services.css";
import { mediaBaseUrl } from "../../../../services";
import axios from "axios";

function Services({ active }) {
	const Services = useRef(null);
	const [services, setServices] = useState([]);
	const executeScroll = (ref) => ref.current.scrollIntoView();

	if (active === "Services") {
		executeScroll(Services);
	}
	useEffect(() => {
		const baseUrl = "https://digital.kadabraservices.com/";
		const GetDigitalServicesFu=async()=>{
		  const res = await axios.get(baseUrl+"Digital/GetDigitalServices");
		  setServices(res.data.data);
		}
		GetDigitalServicesFu()
		
	}, []);
	return (
		<div className="Services" ref={Services}>
			<Container>
				<h3 className=" servicesHeading">Services</h3>
				<div className="borderLine"></div>
				<Row>
					{services.map((service, i) => {
						return (
							<Col md={4} key={i}>
								<div>
									<div className="cart">
										<div className="AppIcon">
											<img src={mediaBaseUrl + service.image} alt="AppIcon" />
										</div>
										<div className="titleBox my-4">
											<h6 className="title ">{service.serviceName}</h6>
										</div>
										<div className="infoBox">
											<ul className="list-unstyled">
												{service.serviceFeatureModel.map((serviceModel, i) => {
													return (
														<li key={i}>
															<span
																className="s3  my-3"
																style={{ color: "black" }}
															>
																• {serviceModel}
															</span>
														</li>
													);
												})}
											</ul>
											<div className="btn-container">
												<a
													href={
														localStorage.getItem("deviceType") === "ANDROID"
															? "https://play.google.com/store/apps/details?id=com.kadabra.kadabradigitalandroid"
															: "IOSLINK"
													}
													target="_blank"
													rel="noreferrer"
													className="btn"
												>
													Get Started
												</a>
											</div>
										</div>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default Services;
