import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { motion } from "framer-motion";

import "./Dialog.scss";
import { images } from "../../constants";
import { urlFor } from "../../client";

function MyDialog({ project, onClose, isModalOpen }) {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape" && isModalOpen) {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isModalOpen, onClose]);
	return (
		<Transition.Root show={isModalOpen} as={Fragment}>
			<Dialog
				as="div"
				className="custom-dialog"
				onClose={() => onClose} //it doesn't work here (no invoke) but has to be in Dialog I mean 'onClose' tag
			>
				<div
					className="overlay"
					data-close-button="true"
					onClick={onClose}
				></div>
				<div className="dialog-content">
					{/* Dialog content */}
					<div className="app__work-item app__flex">
						<div className="app__work-img app__flex">
							<img src={urlFor(project.imgUrl)} alt={project.name} />
						</div>
						<div className="app__work-content app__flex">
							<h4 className="bold-text">{project.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{project.description}
							</p>
							<div className="app__work-tag app__flex">
								<p className="p-text">{project.tags[0]}</p>
							</div>
						</div>
					</div>{" "}
					<button onClick={onClose} data-close-button="true">
						Close
					</button>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

export default MyDialog;
