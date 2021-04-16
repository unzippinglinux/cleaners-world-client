import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import serviceImg1 from "./../../../Images/serviceImg1.jpg";
import serviceImg2 from "./../../../Images/serviceImg2.jpg";
import serviceImg3 from "./../../../Images/serviceImg3.jpg";

const ServiceData = [
  {
    title: "Office Cleaning",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis",
    image: serviceImg1,
  },
  {
    title: "House Cleaning",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis",
    image: serviceImg2,
  },
  {
    title: "Pest Control",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis",
    image: serviceImg3,
  },
];

const Services = () => {
  return (
    <section className="row d-flex justify-content-center mb-5">
      <div className="w-75 row">
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>
          Services We Provide
        </h2>
        {ServiceData.map(info => (
          <ServiceCard info={info}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;