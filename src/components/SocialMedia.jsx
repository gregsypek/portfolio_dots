import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://twitter.com/gregsypek">
					<BsTwitter />
				</a>
			</div>
			<div className="">
				<a href="https://www.linkedin.com/in/grzegorz-sypek-47472a194/">
					<FaLinkedin />
				</a>
			</div>
			<div>
				<a href="https://github.com/gregsypek" className="">
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
