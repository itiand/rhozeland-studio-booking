const ServiceDetails = ({ isVisible, children, options }) => {
  return (
    <div className={`details-section ${isVisible ? "expanded" : ""}`}>
      {children}
      {options.map((option, i) => {
        const IconComponent = option.icon;
        return <IconComponent />;
      })}
    </div>
  );
};

export default ServiceDetails;
