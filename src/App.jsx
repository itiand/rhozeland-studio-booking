import "./App.css";

import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <>
      <section className="px-2.5">
        <h1 className="">Work With Us Today</h1>
        <p>
          Check out our availability and book the date and time that works for
          you.
        </p>
        <div id="services">
          <ServiceCard serviceName={"Specialist Sessions"}></ServiceCard>
          <ServiceCard serviceName={"Room Rentals"}></ServiceCard>
          <ServiceCard serviceName={"Collaborate With Rhozeland"}></ServiceCard>
        </div>
      </section>
    </>
  );
}

export default App;
