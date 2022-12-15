import React, { useState, useEffect, useRef } from "react";
import Navbar from "../SharedComponents/Navbar/NavBar";
import LandingPage from "./Components/landingPage/LandingPage";
import AboutUs from "./Components/aboutUsPage/AboutUs";
import Footer from "../SharedComponents/Footer/Footer";
import Plans from "./Components/PlansPage/Plans";
import Services from "./Components/Services/Services";
import ContactUs from "./Components/ContactUs/ContactUs";
import Client from "./Components/Client/Client";

function Home() {
	const [active, setActive] = useState(null);
	const home = useRef();
	const about = useRef();
	const plans = useRef();
	const services = useRef();
	const client = useRef();
	const contact = useRef();

	const [thePosition, setPosition] = useState(window.pageYOffset);
	useEffect(() => {
		setTimeout(() => {
			setActive(null);
		}, 10);
	}, [active]);

	let listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		setPosition(winScroll);
	};
	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);

		if (
			thePosition >= home.current.offsetTop &&
			thePosition <= home.current.offsetTop + home.current.offsetHeight
		) {
			localStorage.setItem("active", "home");
		} else if (
			thePosition >= about.current.offsetTop &&
			thePosition <= about.current.offsetTop + about.current.offsetHeight
		) {
			localStorage.setItem("active", "about");
		} else if (
			thePosition >= plans.current.offsetTop &&
			thePosition <= plans.current.offsetTop + plans.current.offsetHeight
		) {
			localStorage.setItem("active", "plans");
		} else if (
			thePosition >= services.current.offsetTop &&
			thePosition <= services.current.offsetTop + services.current.offsetHeight
		) {
			localStorage.setItem("active", "services");
		} else if (
			thePosition >= client.current.offsetTop &&
			thePosition <= client.current.offsetTop + client.current.offsetHeight
		) {
			localStorage.setItem("active", "client");
		} else if (
			thePosition >= contact.current.offsetTop &&
			thePosition <= contact.current.offsetTop + contact.current.offsetHeight
		) {
			localStorage.setItem("active", "contact");
		} else {
		}
	}, [thePosition]);

	return (
		<div>
			<Navbar getActive={(active) => setActive(active)} />
			<div ref={home}>
				<LandingPage
					getActive={(active) => {
						setActive(active);
					}}
					active={active}
				/>
			</div>
			<div ref={about}>
				<AboutUs active={active} />
			</div>
			<div ref={plans}>
				<Plans active={active} />
			</div>
			<div ref={services}>
				<Services active={active} />
			</div>
			<div ref={client}>
				<Client active={active} />
			</div>
			<div ref={contact}>
				<ContactUs active={active} />
			</div>
			<Footer getActive={(active) => setActive(active)} />
		</div>
	);
}

export default Home;
