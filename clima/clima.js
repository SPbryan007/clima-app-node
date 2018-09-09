const axios = require('axios');
const getClima = async(lat , lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=6f306e5bebdef03a0daf881a730b7419`);
    return resp.data.main.temp;

}
module.exports = {
    getClima
}
