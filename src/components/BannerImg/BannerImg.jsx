const BannerImg = ({ img }) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "16 / 9", // Maintain a 16:9 aspect ratio
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
