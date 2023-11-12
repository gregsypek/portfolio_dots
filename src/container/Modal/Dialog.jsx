import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { motion } from "framer-motion";

import "./Dialog.scss";
import { images } from "../../constants";
import { urlFor } from "../../client";
// import { images } from "../../constants";
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
								// href={props.liveLink}
								href={"/#"}
								target="_blank"
								rel="noreferrer"
								className="dialog__icon"
							>
								<img src={images.ViewIcon} alt="view" className="icon" />
							</a>
							<a
								// href={props.gitLink}
								href={"/#"}
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

						<button
							className="dialog__icon close"
							data-move-next
							// onClick={props.nextImage}
							onClick={onClose}
						>
							<img src={images.CloseIcon} alt="arrow right" className="icon" />
						</button>
						{/* </div> */}
					</div>

					<div className="dialog__body">
						<div className="dialog__body-img">
							<img src={urlFor(project.imgUrl)} alt={project.name} />
						</div>
					</div>
					<div className="dialog__directions">
						<button
							className="dialog__icon "
							data-move-prev
							// onClick={props.prevImage}
							onClick={() => {}}
						>
							<img src={images.ArrowLeft} alt="arrow left" className="icon" />
						</button>

						<button
							className="dialog__icon"
							data-move-next
							// onClick={props.nextImage}
							onClick={() => {}}
						>
							<img src={images.ArrowRigth} alt="arrow right" className="icon" />
						</button>
					</div>
					<div className="dialog__desc">
						<h4 className="bold-text">{project.title}</h4>
						<p className="p-text" style={{ marginTop: 10 }}>
							{project.description}
						</p>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

export default MyDialog;
