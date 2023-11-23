import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{["home", "about", "work", "skills", "contact"].map(
				(item, index) => (
					// eslint-disable-next-line
					<a
						href={`#${item}`}
						key={item + index}
						className={`app__navigation-dot ${active=== item && "line"}`}
						style={active === item ? { backgroundColor: "#ffffff" } : {}}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
