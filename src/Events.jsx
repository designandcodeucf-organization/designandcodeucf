import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Button from "./components/Button.jsx";
import Modal from "./components/Modal.jsx";


const upcomingEvents = [
    {
        name: "Wireframing Workhop",
        date: "Thursday, October 19th, 6:00PM",
        location: "Building name, room number",
        description: "Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. ",
        eventInformation: "Are you interested in web development or UX/UI design? Then come and join us at our first general body meeting this Tuesday, September 12th! \n\n In this meeting you are going to learn about Design& Code club, its officers and future events we are planning to offer. We are also going to play a fun game at the end to get to know each other. Every major and skill level is welcome! We can't wait to see you there! 👩‍💻",
        subtitle: "Technical Workshop",
        previewImage: "src/assets/DesignCodeTriangle .png",
        public: true,
        credits: [
            {
                "Title": "Event Coordinator",
                "Name": "Mya"
            },
            {
                "Title": "Marketing Coordinator",
                "Name": "Casssandra"
            },
            {
                "Title": "Community Coordinator",
                "Name": "Andres"
            }
        ]
    },
    {
        name: "Wireframing Workhop",
        date: "Thursday, October 19th, 6:00PM",
        location: "Building name, room number",
        description: "Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. ",
        eventInformation: "Are you interested in web development or UX/UI design? Then come and join us at our first general body meeting this Tuesday, September 12th! \n\n In this meeting you are going to learn about Design& Code club, its officers and future events we are planning to offer. We are also going to play a fun game at the end to get to know each other. Every major and skill level is welcome! We can't wait to see you there! 👩‍💻",
        subtitle: "Technical Workshop",
        previewImage: "src/assets/DesignCodeTriangle .png",
        public: true,
        credits: [
            {
                "Title": "Event Coordinator",
                "Name": "Mya"
            },
            {
                "Title": "Marketing Coordinator",
                "Name": "Casssandra"
            },
            {
                "Title": "Community Coordinator",
                "Name": "Andres"
            }
        ]
    },
    {
        name: "Wireframing Workhop",
        date: "Thursday, October 19th, 6:00PM",
        location: "Building name, room number",
        description: "Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. ",
        eventInformation: "Are you interested in web development or UX/UI design? Then come and join us at our first general body meeting this Tuesday, September 12th! \n\n In this meeting you are going to learn about Design& Code club, its officers and future events we are planning to offer. We are also going to play a fun game at the end to get to know each other. Every major and skill level is welcome! We can't wait to see you there! 👩‍💻",
        subtitle: "Technical Workshop",
        previewImage: "src/assets/DesignCodeTriangle .png",
        public: true,
        credits: [
            {
                "Title": "Event Coordinator",
                "Name": "Mya"
            },
            {
                "Title": "Marketing Coordinator",
                "Name": "Casssandra"
            },
            {
                "Title": "Community Coordinator",
                "Name": "Andres"
            }
        ]
    }
]

const pastEvents = [
    {
        name: "Wireframing Workhop",
        date: "Thursday, October 19th, 6:00PM",
        location: "Building name, room number",
        description: "Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. ",
        eventInformation: "Are you interested in web development or UX/UI design? Then come and join us at our first general body meeting this Tuesday, September 12th! \n\n In this meeting you are going to learn about Design& Code club, its officers and future events we are planning to offer. We are also going to play a fun game at the end to get to know each other. Every major and skill level is welcome! We can't wait to see you there! 👩‍💻",
        subtitle: "Technical Workshop",
        previewImage: "src/assets/DesignCodeTriangle .png",
        public: true,
        credits: [
            {
                "Title": "Event Coordinator",
                "Name": "Mya"
            },
            {
                "Title": "Marketing Coordinator",
                "Name": "Casssandra"
            },
            {
                "Title": "Community Coordinator",
                "Name": "Andres"
            }
        ]
    },
    {
        name: "Wireframing Workhop",
        date: "Thursday, October 19th, 6:00PM",
        location: "Building name, room number",
        description: "Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. ",
        eventInformation: "Are you interested in web development or UX/UI design? Then come and join us at our first general body meeting this Tuesday, September 12th! \n\n In this meeting you are going to learn about Design& Code club, its officers and future events we are planning to offer. We are also going to play a fun game at the end to get to know each other. Every major and skill level is welcome! We can't wait to see you there! 👩‍💻",
        subtitle: "Technical Workshop",
        previewImage: "src/assets/DesignCodeTriangle .png",
        public: true,
        credits: [
            {
                "Title": "Event Coordinator",
                "Name": "Mya"
            },
            {
                "Title": "Marketing Coordinator",
                "Name": "Casssandra"
            },
            {
                "Title": "Community Coordinator",
                "Name": "Andres"
            }
        ]
    },
    {
        name: "Wireframing Workhop",
        date: "Thursday, October 19th, 6:00PM",
        location: "Building name, room number",
        description: "Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. Lorem ipsum dolor sit amet consectetur. Ut sit nunc in pellentesque lorem tincidunt vulputate. ",
        eventInformation: "Are you interested in web development or UX/UI design? Then come and join us at our first general body meeting this Tuesday, September 12th! \n\n In this meeting you are going to learn about Design& Code club, its officers and future events we are planning to offer. We are also going to play a fun game at the end to get to know each other. Every major and skill level is welcome! We can't wait to see you there! 👩‍💻",
        subtitle: "Technical Workshop",
        previewImage: "src/assets/DesignCodeTriangle .png",
        public: true,
        credits: [
            {
                "Title": "Event Coordinator",
                "Name": "Mya"
            },
            {
                "Title": "Marketing Coordinator",
                "Name": "Casssandra"
            },
            {
                "Title": "Community Coordinator",
                "Name": "Andres"
            }
        ]
    }
]


function Events() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalEventData, setModalEventData] = useState({});

    const handleEventClick = (eventData) => {
        setModalEventData(eventData);  // set the modal data
        setModalOpen(true);  // open the modal
    }


    return (
        <div className="App">
            <NavBar />
            <main className="mt-[10rem] box-border m-0 p-0 px-40">
                {/* Upcoming events */}
                <section className="relative flex flex-col gap-8 flex-none flex-nowrap overflow-visible content-center items-center justify-center h-min w-full">
                    <h2 className="text-white text-left text-[4.2rem] text-5xl font-bold w-full mb-4">
                        Upcoming Events
                    </h2>
                    {/* Create all upcoming events */}
                    {upcomingEvents.map((event, key) => (
                        <EventPreview
                            eventData={event}
                            key={key}
                            handleEventClick={handleEventClick}
                            reversed={key % 2 === 1}
                        />
                    ))}

                </section>
                {/* Past events */}
                <section className="relative flex gap-8 flex-col flex-none flex-nowrap overflow-visible content-center items-center justify-center h-min w-full">
                    <h2 className="text-white text-left text-[4.2rem] text-5xl font-bold w-full mb-4 mt-20">
                        Past Events
                    </h2>
                    {/* Create all past events */}
                    {pastEvents.map((event, key) => (
                        <EventPreview
                            eventData={event}
                            key={key}
                            handleEventClick={handleEventClick}
                            past={true}
                        />
                    ))}
                </section>
            </main>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="text-[1.5rem] absolute top-[calc(50%+3rem)] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center h-min w-[calc(100%-80px)] text-white bg-[#1B1B1B] rounded-xl p-[2rem]" style={{
                    maxHeight: "80vh",
                    overflowY: "scroll"
                }}>
                    <h1 className="font-bold text-[2em] text-center">
                        {modalEventData.name}
                    </h1>
                    <h2 className="text-[1.5em] text-center text-slate-400">
                        {modalEventData.subtitle}
                    </h2>
                    <img
                        className="bg-[#4d97e3] rounded-xl m-3"
                        src={modalEventData.previewImage}
                        alt="Workshop Image"
                        style={{
                            objectFit: "contain",
                            height: "100%"
                        }}
                    />
                    <h3 className="text-[1.25em] w-full text-left mt-[2em]">
                        <span className="font-bold ">Date:</span> {modalEventData.date}
                    </h3>
                    <h3 className="text-[1.25em] mb-[2em] w-full text-left">
                        <span className="font-bold">Location:</span> {modalEventData.location}
                    </h3>
                    <div className="w-full text-left mb-2">
                        <h2 className={"text-[1.85em] text-left font-bold inline p-1 rounded-xl"} style={{
                            backgroundColor: modalEventData.public ? "#fcc32b" : "#de4169",
                            color: modalEventData.public ? "#000000" : "#ffffff",
                        }}>
                            Event Information:
                        </h2>
                    </div>
                    <p className="text-left whitespace-pre-line">
                        {modalEventData.eventInformation}
                    </p>
                    {
                        modalEventData.credits && modalEventData.credits.length > 0 && (
                            <>
                                <h2 className="text-[1.25em] w-full text-left font-bold mt-[2em]">
                                    Credits:
                                </h2>

                                <ul className="text-left w-full text-[0.9em]">
                                    {modalEventData.credits.map((credit, key) => (
                                        <li className="text-left" key={key}>
                                            <span className="font-bold">{credit.Title}: </span> {credit.Name}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )
                    }

                </div>
            </Modal>


        </div>
    );
}



// Takes in the event data and returns a preview of the event
class EventPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.eventData.name || "Event Name",
            date: props.eventData.date || "Event Date",
            location: props.eventData.location || "Event Location",
            description: props.eventData.description || "Event Description",
            subtitle: props.eventData.subtitle || "Event Subtitle",
            previewImage: props.eventData.previewImage || "src/assets/DesignCodeTriangle .png",
            public: props.eventData.public || false,
            past: props.past || false,
        };
        this.handleEventClick = props.handleEventClick;
    }
    render() {
        return (
            <div className=" text-white flex w-full bg-[#1B1B1B] items-center rounded-[1rem] p-[2rem] " style={{
                flexDirection: this.props.reversed ? "row-reverse" : "row"
            }}>
                <div className="relative grid place-items-center w-full bg-[#4d97e3] rounded-xl m-3" style={{
                    aspectRatio: "5/3",
                    maxHeight: "30em",
                }}>
                    <img
                        src={this.state.previewImage}
                        alt="Workshop Image"
                        style={{
                            objectFit: "contain",
                            height: "100%"
                        }}
                    />
                    <div className="absolute right-2 bottom-2 font-bold text-[1.5rem]" style={{
                        backgroundColor: this.state.public ? "#fcc32b" : "#de4169",
                        color: this.state.public ? "#000000" : "#ffffff",
                        padding: "0.35em 1.5em",
                        minWidth: "5em",
                        borderRadius: "0.5em",
                    }}>
                        {this.state.public ? "Open to Public" : "Paid Members Only"}
                    </div>
                </div>
                <div className="flex-col flex w-full text-[1.5rem] justify-between ml-3">
                    <div>
                        <h1 style={{
                            display: "inline-block",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            padding: "0.15em 0.35em",
                            marginLeft: "-0.35em",
                            borderRadius: "0.5em",
                            textTransform: "uppercase",
                            backgroundColor: this.state.past ? "transparent" : this.state.public ? "#fcc32b" : "#de4169",
                            color: this.state.public && !this.state.past ? "#000000" : "#ffffff",
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
                        <h3 className="text-[1.25em] ">
                            <span className="font-bold">Date:</span> {this.state.date}
                        </h3>
                        <h3 className="text-[1.25em] mb-1">
                            <span className="font-bold">Location:</span> {this.state.location}
                        </h3>
                        <Button onClick={() => this.handleEventClick(this.props.eventData)}>More Details</Button>
                    </div>
                </div>

            </div >
        )
    }
}


export default Events;