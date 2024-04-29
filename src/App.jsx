import "./App.css";
import ServiceCard from "./components/ServiceCard";
import { FaHeadphones, FaCamera } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdDesignServices } from "react-icons/md";

const specialistSessionsOptions = [
  { icon: FaHeadphones, label: "SOUND/MUSIC", price: "$60+/hr" },
  { icon: FaCamera, label: "PHOTO/VIDEO", price: "$60+/hr" },
  { icon: TfiWrite, label: "BUSINESS WRITTING", price: "$60+/hr" },
  { icon: MdDesignServices, label: "DESIGN", price: "$60+/hr" },
];

// const roomRentalsOptions = [
//   { icon: "photo-room-icon.png", label: "PHOTO/VID ROOM", price: "$50+/hr" },
//   { icon: "sound-room-icon.png", label: "SOUND/MUSIC ROOM", price: "$50+/hr" },
// ];

// const collaborateOptions = [
//   {
//     icon: "start-project-icon.png",
//     label: "START A PROJECT",
//     price: "FROM $150",
//   },
//   { icon: "consultation-icon.png", label: "CONSULTATION", price: "FREE" },
// ];

function App() {
  return (
    <>
      <section className="px-2.5">
        <h1 className="">Work With Us Today</h1>
        <p>
          Check out our availability and book the date and time that works for
          you.
        </p>
        <div id="services" className="flex flex-col gap-y-2">
          <ServiceCard
            serviceName={"Specialist Sessions"}
            options={specialistSessionsOptions}
          ></ServiceCard>
          <ServiceCard
            serviceName={"Room Rentals"}
            options={specialistSessionsOptions}
          ></ServiceCard>
          <ServiceCard
            serviceName={"Collaborate With Rhozeland"}
            options={specialistSessionsOptions}
          ></ServiceCard>
        </div>
      </section>
    </>
  );
}

export default App;
