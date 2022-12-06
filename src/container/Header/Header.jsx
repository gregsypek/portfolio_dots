import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						{/* <span>👋 </span> */}
						<div style={{ margin: "0 auto" }}>
							<h1 className="head-text head-text--small">Web Developer</h1>
							<p className="p-text p-text--center">Freelancer</p>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						{/* <p className="p-text">Web Developer</p> */}
						{/* <p className="p-text">Freelancer</p> */}
						<p className="p-text p-text--center">
							Hi my name is{" "}
							<span
								style={{ fontWeight: "bold", fontSize: 16, display: "block" }}
							>
								Grzegorz Sypek
							</span>{" "}
						</p>
						<br />
						<p className="p-text p-text--small">
							I design and create web pages and build projects with attention to
							clarity and details.
						</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img src={images.profile} alt="profile_bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				></motion.img>
			</motion.div>
			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.vue, images.react, images.node].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, "home");
