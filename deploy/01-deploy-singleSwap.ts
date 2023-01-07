import {DeployFunction} from "hardhat-deploy/types"
import {HardhatRuntimeEnvironment} from "hardhat/types"

const deploySingleSwapToken: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
    const { deployments, getNamedAccounts, network, ethers } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const args: any[] = []

    log("-----------------Deploying SingleSwapToken------------------")
    const singleSwapToken = await deploy("SingleSwapToken", {
      from: deployer,
      args: args,
      log: true,
  })
    log("contract deployed at: ",singleSwapToken.address)
    log("----------------------------------------------------")
}
export default deploySingleSwapToken   
deploySingleSwapToken.tags = ["all", "singleSwapToken"]