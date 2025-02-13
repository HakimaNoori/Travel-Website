import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  

const TestimonialData = [
  {
    id: 1,
    title: "Samue",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    title: "John Don",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    title: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">What Our Clients Say</h1>
          <p className="text-xs text-gray-500">
            Our clients love working with us! Here’s what they have to say.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            natus?
          </p>
        </div>

        {/* Testimonial Section */}
        <Slider {...settings}>
          {TestimonialData.map(({ id, title, img, text }) => (
            <div key={id} className="my-6">
              <div className="flex flex-col justify-center gap-4 items-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                <img
                  src={img}
                  alt={title}
                  className="rounded-full block mx-auto"
                />
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-gray-500 text-sm">{text}</p>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
