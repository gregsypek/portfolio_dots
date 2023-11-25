import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
// import { motion } from "framer-motion";

import "./Dialog.scss";
import { images } from "../../constants";
import { urlFor } from "../../client";

// import { images } from "../../constants";
function MyDialog({ project, onClose, isModalOpen }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [maxLength, setMaxLength] = useState(100);
	const handleNext = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex + 1) % project.imgUrls.length
		);
	};

	const handlePrev = () => {
		setCurrentImageIndex(
			(prevIndex) =>
				(prevIndex - 1 + project.imgUrls.length) % project.imgUrls.length
		);
	};

	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + "...";
		}
		return text;
	};
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

	const isSingleImage = project.imgUrls.length <= 1;

	return (
		<Transition.Root show={isModalOpen} as={Fragment}>
			<Dialog
				as="div"
				className="custom__dialog"
				onClose={() => onClose} //it doesn't work here (no invoke) but has to be in Dialog I mean 'onClose' tag
			>
				<div
					className="overlay"
					data-close-button="true"
					onClick={onClose}
				></div>
				<div className="dialog__content">
					<div className="dialog__icons">
						{/* <div className="dialog__icons--project"> */}
						<div className="dialog__links">
							<a
								href={`${project.projectLink}`}
								target="_blank"
								rel="noreferrer"
								className="dialog__icon"
							>
								<img src={images.ViewIcon} alt="view" className="icon" />
							</a>
							<a
								href={`${project.codeLink}`}
								target="_blank"
								rel="noreferrer"
								className="dialog__icon"
							>
								<img
									src={images.GithubIcon}
									alt="arrow view"
									className="icon"
								/>
							</a>
						</div>

						<button className="dialog__icon" data-move-next onClick={onClose}>
							<img src={images.CloseIcon} alt="arrow right" className="icon" />
						</button>
					</div>

					<div className="dialog__body">
						<div className="dialog__body-img">
							{/* <img src={urlFor(project.imgUrl)} alt={project.name} /> */}
							<img
								src={urlFor(project.imgUrls[currentImageIndex]).url()}
								alt={`Screenshot ${currentImageIndex + 1}`}
							/>
						</div>
					</div>
					<div className="dialog__directions">
						<button
							className="dialog__icon "
							data-move-prev
							onClick={handleNext}
							disabled={isSingleImage}
						>
							<img src={images.ArrowLeft} alt="arrow left" className="icon" />
						</button>

						<button
							className="dialog__icon"
							data-move-next
							onClick={handlePrev}
							disabled={isSingleImage}
						>
							<img src={images.ArrowRigth} alt="arrow right" className="icon" />
						</button>
					</div>
					<div className="dialog__desc ">
						<h4 className="bold-text">{project.title}</h4>

						<p
							className="p-text"
							style={{
								marginTop: 10,
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							{truncateText(project.description, maxLength)}
						</p>
						<span
							className="dialog__btn"
							onClick={() => setMaxLength(project.description.length)}
						>
							{maxLength <= 100 ? (
								<strong>More &rarr;</strong>
							) : (
								<strong
									onClick={(e) => {
										e.stopPropagation();
										setMaxLength(100);
									}}
								>
									&larr; Less
								</strong>
							)}
						</span>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

export default MyDialog;
