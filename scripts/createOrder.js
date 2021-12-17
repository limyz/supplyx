const hre = require('hardhat');

async function main() {
  const NFT = await hre.ethers.getContractFactory('SupplyX');
  const URI = ''
  const WALLET_ADDRESS = '0x341Dd2A0C0AaEeEE0E2d6fa568222d2D89AbE015'
  const CONTRACT_ADDRESS = "0x8Be503bcdEd90ED42Eff31f56199399B2b0154CA"
  
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.createOrder(WALLET_ADDRESS, 1, URI);
  console.log("NFT minted:", contract);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});