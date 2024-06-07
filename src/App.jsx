import "./App.css";
import ServiceCard from "./components/ServiceCard";
import { motion } from "framer-motion";
import SpecialistStage from "./components/SpecialistStage";
import initialSelection from "./data/initialSelection";
import CalendarStage from "./components/CalendarStage";
import { CategoryProvider, CategoryContext } from "./context/CategoryContext";

function App() {
  const containerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    show: { opacity: 1, x: 0 },
  };

  return (
    <CategoryProvider>
      <CategoryContext.Consumer>
        {({
          currentStage,
          selectedCategory,
          appointmentType,
          selectedSpecialist,
          selectedLocation,
          handleCategoryClick,
          handleRestart,
          setAppointmentType,
          setSelectedSpecialist,
          setSelectedLocation,
        }) => (
          <>
            <div className="state-dashboard bg-gray-200 p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-lg font-semibold">Current State Overview:</h2>
              <ul>
                <li>Current Stage: {currentStage}</li>
                <li>
                  Selected Main Category: {selectedCategory.main || "None"}
                </li>
                <li>Selected Sub Category: {selectedCategory.sub || "None"}</li>
                <li>Appointment Type: {appointmentType || "None"}</li>
                <li>Selected Location: {selectedLocation || "None"}</li>
                <li>Selected Specialist: {selectedSpecialist || "None"}</li>
              </ul>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleRestart}
            >
              restart
            </button>
            {currentStage === "initial" && (
              <section className="px-2.5">
                <h1 className="">Work With Us Today</h1>
                <p>
                  Check out our availability and book the date and time that
                  works for you.
                </p>
                <div id="services" className="flex flex-col gap-y-2">
                  <ServiceCard
                    serviceName={"Specialist Sessions"}
                    details={initialSelection.specialistDetails}
                  ></ServiceCard>
                  <ServiceCard
                    serviceName={"Room Rentals"}
                    details={initialSelection.roomRentalsDetails}
                  ></ServiceCard>
                  <ServiceCard
                    serviceName={"Collaborate With Rhozeland"}
                    details={initialSelection.collaborateDetails}
                  ></ServiceCard>
                </div>
              </section>
            )}
            <div>
              {currentStage === "selected" && (
                <>
                  {/* SPECIALIST STAGE */}
                  {selectedCategory.main === "Specialist Sessions" && (
                    <>
                      <SpecialistStage
                        containerVariants={containerVariants}
                        category={selectedCategory}
                        onAppointmentTypeClick={setAppointmentType}
                        appointmentType={appointmentType}
                        handleSpecialistSelect={setSelectedSpecialist}
                        onLocationSelect={setSelectedLocation}
                        selectedSpecialist={selectedSpecialist}
                        selectedLocation={selectedLocation}
                      />
                    </>
                  )}
                  {/* ROOM STAGE */}
                  {selectedCategory.main === "Room Rentals" && (
                    <>
                      {selectedCategory.sub === "PHOTO/VID ROOM" && (
                        <h1>ROOM - PHOTO VIDEO ROOM</h1>
                      )}
                      {selectedCategory.sub === "SOUND/MUSIC ROOM" && (
                        <h1>ROOM - SOUND MUSIC ROOM </h1>
                      )}
                    </>
                  )}
                  {/* COLLABORATE STAGE */}
                  {selectedCategory.main === "Collaborate With Rhozeland" && (
                    <>
                      {selectedCategory.sub === "START A PROJECT" && (
                        <h1>COLLABORATE - start a project</h1>
                      )}
                      {selectedCategory.sub === "CONSULTATION" && (
                        <h1>COLLABORATE - Consulation</h1>
                      )}
                    </>
                  )}

                  {/* CALENDAR STAGE */}
                  {appointmentType && selectedSpecialist && (
                    <CalendarStage
                      appointmentType={appointmentType}
                      specialist={selectedSpecialist}
                    />
                  )}
                </>
              )}
            </div>
          </>
        )}
      </CategoryContext.Consumer>
    </CategoryProvider>
  );
}

export default App;
