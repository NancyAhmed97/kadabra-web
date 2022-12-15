import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GetDigitalServices } from "../../network";
import Group from "../../../../Assets/Group 1413.png";
import { mediaBaseUrl } from "../../../../services";
import "./AboutUs.css";
function AboutUs({ active }) {
	const [description, setDescription] = useState([]);
	const [modal, setModal] = useState([]);
	const about = useRef(null);

	const executeScroll = (ref) => ref.current.scrollIntoView();

	if (active === "about") {
		executeScroll(about);
	}
	useEffect(() => {
		GetDigitalServices(
			(success) => {
				setDescription(success.data.description.split("."));
				setModal(success.data.missionVisionModel);
			},
			(fail) => {}
		);
	}, []);

	// useEffect(() => {
	// 	console.log(about.current);
	// }, []);

	// useEffect(() => {
	// 	window.addEventListener("scroll", scrollHandler);

	// 	return () => window.removeEventListener("scroll", scrollHandler);
	// }, []);

	// const scrollHandler = () => {
	// 	if (
	// 		window.pageYOffset + window.innerHeight >= about.current.offsetTop &&
	// 		window.pageYOffset < about.current.offsetHeight
	// 	)
	// 		console.log(`Hidden element is now visible`);
	// 	else console.log("not visible");
	// };

	return (
		<div ref={about} className="aboutUs">
			<div className=" pt-5">
				<Container>
					<Row>
						<Col sm>
							<div className="textLanding py-5 mt-2">
								<h3 className="mb-0 aboutUsHeading">About us</h3>
								<div className="borderLine"></div>
								<article>
									{description.map((paragraph) => {
										return <p className="s3 mb-4">{paragraph}</p>;
									})}
								</article>
							</div>
						</Col>
						<Col sm>
							{/* <img src={landingImg} className="landingImg" alt="landingImg" /> */}
							<div className="group">
								<img src={Group} alt="Group" className="groupImg" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="missidon">
				<Container fluid>
					{modal.map((model, index) => {
						return (
							<div className="modaal py-2" key={index}>
								{index % 2 === 0 ? (
									<Row key={index} className="roseBox">
										<Col md={6}>
											<div className="iconBox">
												<img
													src={mediaBaseUrl + model.image}
													alt="missionImg"
													className="missionImg"
												/>
											</div>
										</Col>
										<Col md={6}>
											<div className="textMission">
												<h3>{model.name}</h3>
												<p className="s2">{model.description}</p>
											</div>
										</Col>
									</Row>
								) : (
									<Row style={{ background: "#fff" }} className="py-2">
										<Col sm>
											<div className="textMission">
												<h3>{model.name}</h3>
												<p className="s2">{model.description}</p>
											</div>
										</Col>

										<Col sm>
											<div className="iconBox">
												<img
													src={mediaBaseUrl + model.image}
													alt="missionImg"
													className="missionImg"
												/>
											</div>
										</Col>
									</Row>
								)}
							</div>
						);
					})}
				</Container>
			</div>
		</div>
	);
}

export default AboutUs;
