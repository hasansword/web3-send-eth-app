//https://eth-goerli.g.alchemy.com/v2/D83DjEnEpEUceGA2tyn_hom90Rr2gqzE
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/D83DjEnEpEUceGA2tyn_hom90Rr2gqzE',
      accounts: [ '2fde5b465cfc06f4f4c175ef89eeae49a15261dc20cc94127744382793c63f9d' ]
    }
  }
}