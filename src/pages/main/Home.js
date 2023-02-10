import React from "react";
import Carousels from "../../components/Carousel/Carousel";
import Covid from "../../components/Covid/Covid";
import InClinic from "../../components/InClinic/InClinic";
import Online from "../../components/Online/Online";
import Service from "../../components/Service/Service";



const Home = () => {
  return <div>
          <Carousels />
          <Service />
          <Online />
          <InClinic />
          <Covid />
        </div>;
};

export default Home;
