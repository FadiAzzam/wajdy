import React from "react";

const About = () => {
  return (
    <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
      <div className="py-28 container mx-auto flex flex-col gap-20">
        <div className="text-left">
          <p className="mb-4 text-base bg-blue-200 font-bold inline-block p-2 rounded-xl">
            Portfolio
          </p>
          <h2 className="mb-4 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900">
            About me
          </h2>
        </div>

        <div className="flex flex-col justify-center md:flex-row gap-5 items-center">
          <div className="basis-1/2 flex justify-center items-center">
            <img
              className="rounded-full w-64 h-64 ring-1 ring-blue-100"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div className="basis-1/2 text-justify">
            <p className="text-lg">
              Welcome to my portfolio website! My name is Wajdy Azzam, and I'm a
              graphic and web designer based in Syria. I specialize in creating
              visually stunning designs for both print and digital media. As a
              freelancer, I've had the opportunity to work with a wide range of
              clients, from small startups to large corporations. My expertise
              includes branding, logo design, website design, and more. In my
              work, I'm passionate about creating designs that not only look
              great but also solve real-world problems. I believe that good
              design is about more than just aesthetics - it's about creating
              solutions that meet the needs of both the client and the end user.
              On this website, you'll find a selection of my best work. Each
              project is accompanied by a brief description that highlights my
              role in the project and the challenges that I faced. If you'd like
              to learn more about any of the projects or my design process,
              please don't hesitate to get in touch. When I'm not designing, you
              can find me exploring the outdoors or experimenting with new
              recipes in the kitchen. I'm always looking for new challenges and
              opportunities to learn and grow as a designer. Thank you for
              visiting my portfolio website, and I look forward to hearing from
              you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
