require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

module.exports = {
  solidity: "0.8.4",
  networks: {
    dchat: {
      url: "http://34.131.251.161/",
      accounts: [
        "18050930d4886ea1533e557609d447c5374073fee3e01dfd5553233814905386",
      ],
    },
  },
};
