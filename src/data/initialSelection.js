//icons
import { FaHeadphones, FaCamera } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { MdDesignServices } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import RhozelandLogo from "../components/RhozelandLogo";

const initialSelection = {
  specialistDetails: {
    title: "SELECT A SECIALIST",
    startingPrice: 60,
    options: [
      { icon: FaHeadphones, label: "SOUND/MUSIC", price: "$60+/hr" },
      { icon: FaCamera, label: "PHOTO/VIDEO", price: "$60+/hr" },
      { icon: TfiWrite, label: "BUSINESS/WRITTING", price: "$60+/hr" },
      { icon: MdDesignServices, label: "DESIGN", price: "$60+/hr" },
    ],
  },
  roomRentalsDetails: {
    title: "SELECT A ROOM",
    startingPrice: 50,
    options: [
      { icon: FaCamera, label: "PHOTO/VID ROOM", price: "$50+/hr" },
      {
        icon: FaHeadphones,
        label: "SOUND/MUSIC ROOM",
        price: "$50+/hr",
      },
    ],
  },
  collaborateDetails: {
    title: "SELECT A SERVICE",
    startingPrice: null,
    options: [
      { icon: FaCamera, label: "START A PROJECT", price: "FROM $150" },
      {
        icon: RhozelandLogo,
        label: "CONSULTATION",
        price: "FREE",
      },
    ],
  },
};

export default initialSelection;
