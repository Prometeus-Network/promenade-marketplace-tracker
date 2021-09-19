require("dotenv").config();

const healthcheck = require("./healthcheck");
const trackMarketPlace = require("./services/marketplacetracker");

trackMarketPlace();
healthcheck();
