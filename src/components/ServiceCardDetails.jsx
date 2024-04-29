const ServiceDetails = ({ isVisible, children, details }) => {
  // const specialistDetails = {
  //   title: "SELECT A SECIALIST",
  //   startingPrice: 60,
  //   options: [
  //     { icon: FaHeadphones, label: "SOUND/MUSIC", price: "$60+/hr" },
  //     { icon: FaCamera, label: "PHOTO/VIDEO", price: "$60+/hr" },
  //     { icon: TfiWrite, label: "BUSINESS WRITTING", price: "$60+/hr" },
  //     { icon: MdDesignServices, label: "DESIGN", price: "$60+/hr" },
  //   ],
  // };

  console.log("SERVICE CARD");
  const { title, startingPrice, options } = details;
  return (
    <div className={`details-section ${isVisible ? "expanded" : ""}`}>
      {children}
      <h3>{title}</h3>
      <p>Starting at ${startingPrice}/hr</p>
      <div className="options">
        {details.options.map((option, i) => {
          const IconComponent = option.icon;
          return (
            <div className="option-item border border-sky-500">
              <IconComponent />
              {/* labels and price */}
              <div className="option-label">
                <h4>{option.label}</h4>
                <p>{option.price}</p>
              </div>

              {/* question mark icon */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDetails;
