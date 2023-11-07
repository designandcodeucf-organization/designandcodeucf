import React, {useState} from "react";
import Modal from "./Modal.jsx";

class MemberModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: true
        }
    }

    setModalState(modalOpen) {
        this.setState({modalOpen: modalOpen})
    }

    render() {
        return (
            <Modal open={this.state.modalOpen} onClose={() => this.setModalState(false)}>
                <div className="w-96 m-auto flex justify-center items-center p-8 bg-[#1B1B1B] rounded-lg absolute top-[calc(50%+3rem)] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                    <div className="text-white"> 
                        <div className="flex justify-center items-center flex-row space-x-[2.06rem]">
                            <img className="w-[3rem] h-[3rem]" alt="Logo" src="src/assets/DesignCodeTriangle .png"/> 
                            <svg className="fill-white w-[2rem] h-[2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/></svg>
                            <img className="w-[3rem] h-[3rem]" alt="Venmo" src="src/assets/venmo-logo.png"/>
                        </div>
                    <p className="px-1.5 py-4">Please note that clicking this link will take you to Venmo for payment. Don't forget to also join the club on KnightConnect for a complete membership experience. Click 'OK' to proceed.</p>
                    <div className="flex justify-center items-center flex-col">
                        <a className="bg-white p-1 w-[7.5rem] text-black m-1 rounded-lg" href="https://venmo.com/u/Sydney-Sedloff">OK</a>
                        <a className="bg-secondaryPink p-1 w-[7.5rem] m-1 rounded-lg" onClick={() => this.setModalState(false)}>Cancel</a>
                    </div>
                    </div>
               </div>
            </Modal>
        )
    }
}

export default MemberModal;
