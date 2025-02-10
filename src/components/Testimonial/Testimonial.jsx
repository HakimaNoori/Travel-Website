import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima ducimus voluptatem corporis placeat",
    img: "https://picsun.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima ducimus voluptatem corporis placeat",
    img: "https://picsun.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima ducimus voluptatem corporis placeat",
    img: "https://picsun.photos/103/103",
  },
];

const Testimonial = () => {
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
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
      <div className="container">
        {/* header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ducimus voluptatem corporis placeat explicabo harum dignissimos ex
            possimus.
          </p>
        </div>
        {/* textimonial section */}
        <Slider {...setting}>
          {TestimonialData.map(({ id, name, text, img }) => {
            return (
              <div key={id} className="my-6">
                <div>
                  <img src={img} alt="" className="rounded-full block mx-auto" />
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 text-sm">{text}</p>
                  <p>,,</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
