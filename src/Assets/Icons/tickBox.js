import React from "react";

export default function tickBox({ hoverState }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="17.107"
			height="17.107"
			viewBox="0 0 17.107 17.107"
		>
			<g id="checked" opacity="0.76">
				<g id="Group_721" data-name="Group 721">
					<path
						id="Path_820"
						data-name="Path 820"
						d="M8.554,0a8.554,8.554,0,1,0,8.554,8.554A8.564,8.564,0,0,0,8.554,0Zm4.781,6.3L7.868,11.726a.841.841,0,0,1-1.179.021L3.794,9.111a.869.869,0,0,1-.064-1.2.848.848,0,0,1,1.2-.043l2.294,2.1,4.888-4.888A.864.864,0,0,1,13.334,6.3Z"
						fill={hoverState ? "#CDA656" : "#fff"}
					/>
				</g>
			</g>
		</svg>
	);
}
