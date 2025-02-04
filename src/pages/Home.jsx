import MainVid from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";


const Home = () => {
  return (
    <div>
      <div className="relative h-[700px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={MainVid} type="video/mp4" />
        </video>
        <Hero/>
      </div>
      <Places/>
    </div>
  );
};

export default Home;
