import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <section>
        <h1>Work With Us Today</h1>
        <p>
          Check out our availability and book the date and time that works for
          you.
        </p>
        <div id="services">
          <div class="svs-card">
            <img src="https://picsum.photos/400/300" alt="" />
            <div>
              <p class="svs-title">Session</p>
              <div>
                <FaBeer></FaBeer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
