import "./App.css";
import ServiceCard from "./components/ServiceCard";
import { useState } from "react";
import { motion } from "framer-motion";

import SpecialistStage from "./components/SpecialistStage";
import initialSelection from "./data/initialSelection";
import CalendarStage from "./components/CalendarStage";

function App() {
  const contatinerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  //states
  const [currentStage, setCurrentStage] = useState("initial");
  const [selectedCategory, setSelectedCategory] = useState({
    main: null,
    sub: null,
  });
  const [appointmentType, setAppointmentType] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  //when selected, change selectedCategory state
  const handleCategoryClick = (mainCategory, subCategory) => {
    setCurrentStage("selected");
    setSelectedCategory({ main: mainCategory, sub: subCategory });
  };

  //click handles
  const handleRestart = () => {
    setCurrentStage("initial");
    setSelectedCategory({ main: null, sub: null });
  };

  const handleAppointmentTypeClick = (type, specialist) => {
    setAppointmentType(type);
  };

  return (
    <>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRestart}
      >
        restart
      </button>
      {currentStage === "initial" && (
        <section className="px-2.5">
          <h1 className="">Work With Us Today</h1>
          <p>
            Check out our availability and book the date and time that works for
            you.
          </p>
          <div id="services" className="flex flex-col gap-y-2">
            <ServiceCard
              serviceName={"Specialist Sessions"}
              details={initialSelection.specialistDetails}
              onCategoryClick={(subCategory) => {
                handleCategoryClick("specialist", subCategory);
              }}
            ></ServiceCard>
            <ServiceCard
              serviceName={"Room Rentals"}
              details={initialSelection.roomRentalsDetails}
              onCategoryClick={(subCategory) => {
                handleCategoryClick("room", subCategory);
              }}
            ></ServiceCard>
            <ServiceCard
              serviceName={"Collaborate With Rhozeland"}
              details={initialSelection.collaborateDetails}
              onCategoryClick={(subCategory) => {
                handleCategoryClick("collaborate", subCategory);
              }}
            ></ServiceCard>
          </div>
        </section>
      )}
      <div>
        {currentStage === "selected" && (
          <>
            {selectedCategory.main === "specialist" && (
              <>
                {selectedCategory.sub === "SOUND/MUSIC" && (
                  <SpecialistStage
                    contatinerVariants={contatinerVariants}
                    category={selectedCategory}
                    onAppointmentTypeClick={handleAppointmentTypeClick}
                    onSpecialistSelect={setSelectedSpecialist}
                  />
                )}
                {selectedCategory.sub === "PHOTO/VIDEO" && <h1>PHOTO/VIDEO</h1>}
                {selectedCategory.sub === "BUSINESS/WRITTING" && (
                  <h1>BUSINESS/WRITTING</h1>
                )}
                {selectedCategory.sub === "DESIGN" && <h1>DESIGN</h1>}
              </>
            )}
            {selectedCategory.main === "room" && (
              <>
                {selectedCategory.sub === "PHOTO/VID ROOM" && (
                  <h1>ROOM - PHOTO VIDEO ROOM</h1>
                )}
                {selectedCategory.sub === "SOUND/MUSIC ROOM" && (
                  <h1>ROOM - SOUND MUSIC ROOM </h1>
                )}
              </>
            )}
            {selectedCategory.main === "collaborate" && (
              <>
                {selectedCategory.sub === "START A PROJECT" && (
                  <h1>COLLABORATE - start a project</h1>
                )}
                {selectedCategory.sub === "CONSULTATION" && (
                  <h1>COLLABORATE - Consulation</h1>
                )}
              </>
            )}
            {appointmentType && selectedSpecialist && (
              <CalendarStage
                appointmentType={appointmentType} // Pass appointment type
                specialist={selectedSpecialist} // Pass selected specialist
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
