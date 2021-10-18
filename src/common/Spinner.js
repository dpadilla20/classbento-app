import React from "react";
import './../assets/spinner.css';

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-3">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
  );
};
