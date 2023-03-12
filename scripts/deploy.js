const hre = require("hardhat");

async function main() {
  const NFTMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
  const nFTMarketPlace = await NFTMarketPlace.deploy();

  await nFTMarketPlace.deployed();

  console.log(`deployed contract Address is ${nFTMarketPlace.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
