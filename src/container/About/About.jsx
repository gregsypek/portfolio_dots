import React, { useState } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";

import "./About.scss";
import { client } from "../../client";
import { useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			setAbouts(data);
		});
	}, []);
	return (
		<>
			<h2 className="head-text empty">About me</h2>
			<div className="app__profiles">
				{abouts.map((about, index) => {
					console.log("about", about);
					return (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: "tween" }}
							className={`app__profile-item item-${index + 1}`}
							key={about.title + index}
						>
							{" "}
							<div className="about__image">						
								<h2 className="bold-text" style={{ marginTop: 20 }}>									
									{about.title}
								</h2>

								<div className="text-container">
									<p className="p-text" style={{ marginTop: 10 }}>
										{about.description}
									</p>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about"),
	"about",
	"app__whitebg"
);
