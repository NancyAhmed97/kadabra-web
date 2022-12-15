import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../../Assets/Icons/logo.svg";
import "./Navbar.css";
function NavBar({ getActive }) {
	const [theposition, setPosition] = useState(window.pageYOffset);
	const [HoveringNav, setHoveringNav] = useState(false);
	const [navLock, setNavLock] = useState(true);
	let listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		setPosition(winScroll);
	};
	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		if (theposition >= 10) {
			setNavLock(false);
		} else {
			setNavLock(true);
		}
	}, [theposition]);
	const activeState = localStorage.getItem("active");
	return (
		<Navbar
			variant={HoveringNav && navLock ? "light" : "dark"}
			expand="md"
			className={HoveringNav && navLock ? "hover" : "nav"}
			fixed="top"
			onMouseEnter={() => {
				setHoveringNav(true);
			}}
			onMouseLeave={() => {
				setHoveringNav(false);
			}}
		>
			<Container>
				<Navbar.Brand href="#home" onClick={() => getActive("home")}>
					<img src={logo} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link
							href="#home"
							onClick={() => {
								getActive("home");
								setTimeout(() => {
									localStorage.setItem("active", "home");
								}, 10);
							}}
							active={activeState === "home"}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#aboutUs"
							onClick={() => {
								getActive("about");
								setTimeout(() => {
									localStorage.setItem("active", "about");
								}, 10);
							}}
							active={activeState === "about"}
						>
							About Us
						</Nav.Link>
						<Nav.Link
							href="#Plans"
							onClick={() => {
								getActive("Plans");
								setTimeout(() => {
									localStorage.setItem("active", "plans");
								}, 10);
							}}
							active={activeState === "plans"}
						>
							Plans
						</Nav.Link>
						<Nav.Link
							href="#Services"
							onClick={() => {
								getActive("Services");
								setTimeout(() => {
									localStorage.setItem("active", "services");
								}, 10);
							}}
							active={activeState === "services"}
						>
							Services
						</Nav.Link>
						<Nav.Link
							href="#Client"
							onClick={() => {
								getActive("Client");
								setTimeout(() => {
									localStorage.setItem("active", "client");
								}, 10);
							}}
							active={activeState === "client"}
						>
							Clients
						</Nav.Link>
						<Nav.Link
							href="#contactUs"
							onClick={() => {
								getActive("ContactUs");
								setTimeout(() => {
									localStorage.setItem("active", "contact");
								}, 10);
							}}
							active={activeState === "contact"}
						>
							Contact Us
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
