import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//import { Home } from "./views/home";
import injectContext from "./store/appContext";
import Contacts from "./views/Contacts";
import AddContact from "./views/AddContact";
import EditContact from "./component/EditContact";






//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>


				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/addcontact" element={<AddContact />} />
					<Route path="/Contacts" element={<Contacts />} />
					<Route path="/" element={<Contacts />} />
					<Route path="/EditContact/:id" element={<EditContact />} />

				</Routes>


			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
