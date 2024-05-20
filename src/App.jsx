import "./App.css";
import ServiceCard from "./components/ServiceCard";
import { useState } from "react";
import { motion } from "framer-motion";

import SpecialistStage from "./components/SpecialistStage";
import initialSelection from "./data/specialistDetails";

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

  //when selected, change selectedCategory state
  const handleCategoryClick = (mainCategory, subCategory) => {
    //set selected category
    //stage change to the next
    setCurrentStage("selected");
    setSelectedCategory({ main: mainCategory, sub: subCategory });
  };

  const handleRestart = () => {
    setCurrentStage("initial");
    setSelectedCategory({ main: null, sub: null });
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
      {currentStage === "selected" && (
        <motion.div
          variants={contatinerVariants}
          initial="hidden"
          animate="show"
          exit={{ x: "-100VW" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {selectedCategory.main === "specialist" && (
            <>
              {selectedCategory.sub === "SOUND/MUSIC" && (
                <SpecialistStage category={selectedCategory} />
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
        </motion.div>
      )}
      {currentStage === "calendar" && <h1>Calendar Stage</h1>}
    </>
  );
}

export default App;
