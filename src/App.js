import Routes from "./Routes.js";
import { useEffect } from "react";
function App() {
	const getDeviceType = () => {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		// iOS detection from: http://stackoverflow.com/a/9039885/177710
		if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !window.MSStream) {
			localStorage.setItem("deviceType", "IOS");
			return "IOS";
		} else {
			localStorage.setItem("deviceType", "ANDROID");
			return "ANDROID";
		}
	};

	useEffect(() => {
		getDeviceType();
	}, []);

	return (
		<div className="App">
			<Routes />
		</div>
	);
}

export default App;
