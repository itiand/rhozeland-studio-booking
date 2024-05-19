import React from "react";
import { motion } from "framer-motion";

const SpecialistStage = ({ category }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{category.sub} SPECIALIST SESSION</h1>
      <p>$60/hr</p>
      <div className="info flex justify-between items-center">
        <div>time</div>
        <div>number of people</div>
        <div>room size</div>
      </div>
      <div id="appointment-type">
        <h2>Appointment Type</h2>
        <div id="appointment-selection" className="flex flex-col gap-3">
          <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500">
            In Person
          </button>
          <button className="bg-slate-300 rounded py-2 px-4 hover:bg-slate-500">
            Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialistStage;
