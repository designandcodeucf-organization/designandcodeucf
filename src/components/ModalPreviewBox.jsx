import React from "react";
import Button from "./Button.jsx";

class ModalPreviewBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.previewData.name || "Event Name",
			date: props.previewData.date,
			location: props.previewData.location,
			contributors: props.previewData.contributorsPreview,
			description: props.previewData.description || "Event Description",
			subtitle: props.previewData.subtitle,
			previewImage:
				props.previewData.previewImage || "src/assets/DesignCodeTriangle .png",
			public: props.previewData.public,
			past: props.past || false,
		};
		this.handleOpenModal = props.handleOpenModal;
	}
	render() {
		return (
			<div
				className=" text-white flex w-full bg-[#1B1B1B] items-center rounded-[1rem] p-[2rem] "
				style={{
					flexDirection: this.props.reversed ? "row-reverse" : "row",
				}}>
				<div
					className="relative grid place-items-center w-full bg-[#4d97e3] rounded-xl m-3"
					style={{
						aspectRatio: "5/3",
						maxHeight: "30em",
					}}>
					<img
						src={this.state.previewImage}
						alt="Workshop Image"
						style={{
							objectFit: "contain",
							height: "100%",
						}}
					/>
					{this.state.public != null && (
						<div
							className="absolute right-2 bottom-2 font-bold text-[1.5rem]"
							style={{
								backgroundColor: this.state.public ? "#fcc32b" : "#de4169",
								color: this.state.public ? "#000000" : "#ffffff",
								padding: "0.35em 1.5em",
								minWidth: "5em",
								borderRadius: "0.5em",
							}}>
							{this.state.public ? "Open to Public" : "Paid Members Only"}
						</div>
					)}
				</div>
				<div className="flex-col flex w-full text-[1.5rem] justify-between pb-3 h-full ml-3">
					<div>
						<h1
							style={{
								display: "inline-block",
								fontSize: "1.5em",
								fontWeight: "bold",
								padding: "0.15em 0.35em",
								marginLeft: "-0.35em",
								borderRadius: "0.5em",
								textTransform: "uppercase",
								backgroundColor:
									this.state.past || this.state.public == null
										? "transparent"
										: this.state.public
										? "#fcc32b"
										: "#de4169",
								color:
									this.state.public && !this.state.past ? "#000000" : "#ffffff",
							}}>
							{this.state.name}
						</h1>
						<h2 className="text-slate-400 text-[1.25em] font-light">
							{this.state.subtitle}
						</h2>
					</div>
					<p className="text-[1.25em] mt-[1em] mb-[1em]">
						{this.state.description}
					</p>
					<div>
						{this.state.date && (
							<h3 className="text-[1.25em] ">
								<span className="font-bold">Date:</span> {this.state.date}
							</h3>
						)}
						{this.state.location && (
							<h3 className="text-[1.25em] mb-1">
								<span className="font-bold">Location:</span>{" "}
								{this.state.location}
							</h3>
						)}
						{this.state.contributors && (
							<h3 className="text-[1.25em] mb-1">
								<span className="font-bold">Contributors:</span>{" "}
								{this.state.contributors}
							</h3>
						)}
						<Button
							onClick={() => this.handleOpenModal(this.props.previewData)}>
							More Details
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalPreviewBox;
