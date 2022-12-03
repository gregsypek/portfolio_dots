import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames = null) =>
	function HOC() {
		return (
			<div className={`app__container ${classNames}`} id={idName}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />
					<div className="copyright">
						<p className="p-text">@2020 GREG</p>
						<p className="p-text">All rights reserved</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
