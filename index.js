const shortid = require("shortid");
const config = require("config");
const validUrl = require("valid-url");
const long = process.argv[2];
const baseUrl = config.get("baseURL");
if (!validUrl.isUri(baseUrl)) {
  return console.log("Error");
}
const code = shortid.generate();
if (validUrl.isUri(long)) {
  try {
    const short = baseUrl + "/" + code;
    return console.log(short);
  } catch (err) {
    return console.error(err.message);
  }
} else {
  return console.log("Invalid url");
}
