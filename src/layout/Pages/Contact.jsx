import React from "react";

const Contact = () => {
  return (
    <div className="flex bg-primaryBG justify-center items-center h-full">
      <div className="container">
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Contact Me
                </h2>
                <p className="text-gray-500 py-3">
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
