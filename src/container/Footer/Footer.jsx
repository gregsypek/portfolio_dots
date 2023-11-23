import React from "react";
import { MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="app__footer">
				<div className="footer ">
					<ul className="footer__list footer__list--primary">
						<li className=" footer__item">
							<a href="mailto:gregsypek@gmail.com" className="">
								Email
							</a>
						</li>
						<li className=" footer__item">
							<a href="https://twitter.com/gregsypek" className="">
								Twitter
							</a>
						</li>
						<li className=" footer__item">
							<a
								href="https://www.linkedin.com/in/grzegorz-sypek-47472a194/"
								className=""
							>
								Linkedin
							</a>
						</li>
						<li className="footer__item">
							<a href="https://gregsypek.github.io/CV" className="">
								CV
							</a>
						</li>
						<li className="footer__item">
							<a href="#work">Works</a>
						</li>
						<li className="footer__item">
							<a href="#home">Back up</a>
						</li>
					</ul>

					<p className="p-text">
						© <span className="year">{year}</span>&nbsp;Created by gregsypek
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
