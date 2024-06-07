import React, { useContext } from "react";
import { motion } from "framer-motion";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { CategoryContext } from "../context/CategoryContext";

const SpecialistStage = ({ containerVariants }) => {
  const {
    selectedCategory,
    appointmentType,
    selectedLocation,
    selectedSpecialist,
    setAppointmentType,
    setSelectedLocation,
    setSelectedSpecialist,
  } = useContext(CategoryContext);

  return (
    <motion.div
      variants={containerVariants}
      exit={{ x: "-100VW" }}
      transition={{ type: "spring", stiffness: 100 }}
      className="py-2 px-4"
    >
      <h1 className="text-2xl font-bold">
        {selectedCategory.sub} SPECIALIST SESSION
      </h1>
      <p>$60/hr</p>
      <div className="info flex justify-between items-center">
        <div>time</div>
        <div>number of people</div>
        <div>room size</div>
      </div>
      <div id="appointment-type" className="mb-4">
        <h2>Appointment Type</h2>
        <div id="appointment-selection" className="flex flex-col gap-3">
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

      {appointmentType === "person" && (
        <motion.div
          id="location-options"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <h2>Location</h2>
          <div className="options flex flex-col gap-3">
            <button
              className={`rounded py-2 px-4 hover:bg-slate-500 ${
                selectedLocation === "earliest"
                  ? "bg-slate-500"
                  : "bg-slate-300"
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
            <div className="flex justify-center items-center">
              <span>OR</span>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="bg-slate-300 rounded py-2 px-4 w-full hover:bg-slate-500"
                placeholder="&#x1F4CD; Add a location"
                onChange={(e) => setSelectedLocation(e.target.value)}
              />
            </div>
          </div>
        </motion.div>
      )}

      <div id="select-specialist" className="bg-slate-200 p-4">
        <div className="flex justify-between items-center">
          <h2>Select a Specialist</h2>
          <div>
            <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500 cursor-pointer">
              &lt;
            </button>
            <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500 cursor-pointer">
              &gt;
            </button>
          </div>
        </div>

        <div className="specialist-list space-y-4">
          <button
            className={`rounded py-2 px-4 w-full hover:bg-slate-500 cursor-pointer ${
              selectedSpecialist === "earliest"
                ? "bg-slate-500"
                : "bg-slate-300"
            }`}
            onClick={() => setSelectedSpecialist("earliest")}
            id="earlist-btn"
          >
            <div className="flex items-center gap-4">
              <HiMiniArrowPathRoundedSquare />
              <span>Earliest Available</span>
            </div>
          </button>
          <div
            className={`specialist flex items-center space-x-4 p-4 rounded cursor-pointer hover:bg-slate-500 ${
              selectedSpecialist === "John Smith-1"
                ? "bg-slate-500"
                : "bg-gray-500"
            }`}
            onClick={() => setSelectedSpecialist("John Smith-1")}
          >
            <img
              src="https://randomuser.me/api/portraits/women/80.jpg"
              alt="Specialist 1"
              className="w-12 h-12 rounded-full"
            />
            <p>John Smith</p>
          </div>
          <div
            className={`specialist flex items-center space-x-4 p-4 rounded cursor-pointer hover:bg-slate-500 ${
              selectedSpecialist === "Jane Smith-1"
                ? "bg-slate-500"
                : "bg-gray-500"
            }`}
            onClick={() => setSelectedSpecialist("Jane Smith-1")}
          >
            <img
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="Specialist 2"
              className="w-12 h-12 rounded-full"
            />
            <p>Jane Smith</p>
          </div>
          <div
            className={`specialist flex items-center space-x-4 p-4 rounded cursor-pointer hover:bg-slate-500 ${
              selectedSpecialist === "Jane Smith-2"
                ? "bg-slate-500"
                : "bg-gray-500"
            }`}
            onClick={() => setSelectedSpecialist("Jane Smith-2")}
          >
            <img
              src="https://randomuser.me/api/portraits/men/80.jpg"
              alt="Specialist 3"
              className="w-12 h-12 rounded-full"
            />
            <p>Jane Smith</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialistStage;
