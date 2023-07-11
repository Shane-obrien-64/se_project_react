export const getForcastWeather = () => {
  const latitude = 44.34;
  const longitude = 10.99;
  const APIkey = "5191144527d343a1e0404310f968a1ea";
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      console.log(res.json);
      return res.json;
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseData = (data) => {
  console.log(data);
  const main = data.main;
  const temp = main && main[0].temp;
  console.log(temp);
  return temp;
};
