require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 1337,
		},
		goerli: {
			url: process.env.ALCHEMY_APIKEY,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	solidity: {
		compilers: [
			{
				version: "0.8.0",
			},
			{
				version: "0.8.1",
			},
		],
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
