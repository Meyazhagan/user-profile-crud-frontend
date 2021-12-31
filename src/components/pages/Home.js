import React from "react";

function Home() {
  return (
    <div className="flex justify-evenly items-center mt-20">
      <div className="bg-alpha p-4 rounded-lg w-80">
        <p className="text-accent text-2xl uppercase font-bold">Create Using</p>
        <div className="p-4">
          {["React", "React Router", "Tailwind CSS"].map((item, index) => (
            <div className="flex gap-4 text-lg items-center" key={index}>
              <span className="text-green-600 w-10">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z" />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
        <p className="text-accent text-2xl uppercase mt-4 font-bold">
          Implemented{" "}
        </p>
        <div className="p-4">
          {[
            "CRUD Operations",
            "React Router",
            "Context API",
            "Axios Methods",
          ].map((item, index) => (
            <div className="flex gap-4 text-lg items-center" key={index}>
              <span className="text-yellow-600 w-10">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z" />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
