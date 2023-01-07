import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { assert, expect } from "chai"
import { BigNumber, Contract } from "ethers"
import { network, deployments, ethers }from "hardhat"
import {SingleSwapToken,SingleSwapToken__factory,IWETH  } from "../../typechain-types"

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken", function () {
  let singleSwapToken:Contract;
  let accounts: SignerWithAddress[]
  let weth: string;
  let dai: string;
  let usdc: string;
  before(async () => {
    accounts = await ethers.getSigners();
    await deployments.fixture(["singleSwapToken"])
    singleSwapToken = await ethers.getContract("SingleSwapToken")
    console.log("singleSwapToken",singleSwapToken);

    
  })
})
