import React from "react";

const CurrentTempUnitContext = React.createContext({
  currentTempUnit: "",
  handleToggleSwitch: () => {},
});

export { CurrentTempUnitContext };
