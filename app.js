require("dotenv").config();
require("./healthcheck")();

const trackMarketPlace = require("./services/marketplacetracker");

trackMarketPlace();
