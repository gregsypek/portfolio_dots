import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name,
			email,
			message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};
	return (
		<>
			<h2 className="head-text">Drop me an email</h2>
			<div className="app__contact-cards">
				<div className="app__contact-card">
					{/* <img src={images.email} alt="email" /> */}
					<FaMobileAlt />
					<a href="mailto:greg.sypek@gmail.com" className="p-text">
						greg.sypek@gmail.com
					</a>
				</div>
				<div className="app__contact-card">
					{/* <img src={images.mobile} alt="mobile" /> */}
					<FaEnvelope />
					<a href="tel:+48 123456789" className="p-text">
						123456789
					</a>
				</div>

				{!isFormSubmitted ? (
					<div className="app__contact-form app__flex">
						<div className="app__flex">
							<input
								className="p-text"
								type="text"
								name="name"
								value={name}
								placeholder="Your name"
								onChange={handleChangeInput}
							/>
						</div>
						<div className="app__flex">
							<input
								className="p-text"
								type="email"
								name="email"
								placeholder="Your email"
								value={email}
								onChange={handleChangeInput}
							/>
						</div>
						<div>
							<textarea
								className="p-text"
								placeholder="Your message"
								name="message"
								value={message}
								onChange={handleChangeInput}
							/>
						</div>
						<button type="button" className="p-text" onClick={handleSubmit}>
							{loading ? "Sending" : "Send Message"}
						</button>
					</div>
				) : (
					<div>
						<h3 className="head-text" style={{ margin: 50 }}>
							Thank you for getting in touch!
						</h3>
					</div>
				)}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Contact, "app__contact"),
	"contact",
	"app__whitebg"
);
