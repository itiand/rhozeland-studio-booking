import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CategoryContext } from "../context/CategoryContext";
import CalendarStage from "./CalendarStage";

const StartAProjectStage = ({ containerVariants }) => {
  const {
    selectedCategory,
    appointmentType,
    selectedLocation,
    setAppointmentType,
    setSelectedLocation,
    projectField,
    setProjectField,
  } = useContext(CategoryContext);

  return (
    <motion.div
      variants={containerVariants}
      exit={{ x: "-100VW" }}
      transition={{ type: "spring", stiffness: 100 }}
      className="py-2 px-4"
    >
      <h1 className="text-2xl font-bold">START A PROJECT</h1>
      <p>From $150</p>
      <div className="info flex justify-between items-center">
        <div>30min Consultation</div>
        <div>800 sqft</div>
      </div>
      <div id="appointment-type" className="mb-4">
        <h2>Appointment Type</h2>
        <div className="flex flex-col gap-3">
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              appointmentType === "person" ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setAppointmentType("person")}
          >
            In Person
          </button>
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              appointmentType === "online" ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setAppointmentType("online")}
          >
            Online
          </button>
        </div>
      </div>
      <div id="location-options" className="mb-4">
        <h2>Location</h2>
        <div className="flex flex-col gap-3">
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              selectedLocation === "earliest" ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setSelectedLocation("earliest")}
          >
            Earliest Available
          </button>
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              selectedLocation === "photo-video"
                ? "bg-slate-500"
                : "bg-slate-300"
            }`}
            onClick={() => setSelectedLocation("photo-video")}
          >
            Photo & Video Studio
          </button>
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              selectedLocation === "music-audio"
                ? "bg-slate-500"
                : "bg-slate-300"
            }`}
            onClick={() => setSelectedLocation("music-audio")}
          >
            Music & Audio Studio
          </button>
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              selectedLocation === "lobby" ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setSelectedLocation("lobby")}
          >
            Lobby
          </button>
        </div>
      </div>
      <div id="project-field" className="mb-4">
        <h2>What Field Is Your Project In?</h2>
        <div className="flex flex-col gap-3">
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              projectField === "Music/Sound" ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setProjectField("Music/Sound")}
          >
            Music/Sound
          </button>
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              projectField === "Photo/Video" ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setProjectField("Photo/Video")}
          >
            Photo/Video
          </button>
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              projectField === "Design" ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setProjectField("Design")}
          >
            Design
          </button>
          <button
            className={`rounded py-2 px-4 hover:bg-slate-500 ${
              projectField === "Business Development"
                ? "bg-slate-500"
                : "bg-slate-300"
            }`}
            onClick={() => setProjectField("Business Development")}
          >
            Business Development
          </button>
        </div>
      </div>
      {appointmentType && selectedLocation && projectField && (
        <CalendarStage
          appointmentType={appointmentType}
          specialist={selectedLocation}
        />
      )}
    </motion.div>
  );
};

export default StartAProjectStage;
