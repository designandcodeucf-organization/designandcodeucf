import React from "react";

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onClick: props.onClick || (() => {}),
		};
	}
	render() {
		return (
			<button
				className={
					"text-[1.4rem] px-4 py-2 bg-primaryLight text-black rounded-xl font-bold hover:bg-primaryLightBlue "
				}
				onClick={this.state.onClick}
				style={this.props.style}>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
