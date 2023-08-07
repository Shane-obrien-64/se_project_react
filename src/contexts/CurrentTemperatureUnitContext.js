import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  CurrentTemperatureUnit: "",
  handleToggleSwitch: () => {},
});

export { CurrentTemperatureUnitContext };
