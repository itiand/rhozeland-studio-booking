import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
// import logo from "../assets/logo-box.svg"; // Import the SVG file
import RhozelandLogo from "./RhozelandLogo";

//Details example
// {
//   title: "SELECT A SECIALIST",
//   startingPrice: 60,
//   options: [
//     { icon: FaHeadphones, label: "SOUND/MUSIC", price: "$60+/hr" },
//     { icon: FaCamera, label: "PHOTO/VIDEO", price: "$60+/hr" },
//     { icon: TfiWrite, label: "BUSINESS/WRITTING", price: "$60+/hr" },
//     { icon: MdDesignServices, label: "DESIGN", price: "$60+/hr" },
//   ],
// },

const ServiceDetails = ({ isVisible, children, details, onCategoryClick }) => {
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
            <div
              key={i}
              className="option-item border border-sky-500 flex justify-between content-center cursor-pointer hover:bg-sky-200"
              onClick={() => {
                onCategoryClick(option.label);
              }}
            >
              {/* 1st column - icon */}
              <div className="self-center">
                {isRhozelandLogo ? (
                  <RhozelandLogo strokeColor="blue" />
                ) : (
                  <OptionIcon />
                )}
              </div>
              {/* 2nd column - labels and price */}
              <div className="option-label">
                <h4>{option.label}</h4>
                <p>{option.price}</p>
              </div>

              {/*3rd column - question mark icon */}
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
