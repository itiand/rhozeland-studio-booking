import podcastImage from "../assets/podcast.jpg";
const ServiceDetails = ({ isVisible, children }) => {
  return (
    <div className={`details-section ${isVisible ? "expanded" : ""}`}>
      <img src={podcastImage} alt="Service preview" className="w-full" />
    </div>
  );
};

export default ServiceDetails;
