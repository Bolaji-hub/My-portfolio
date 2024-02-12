import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold p-2 inline border-b-4 mb-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg mt-26 ">
          I am skilled in creating and maintaining high-quality websites that
          are visually appealing, user-friendly, and technically sound. With a
          strong experience in a variety of programming languages and
          frameworks, I am able to tackle complex projects and deliver
          successful solutions for my clients. I am committed to staying
          up-to-date with the latest web development technologies and best
          practices, and I have a passion for continuously learning and
          improving my skills.
        </p>
        <br />
        <p className="text-lg">
          I am also a team player and enjoy collaborating with others to bring
          ideas to life. In my previous roles, I have worked on a range of web
          development projects, including building and maintaining corporate
          websites, creating custom web applications, and optimizing websites
          for search engines. I have a strong portfolio of work that showcases
          my abilities and the results I have achieved for my clients. I am
          excited to bring my skills and experience to new challenges and
          opportunities as a web developer. Whether you are in need of a simple
          website refresh or a complex custom application, I am confident that I
          can deliver the solutions you need.
        </p>
      </div>
    </div>
  );
};

export default About;
