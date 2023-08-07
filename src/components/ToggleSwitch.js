import React, { useContext } from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTempUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  //   const handleChange = () => {
  //     if (currentTempUnit === "C") setCurrentTempUnit("F");
  //     if (currentTempUnit === "F") setCurrentTempUnit("C");
  //   };

  const { currentTempUnit, handleToggleSwitch } = useContext(
    CurrentTempUnitContext
  );

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitch}
      />
      <span
        className={
          currentTempUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTempUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTempUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
