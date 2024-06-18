require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/i4JA9-o2DWRIfoLWKqm8DtJeyw9jxzh3',
      accounts: ['bed26a18b31954e9e4f8d957b9f45635eea64d8d21711d8e72b0da930b96163f'],
    },
  },
};