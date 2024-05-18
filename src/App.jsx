import "./App.css";
import ServiceCard from "./components/ServiceCard";
import { useState } from "react";

//icons
import { FaHeadphones, FaCamera } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdDesignServices } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import RhozelandLogo from "./components/RhozelandLogo";

const specialistDetails = {
  title: "SELECT A SECIALIST",
  startingPrice: 60,
  options: [
    { icon: FaHeadphones, label: "SOUND/MUSIC", price: "$60+/hr" },
    { icon: FaCamera, label: "PHOTO/VIDEO", price: "$60+/hr" },
    { icon: TfiWrite, label: "BUSINESS WRITTING", price: "$60+/hr" },
    { icon: MdDesignServices, label: "DESIGN", price: "$60+/hr" },
  ],
};

const roomRentalsDetails = {
  title: "SELECT A ROOM",
  startingPrice: 50,
  options: [
    { icon: FaCamera, label: "PHOTO/VID ROOM", price: "$50+/hr" },
    {
      icon: FaHeadphones,
      label: "SOUND/MUSIC ROOM",
      price: "$50+/hr",
    },
  ],
};

const collaborateDetails = {
  title: "SELECT A SERVICE",
  startingPrice: null,
  options: [
    { icon: FaCamera, label: "START A PROJECT", price: "FROM $150" },
    {
      icon: RhozelandLogo,
      label: "CONSULTATION",
      price: "FREE",
    },
  ],
};

function App() {
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

  return (
    <>
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
              details={specialistDetails}
              onCategoryClick={(subCategory) => {
                handleCategoryClick("specialist", subCategory);
              }}
            ></ServiceCard>
            <ServiceCard
              serviceName={"Room Rentals"}
              details={roomRentalsDetails}
              onCategoryClick={(subCategory) => {
                handleCategoryClick("room", subCategory);
              }}
            ></ServiceCard>
            <ServiceCard
              serviceName={"Collaborate With Rhozeland"}
              details={collaborateDetails}
              onCategoryClick={(subCategory) => {
                handleCategoryClick("collaborate", subCategory);
              }}
            ></ServiceCard>
          </div>
        </section>
      )}
      {currentStage === "selected" && (
        <div>
          {selectedCategory.main === "specialist" && (
            <>
              {selectedCategory.sub === "SOUND/MUSIC" && <h1>SOUND/MUSIC</h1>}
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
        </div>
      )}
      {currentStage === "calendar" && <h1>Calendar Stage</h1>}
    </>
  );
}

export default App;
