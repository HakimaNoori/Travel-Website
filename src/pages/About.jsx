import React from "react"; 
import Location from "../components/Location/Location.jsx";
const About = () => {
  return (
    <div className="container pt-14">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          nulla temporibus similique hic ut vel perferendis eveniet sed velit ea
          inventore labore corrupti officia explicabo, dignissimos libero modi
          ratione! Sunt, corporis provident! Commodi enim ex corporis omnis
          labore quibusdam molestiae ullam amet placeat doloribus, totam, quos
          laboriosam quidem similique consequatur hic saepe consequuntur.
          Exercitationem obcaecati beatae, odit temporibus sapiente minima.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          laboriosam consequatur eius corrupti illo quod sed, quam reiciendis
          dignissimos ducimus ratione minima dolorem nam est, repellat quas
          accusantium vel assumenda incidunt unde minus error esse molestias
          magnam! Expedita, tempore eum.
        </p>
      </div>
      <Location/>
    </div>
  );
};

export default About;
