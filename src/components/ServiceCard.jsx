import { HiArrowLongRight } from "react-icons/hi2";

const ServiceCard = ({ serviceName }) => {
  return (
    <article className="svs-card bg-slate-200 mb-2">
      <img
        src="https://picsum.photos/400/300"
        alt="Service preview"
        className="w-full"
      />
      <footer className="card-footer flex justify-between items-center">
        <h2 className="svs-title">{serviceName}</h2>
        <button aria-label="Go to session details" className="details-button">
          <HiArrowLongRight style={{ fontSize: "27px" }}></HiArrowLongRight>
        </button>
      </footer>
    </article>
  );
};

export default ServiceCard;
