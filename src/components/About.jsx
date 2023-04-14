import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio
          totam iste voluptatem cumque vel, eaque voluptatum eligendi omnis, aut
          suscipit corrupti, illo ducimus beatae nulla magnam et. Voluptate,
          nobis voluptates. Similique quae quam, sunt consequuntur earum facere
          eius iure voluptate sint molestias recusandae amet aliquid, asperiores
          natus doloribus dolore?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ex.
          Doloribus nemo molestiae nostrum harum placeat ut tempore quidem
          perspiciatis, consequatur possimus rerum, ea, autem accusantium
          quibusdam nobis voluptatum! Odit recusandae esse laboriosam deserunt
          hic repellat iste officiis doloremque quod temporibus, sint in eveniet
          tempore, unde nostrum nisi beatae ad?
        </p>
      </div>
    </div>
  );
};

export default About;
