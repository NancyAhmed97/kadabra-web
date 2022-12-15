import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AndroidImg from "../../../Assets/Icons/Google.svg";
import IosImg from "../../../Assets/Icons/App.svg";
import InstgramImg from "../../../Assets/Icons/Instgram.svg";
import FaceBookImg from "../../../Assets/Icons/Facebook.svg";
import "./Footer.css";
function Footer({ getActive }) {
	return (
		<div className="footer">
			<Container>
				<Row>
					<Col sm>
						<div className="Downloads">
							<h5>Downloads</h5>
							<div>
								<a
									href={
										localStorage.getItem("deviceType") === "ANDROID"
											? "https://play.google.com/store/apps/details?id=com.kadabra.kadabradigitalandroid"
											: "IOSLINK"
									}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={AndroidImg}
										alt="AndroidImg"
										className="AndroidImg"
									/>
								</a>
							</div>
							<div>
								<a
									href={
										localStorage.getItem("deviceType") === "ANDROID"
											? "https://play.google.com/store/apps/details?id=com.kadabra.kadabradigitalandroid"
											: "IOSLINK"
									}
									target="_blank"
									rel="noreferrer"
								>
									<img src={IosImg} alt="IosImg" className="IosImg" />
								</a>
							</div>
						</div>
					</Col>
					<Col sm>
						<div className="Packages">
							<h5>Packages								
							</h5>
							<a href="#Portfolio" onClick={() => getActive("Plans")}>
							Silver package
							</a>
							<a href="#Portfolio" onClick={() => getActive("Plans")}>
							Gold Package
							</a>
							<a href="#Portfolio" onClick={() => getActive("Plans")}>
							Platinum Package							</a>
						</div>
					</Col>
					<Col sm>
						<div className="SiteMap">
							<h5>Site Map</h5>
							<a
								onClick={() => {
									getActive("home");
								}}
								href="#home"
							>
								Home
							</a>
							<a href="#about" onClick={() => getActive("about")}>
								About us
							</a>
							<a href="#Portfolio" onClick={() => getActive("Plans")}>
								Plans
							</a>
							<a href="#Services" onClick={() => getActive("Services")}>
								Services
							</a>
							<a href="#Clients" onClick={() => getActive("Client")}>
								Clients
							</a>
							<a href="#Contact" onClick={() => getActive("ContactUs")}>
								Contact us
							</a>
						</div>
					</Col>
					<Col sm>
						<div className="SocialMedia">
							<h5>Social Media</h5>
							<div className="social">
								<span>
									<a
										href="https://instagram.com/kadabra.digital.agency?utm_medium=copy_link"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src={InstgramImg}
											alt="InstgramImg"
											className="InstgramImg"
										/>
									</a>
								</span>
								<span>
									<a
										href="https://www.facebook.com/Kadabras-Digital-Agency-137584328456774/"
										target="_blank"
										rel="noreferrer"
									>
										<img src={FaceBookImg} alt="FaceBookImg" />
									</a>
								</span>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div>
				<p className="copyRightBar">
					©2021 Kadabra digital. All Rights Reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;
