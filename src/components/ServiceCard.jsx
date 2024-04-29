import { HiArrowLongRight } from "react-icons/hi2";

import { useState } from "react";
import ServiceDetails from "./ServiceCardDetails";

const ServiceCard = ({ serviceName }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <>
      <article
        className="svs-card bg-slate-200 text-orange-700 mlandscape:text-blue-800 tablet:text-purple-900 desktop:text-green-900"
        onClick={toggleDetailsVisibility}
      >
        <img
          src="https://picsum.photos/400/300"
          alt="Service preview"
          className="w-full"
        />
        <footer className="card-footer flex justify-between items-center border-b-2 border-black">
          <h2 className="svs-title">{serviceName}</h2>
          <button aria-label="Go to session details" className="details-button">
            <HiArrowLongRight style={{ fontSize: "27px" }}></HiArrowLongRight>
          </button>
        </footer>
        <ServiceDetails isVisible={isDetailsVisible}>
          {/* <img src={podcastImage} alt="Service preview" className="" /> */}
        </ServiceDetails>
      </article>
    </>
  );
};

export default ServiceCard;
