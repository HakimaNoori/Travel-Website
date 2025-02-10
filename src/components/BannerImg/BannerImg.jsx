 

const BannerImg = ({ img }) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
    }
    return (
      <div
        data-aos="zoon-in"
        className="h-[400px] w-full"
        style={bgImage}
      ></div>
    );
};

export default BannerImg;