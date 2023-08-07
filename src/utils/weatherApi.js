import { handleServerRes } from "./api.js";

export const getForcastWeather = () => {
  const latitude = 28.59;
  const longitude = -81.35;
  const APIkey = "5191144527d343a1e0404310f968a1ea";
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => handleServerRes(res));
  return weatherApi;
};
