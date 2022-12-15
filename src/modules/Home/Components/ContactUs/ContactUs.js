import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { sendMessage } from "../../network";
import "./ContactUs.css";

function ContactUs({ active }) {
	const ContactUs = useRef(null);

	const executeScroll = (ref) => ref.current.scrollIntoView();

	if (active === "ContactUs") {
		executeScroll(ContactUs);
	}

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState(null);
	const [errAlert, setErrAlert] = useState(false);

	const resetFields = () => {
		setFirstName("");
		setLastName("");
		setMessage("");
		setEmail("");
	};
	const sendData = (e) => {
		e.preventDefault();
		let body = {
			Name: firstName + " " + lastName,
			Email: email,
			Message: message,
		};
		sendMessage(
			body,
			(success) => {
				if (success.success === true) {
					setResponse({
						status: 200,
						message: "Message was sent Successfully.",
					});

					resetFields();
				}
			},
			(fail) => {
				if (fail.response.data) {
					setResponse({
						status: 400,
						message: "Something went wrong!",
					});
				}
			}
		);
		if (firstName === "" || lastName === "" || email === "" || message === "") {
			setErrAlert(true);
		}
	};

	if (response) {
		setTimeout(() => {
			setResponse(null);
		}, 4000);
	}

	return (
		<div className="contactUs" ref={ContactUs}>
			<Container>
				<h3 className="mb-0 aboutUsHeading">Contact us</h3>
				<div className="borderLine"></div>
				<p className="s3 primary-color">
					Have an inquiry or some feedback for us ?
				</p>
				<p className="s3 primary-color">
					Fill Out the form below to contact our team.
				</p>
				<div className="formContainer">
					{response && (
						<div
							className={
								response.status === 200
									? "messageBox successMessage s3 my-2"
									: "messageBox failMessage s3 my-2"
							}
						>
							{response.message}
						</div>
					)}
					<form onSubmit={sendData}>
						<Row>
							<Col md={6}>
								<div className="form-control-box">
									<label>First Name</label>
									<div>
										<input
											type="text"
											className={
												errAlert && firstName === ""
													? "form-control alert"
													: "form-control "
											}
											onChange={(e) => setFirstName(e.target.value)}
											value={firstName}
										/>
									</div>
								</div>
							</Col>
							<Col md={6}>
								<div className="form-control-box">
									<label>Last Name</label>
									<div>
										<input
											type="text"
											className={
												errAlert && lastName === ""
													? "form-control alert"
													: "form-control "
											}
											onChange={(e) => setLastName(e.target.value)}
											value={lastName}
										/>
									</div>
								</div>
							</Col>
							<div className="form-control-box">
								<label>Email Address</label>
								<input
									type="email"
									className={
										errAlert && email === ""
											? "form-control alert"
											: "form-control "
									}
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>
							<div className="form-control-box">
								<label>Message</label>
								<textarea
									className={
										errAlert && message === ""
											? "form-control alert"
											: "form-control "
									}
									rows="5"
									col="12"
									name="message"
									onChange={(e) => setMessage(e.target.value)}
									value={message}
								/>
							</div>
							<div className="btnContainer">
								<button className="btn">Send</button>
							</div>
						</Row>
					</form>
				</div>
			</Container>
		</div>
	);
}

export default ContactUs;
