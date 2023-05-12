import React from "react";

const Contact = () => {
  return (
    <div className="flex  justify-center items-center h-full">
      <div className="container">
        <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="drop-shadow-2xl backdrop-blur p-3 bg-gray-700/20 rounded-lg py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Contact Me
                </h2>
                <p className=" py-3">
                  Want to get in touch? You can reach me at [Email Address] or
                  [Phone Number]. Connect with me on LinkedIn or Behance to stay
                  up-to-date on my latest projects and design tips.
                </p>

                <div className="flex justify-center gap-3 mt-4">
                  <a
                    className="text-blue-500 hover:text-blue-600"
                    href="https://www.linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/your-github"
                    className="text-blue-500 hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Behance</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
