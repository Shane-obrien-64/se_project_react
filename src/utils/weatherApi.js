export const getForcastWeather = () => {
  const latitude = 28.34;
  const longitude = -81.99;
  const APIkey = "5191144527d343a1e0404310f968a1ea";
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};
