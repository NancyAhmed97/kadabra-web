import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
function Routes(props) {
	return (
		<Route
			render={({ location }) => (
				<Switch location={location}>
					<Route exact path="/" render={() => <Home />} />
				</Switch>
			)}
		/>
	);
}

export default Routes;
