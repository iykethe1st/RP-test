// Toggle.js

import React, { useState } from "react";

const ToggleButton = ({ setIsChecked, isChecked }) => {
  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toggle"
          type="checkbox"
          className="hidden"
          checked={isChecked} // Set checked attribute based on isChecked state
          onChange={toggleHandler}
        />
        <div className="toggle-path bg-[#6F6F76] w-[35px] h-[18px] rounded-full shadow-inner text-[7px] text-white flex flex-col justify-center px-[4px] transition ease-in-out duration-300">
          <div className={`${isChecked ? "text-left" : "text-right"} `}>
            {isChecked ? "ON" : "OFF"}
          </div>
        </div>
        <div
          className={`toggle-thumb absolute w-4 h-4 top-[1px] bg-white rounded-full shadow inset-y-0 ${
            isChecked ? "right-[1px]" : "left-[1px]"
          }`}
        ></div>{" "}
      </div>
    </label>
  );
};

export default ToggleButton;
