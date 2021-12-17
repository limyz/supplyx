const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("SupplyX");
  const URI = "ipfs://QmYLcK3NghScgXwBn2KvwfkpPe42sAxdugkkeuSj1txCa4"

  const WALLET_ADDRESS = "0x88456Af78e6b6B13E0dAa08E7a939f5e03ef3935"
  const CONTRACT_ADDRESS = "0x02d32BA21d8637eDf22a6F2447Fd297F129c8Fd0"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.createInvoice(WALLET_ADDRESS, "0x341Dd2A0C0AaEeEE0E2d6fa568222d2D89AbE015", 1);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});