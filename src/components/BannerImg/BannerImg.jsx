import PropTypes from "prop-types";

const BannerImg = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    aspectRatio: "16 / 9",
  };
  return <div data-aos="zoom-in" className="w-full" style={bgImage}></div>;
};

BannerImg.propTypes = {
  img: PropTypes.string.isRequired,
};

export default BannerImg;
