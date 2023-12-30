import React, { useState } from "react";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";
import ModalPreviewBox from "../components/ModalPreviewBox.jsx";

const ongoingProjects = [
	{
		name: "Project Management System",
		description:
			"The Design & Code club is building its own project management software as a free solution to running ongoing projects for our members. This is a full stack project that will feature completion statuses, a details section for each task, login/credentials for users, and be displayed in Kanban board format.",
		previewImage: "src/assets/randomProject.png",
		contributorsPreview:
			"Sydney Sedloff, Khari DuBard, Danya Baron, Matthew Sand, Mya Mosely, Alyson Franco",
		images: ["src/assets/randomProject.png"],
		contributors: [
			{
				name: "Sydney Sedloff",
				role: "Project Manager",
			},
			{
				name: "Khari DuBard",
				role: "Lead Designer",
			},
			{
				name: "Danya Baron",
				role: "Designer",
			},
			{
				name: "Matthew Sand",
				role: "Lead Developer",
			},
			{
				name: "Mya Mosely",
				role: "Developer",
			},
			{
				name: "Alyson Franco",
				role: "Developer",
			},
		],
	},
];

const projects = [
	{
		name: "Project 1",
		previewImage: "src/assets/randomProject.png",
		images: [
			"src/assets/randomProject.png",
			"src/assets/randomProject.png",
			"src/assets/randomProject.png",
		],
		contributors: [
			{
				name: "A person",
				role: "A Role",
			},
			{
				name: "A person",
				role: "A Role",
			},
			{
				name: "A person",
				role: "A Role",
			},
		],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		links: [
			{
				title: "Link 1",
				link: "https://www.google.com",
			},
			{
				title: "Link 2",
				link: "https://www.google.com",
			},
			{
				title: "Link 3",
				link: "https://www.google.com",
			},
		],
	},
	{
		name: "Project 2",
		previewImage: "src/assets/randomProject.png",
		contributors: [
			{
				name: "A person",
				role: "A Role",
			},
			{
				name: "A person",
				role: "A Role",
			},
			{
				name: "A person",
				role: "A Role",
			},
		],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		name: "Project 3",
		previewImage: "src/assets/randomProject.png",
		contributors: [
			{
				name: "A person",
				role: "A Role",
			},
			{
				name: "A person",
				role: "A Role",
			},
			{
				name: "A person",
				role: "A Role",
			},
		],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

function Projects() {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalProjectData, setModalProjectData] = useState({});

	const handleProjectClick = (projectData) => {
		setModalProjectData(projectData); // set the modal data
		console.log(projectData);
		setModalOpen(true); // open the modal
	};

	const openLink = (link) => {
		window.open(link, "_blank");
	};

	return (
		<div className="App text-white box-border m-0 p-0 px-40 ">
			<div className="text-center ">
				<h1 className="text-[5rem] font-bold">
					<div>The</div>
					<div className="font-light text-[#facc15] leading-6">
						&lt;Project /&gt;
					</div>
					<div>Program</div>
				</h1>
				<p className="text text-[2rem]  font-light box-border m-0 p-0 px-40">
					Some information about the project program goes here. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>
				<a href="https://knightconnect.campuslabs.com/engage/organization/designandcode">
					<button className="transition duration-200 hover:scale-105 text-md bg-[#5DA9E9] font-bold rounded-xl py-4 px-4 mt-8">
						Become a member
					</button>
				</a>
			</div>
			<div className="mt-[10rem] mb-[20rem]">
				<h2 className="text-white text-left text-[4.2rem] text-5xl font-bold w-full mb-[1.5rem]">
					Ongoing Projects
				</h2>
				<div className="flex flex-wrap gap-8 justify-evenly">
					{ongoingProjects.map((project) => (
						<ModalPreviewBox
							previewData={project}
							handleOpenModal={handleProjectClick}
						/>
					))}
				</div>
				<h2 className="text-white text-left text-[4.2rem] text-5xl font-bold w-full mb-[5rem] mt-[1.5rem]">
					Projects
				</h2>
				<div className="flex flex-wrap gap-8 justify-evenly">
					{projects.map((project) => (
						<ProjectPreview
							projectData={project}
							handleProjectClick={handleProjectClick}
						/>
					))}
				</div>
			</div>
			<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
				<div
					className="text-[1.5rem] absolute top-[calc(50%+3rem)] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center h-min w-[calc(100%-80px)] text-white bg-[#1B1B1B] rounded-xl p-[4rem]"
					style={{
						overflowY: "scroll",
					}}>
					<h1 className="font-bold text-[2em] text-left w-full">
						{modalProjectData.name}
					</h1>
					{modalProjectData.images && (
						<ImageGallery modalProjectData={modalProjectData} />
					)}
					<h3 className="text-[1.25em] w-full text-left mt-[2em]">
						<div className="font-bold text-[1.5em]">Description:</div>
						{modalProjectData.description}
					</h3>
					<h3 className="text-[1.25em] mb-[2em] w-full text-left">
						<div className="font-bold text-[1.5em] mt-[2rem]">
							Contributors:
						</div>
						{modalProjectData.contributors
							? modalProjectData.contributors.map((author) => (
									<div>
										<span className="font-bold">{author.role}: </span>
										{author.name}
									</div>
							  ))
							: ""}
					</h3>
					<div className="w-full flex justify-end">
						{modalProjectData.links
							? modalProjectData.links.map((link) => (
									<Button
										onClick={() => openLink(link.link)}
										style={{
											marginLeft: "2rem",
										}}>
										{" "}
										{link.title}{" "}
									</Button>
							  ))
							: ""}
					</div>
				</div>
			</Modal>
		</div>
	);
}

class ProjectPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className="w-[20rem] overflow-hidden rounded-xl cursor-pointer"
				onClick={() => this.props.handleProjectClick(this.props.projectData)}>
				<img
					src={this.props.projectData.previewImage}
					alt={this.props.projectData.name + " Project Image"}
					style={{
						objectFit: "cover",
						width: "100%",
						height: "18rem",
					}}
				/>
				<h3 className="bg-white text-black text-[2.5rem] p-[1rem]">
					{this.props.projectData.name}
				</h3>
			</div>
		);
	}
}

class ImageGallery extends React.Component {
	handleScroll = () => {
		const galleryCenter = window.innerWidth / 2;
		this.props.modalProjectData.images.forEach((image, key) => {
			const imgElement = document.getElementById(`image-${key}`);
			const rect = imgElement.getBoundingClientRect();
			const imgCenter = rect.left + rect.width / 2;
			const distanceToCenter = Math.abs(galleryCenter - imgCenter);

			// Quadratic decay function
			const scale = Math.max(
				1 - (distanceToCenter / galleryCenter) ** 2.5,
				0.5
			);

			imgElement.style.transform = `scale(${scale})`;
		});
	};
	componentDidUpdate() {
		if (this.props.modalProjectData) this.handleScroll();
	}

	render() {
		return (
			<div
				className="flex flex-row align-center overflow-x-scroll  "
				style={{ height: "35rem" }}
				onScroll={this.handleScroll}>
				{this.props.modalProjectData.images
					? this.props.modalProjectData.images.map((image, key) => (
							<img
								id={`image-${key}`}
								key={key}
								className="bg-[#4d97e3] rounded-xl m-3"
								src={image}
								alt="Workshop Image"
								style={{
									objectFit: "contain",
									height: "30rem",
									scrollSnapAlign: "center",
									marginLeft: key === 0 ? "25vw" : "2rem",
									marginRight:
										key === this.props.modalProjectData.images.length - 1
											? "25vw"
											: "2rem",
								}}
							/>
					  ))
					: ""}
			</div>
		);
	}
}

export default Projects;
