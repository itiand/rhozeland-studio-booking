import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CategoryContext } from "../context/CategoryContext";
import CalendarStage from "./CalendarStage";
import { FaClock, FaRulerCombined } from "react-icons/fa"; // Importing icons

const RoomStage = ({ containerVariants }) => {
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
      className="py-2 px-4 bg-black text-white min-h-screen flex flex-col justify-between"
    >
      <div>
        <h1 className="text-2xl font-bold">
          {selectedCategory.sub} STUDIO RENTAL
        </h1>
        <p>From $150</p>
        <div className="info flex justify-between items-center my-4">
          <div className="flex items-center">
            <FaClock className="mr-2" />
            <span>&lt;1 Hour</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-2" />
            <span>800 sqft</span>
          </div>
        </div>
        {/* <div id="appointment-type" className="mb-4">
          <h2 className="text-xl font-semibold">Appointment Type</h2>
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
        </div> */}

        <CalendarStage
          appointmentType={appointmentType}
          specialist={selectedSpecialist}
        />
      </div>
      <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
        NEXT
      </button>
    </motion.div>
  );
};

export default RoomStage;
