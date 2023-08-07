import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTempUnit: "",
  handleToggleSwitch: () => {},
});

export { CurrentTemperatureUnitContext };
