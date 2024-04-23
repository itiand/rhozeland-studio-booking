import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import "./App.css";

function App() {
  return (
    <>
      <section class="px-2.5">
        <h1 class="">Work With Us Today</h1>
        <p>
          Check out our availability and book the date and time that works for
          you.
        </p>
        <div id="services">
          <div class="svs-card bg-slate-200">
            <img src="https://picsum.photos/400/300" alt="" class="w-full" />
            <div class="flex justify-between items-center">
              <p class="svs-title">Session</p>
              <div>
                <HiArrowLongRight
                  style={{ fontSize: "27px" }}
                ></HiArrowLongRight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
