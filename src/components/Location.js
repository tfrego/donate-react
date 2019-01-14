
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

const APP_KEY = process.env.GEOCODING_API_KEY;

const address = '';

const URL = BASE_URL + `${address}` + '&key=' + APP_KEY;
