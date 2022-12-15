import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { mediaBaseUrl } from "../../../../services";
import TickBox from "../../../../Assets/Icons/tickBox";
import Coins from "../../../../Assets/Icons/coins.svg";
import "./Plans.css";
import axios from "axios";
function Plans({ active }) {
	const [packages, setPackages] = useState([]);
	const [hoverState, toggleHoverState] = useState(false);
	const plans = useRef(null);
	const executeScroll = (ref) => ref.current.scrollIntoView();

	if (active === "Plans") {
		executeScroll(plans);
	}

	useEffect(() => {
		const baseUrl = "https://digital.kadabraservices.com/";
		const GetDigitalServicesFu=async()=>{
		  const res = await axios.get(baseUrl+"Digital/GetKadabraDigitalHomeScreen");
		  setPackages(res.data.data&&res.data.data[2].packageModel);
		//   setPackages(res.data.data[2].packageModel);
		}
		GetDigitalServicesFu()
		// GetPackages(
		// 	(success) => {
		// 		setPackages(success.data[2].packageModel);
		// 	},
		// 	(fail) => {}
		// );
	}, []);

	return (
		<div className="Plans" ref={plans}>
			<Container>
				<h3 className="mb-0 aboutUsHeading">Our Plans</h3>
				<div className="borderLine"></div>
				<Row>
					{packages.map((plan,i) => {
						return (
							<Col
								md={4}
								sm={6}
								key={i}
								onMouseEnter={() => toggleHoverState(true)}
								onMouseLeave={() => toggleHoverState(false)}
							>
								<div>
									<div className="cart">
										{plan.isPrefred && (
											<div className="flagContainer">
												<div className="flagItem">
													<div className="flagBox">
														<span className="s3">Fulfilling & Affordable!</span>
													</div>
												</div>
											</div>
										)}
										<div className="titleBox ml-60">
											<img
												src={mediaBaseUrl + plan.packageImage}
												alt="SilverCrown"
											/>
											<h6 className="title my-2">{plan.packageName}</h6>
											<img src={Coins} alt="Coins" />
											<span className="price s3">
												{plan.packagePrice} {plan.priceUnit}
											</span>
										</div>
										<div className="infoBox">
											<ul className="list-unstyled">
												{plan.featureModel.map((feature, i) => {
													return (
														<li key={i}>
															<span className="tickBoxContainer">
																<TickBox hoverState={hoverState} />
															</span>
															<span className="s3 ml-2">
																{feature.featureName}
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

export default Plans;
