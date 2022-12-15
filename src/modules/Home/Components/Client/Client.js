import React, { useRef, useEffect, useState } from "react";
import { mediaBaseUrl } from "../../../../services";
import Slider from "react-slick";
import "./Client.css";
import PrevIcon from "../../../../Assets/Icons/prevIcon";
import NextIcon from "../../../../Assets/Icons/nextIcon";
import axios from "axios";

function Client({ active }) {
	const [clientImg, getClientImg] = useState([]);
	const Client = useRef(null);
	let slider = useRef(null);

	const executeScroll = (ref) => ref.current.scrollIntoView();

	if (active === "Client") {
		executeScroll(Client);
	}

	// const next = () => {
	// 	slider.slickGoTo(1);
	// };

	const SamplePrevArrow = (props) => {
		const { className, style } = props;

		return (
			<div
				onClick={() => slider.slickPrev()}
				className={className}
				style={{ ...style }}
			>
				<PrevIcon />
			</div>
		);
	};
	const SampleNextArrow = (props) => {
		const { className, style } = props;

		return (
			<div
				onClick={() => slider.slickNext()}
				style={{ ...style  }}
				className={className}
			>
				<NextIcon />
			</div>
		);
	};

	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		slidesToShow: 3,
		slidesToScroll: 4,
		initialSlide: 0,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					pauseOnHover: true,
					slidesToShow: 3,
					slidesToScroll: 4,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 600,
				settings: {
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					pauseOnHover: true,
					slidesToShow: 3,
					slidesToScroll: 4,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					pauseOnHover: true,
					slidesToShow: 3,
					slidesToScroll: 4,
					initialSlide: 0,
				},
			},
		],
	};
	useEffect(() => {
		const baseUrl = "https://digital.kadabraservices.com/";
		const GetDigitalServicesFu=async()=>{
		  const res = await axios.get(baseUrl+"Digital/GetDigitalServices");
		  getClientImg(res.data.data);
		  console.log(res.data.data);

		}
		GetDigitalServicesFu()
	
	}, []);
	console.log(clientImg);
	return (
		<>
			<div className="Client" ref={Client}>
				<div className="container">
					<div className="row">
						<h3 className="mb-0 aboutUsHeading">Kadabra Clients</h3>
						<div className="borderLine"></div>

						<Slider
							{...settings}
							accessibility={false}
							ref={(c) => (slider = c)}
						>
							{clientImg&&clientImg.map((img,i) => {
								console.log(img);
								return (
									<div key={i}>
										<div className="clientImg">
											<img src={mediaBaseUrl + img.image} alt="clientImg" />
										</div>
									</div>
								);
							})}

							{/* <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>9</h3>
              </div> */}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default Client;
