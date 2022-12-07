import React from "react";
import {
	About,
	Footer,
	Header,
	Skills,
	Testimonials,
	Work,
	Contact,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
