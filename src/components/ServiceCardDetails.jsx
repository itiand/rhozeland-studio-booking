import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const ServiceDetails = ({ isVisible, children, details }) => {
  console.log("details", details);
  const { title, startingPrice, options } = details;
  return (
    <div className={`details-section ${isVisible ? "expanded" : ""}`}>
      {children}
      <h3>{title}</h3>

      <p>Starting at ${startingPrice}/hr</p>

      <div className="options">
        {details.options.map((option, i) => {
          const OptionIcon = option.icon;
          return (
            <div className="option-item border border-sky-500 flex justify-between content-center">
              {/* 1st row - icon */}
              <div className="self-center">
                <OptionIcon />
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
