import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
const PlacesData = [
  {
    img: Img1,
    title: "Boat tour",
    location: "USA",
    description:
      "The USA offers stunning places to visit, from the Grand Canyon to Times Square. Each destination showcases unique history, culture, and natural beauty.",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Maha is an ivory-white marble mausoleum on the south bank of thee river Yamuna in the Indian city of Agra",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "",
    location: "",
    description:
      "The USA offers stunning places to visit, from the Grand Canyon to Times Square. Each destination showcases unique history, culture, and natural beauty.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description:
      "The USA offers stunning places to visit, from the Grand Canyon to Times Square. Each destination showcases unique history, culture, and natural beauty.",
    price: 7600,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The USA offers stunning places to visit, from the Grand Canyon to Times Square. Each destination showcases unique history, culture, and natural beauty.",
    price: 10000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The USA offers stunning places to visit, from the Grand Canyon to Times Square. Each destination showcases unique history, culture, and natural beauty.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
