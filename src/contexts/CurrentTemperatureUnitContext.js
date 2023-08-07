import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitch: () => {},
});

export { CurrentTemperatureUnitContext };
