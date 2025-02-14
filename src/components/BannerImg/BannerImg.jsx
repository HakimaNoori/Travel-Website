const BannerImg = ({ img }) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "16 / 9",
    };
    return (
        <div
            data-aos="zoom-in"
            className="w-full"
            style={bgImage}
        ></div>
    );
};

export default BannerImg;
