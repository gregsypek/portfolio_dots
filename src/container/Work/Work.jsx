import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Work.scss";
import MyDialog from "../Modal/Dialog";

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const handleModalOpen = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const query = '*[_type=="works"]';

		client.fetch(query).then((data) => {
			// console.log("🚀 ~ file: Work.jsx:20 ~ client.fetch ~ data:", data);
			setWorks(data.sort((a, b) => a.id - b.id));
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);
		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};
	return (
		<>
			<h2 className="head-text head-text--black empty">
				My Websites <span> &</span> Apps
			</h2>

			<div className="app__work-filter">
				{[
					"All",
					"JavaScript",
					"React",
					// "Node",
					"Php",
					"Wordpress",
					"Redux",
					// "Vue",
					"Next",
					"2023",
					"2022",
					"2021",
				].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWork.map((work, index) => {
					console.log("🚀 ~ file: Work.jsx:90 ~ Work ~ work:", work);

					return (
						<div className="app__work-item app__flex" key={index}>
							<div className="app__work-img app__flex">
								{work &&
									work.imgUrls &&
									work.imgUrls.length > 0 &&
									work.imgUrls[0] && (
										<img
											src={urlFor(work.imgUrls[0]).url()} // Wyświetl tylko pierwsze zdjęcie
											alt={`First project screenshot`}
										/>
									)}
								{/* staggerChildren means show one after another
								 */}
								<motion.div
									whileHover={{ opacity: [0, 1] }}
									transition={{
										duration: 0.25,
										ease: "easeInOut",
										staggerChildren: 0.5,
									}}
									className="app__work-hover app__flex"
								>
									{/* <div> */}
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{
											duration: 0.25,
										}}
										className="app__flex"
										onClick={() => handleModalOpen(work)}
									>
										<AiFillEye />
									</motion.div>
									{isModalOpen && (
										<MyDialog
											project={selectedProject}
											onClose={handleModalClose}
											setIsModalOpen={setIsModalOpen}
											isModalOpen={isModalOpen}
										/>
									)}
								</motion.div>
							</div>
							<div className="app__work-content app__flex">
								<h4 className="bold-text">{work.title}</h4>
								<p className="p-text desc" style={{ marginTop: 10 }}>
									{work.description}
								</p>
								<div className="app__work-tag app__flex">
									<p className="p-text">{work.tags[0]}</p>
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>
		</>
	);
};

// export default AppWrap(Work, "work");
export default AppWrap(
	MotionWrap(Work, "app__works"),
	"work",
	"app__primarybg"
);
