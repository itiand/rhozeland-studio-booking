import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
// import logo from "../assets/logo-box.svg"; // Import the SVG file
import RhozelandLogo from "./RhozelandLogo";

// const collaborateDetails = {
//   title: "SELECT A SERVICE",
//   startingPrice: null,
//   options: [
//     { icon: FaCamera, label: "START A PROJECT", price: "FROM $150" },
//     {
//       icon: RhozelandLogo,
//       label: "CONSULTATION",
//       price: "FREE",
//     },
//   ],
// };

const ServiceDetails = ({ isVisible, children, details }) => {
  const { title, startingPrice } = details;
  return (
    <div className={`details-section ${isVisible ? "expanded" : ""}`}>
      {children}
      <h3>{title}</h3>

      {startingPrice && <p>Starting at ${startingPrice}/hr</p>}

      <div className="options">
        {details.options.map((option, i) => {
          const OptionIcon = option.icon;
          const isRhozelandLogo = OptionIcon === RhozelandLogo;

          return (
            <div className="option-item border border-sky-500 flex justify-between content-center">
              {/* 1st row - icon */}
              <div className="self-center">
                {isRhozelandLogo ? (
                  <RhozelandLogo strokeColor="blue" />
                ) : (
                  <OptionIcon />
                )}
              </div>
              {/* 2nd row - labels and price */}
              <div className="option-label">
                <h4>{option.label}</h4>
                <p>{option.price}</p>
              </div>

              {/*3rd icon - question mark icon */}
              <div className="self-end">
                <HiOutlineQuestionMarkCircle />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDetails;
