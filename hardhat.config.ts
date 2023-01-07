import "@typechain/hardhat"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "hardhat-gas-reporter"
import "dotenv/config"
import "solidity-coverage"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config"

const PRIVATE_KEY = process.env.PRIVATE_KEY
const GOERLI_RPC_URL =process.env.GOERLI_RPC_URL
const ALCHEMY_MAINNET_RPC_URL_KEY = process.env.MAINNET_RPC_URL ||
process.env.ALCHEMY_MAINNET_RPC_URL
// const MAINNET_RPC_URL = process.env.ALCHEMY_MAINNET_RPC_URL ALCHEMY_MAINNET_RPC_URL

  const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            forking: {
                url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_MAINNET_RPC_URL_KEY}`,
            },
        },
        localhost: {
            chainId: 31337,
        },
        goerli: {
          url: GOERLI_RPC_URL,
          accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
          chainId: 5,
        },
      },
  solidity: {
    compilers: [
      {
          version: "0.8.8",
      },
      {
          version: "0.4.24",
      },
      {
        version:"0.8.17"
      }
  ],
},
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  }
};

export default config;
