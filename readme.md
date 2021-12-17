# SupplyX
## Introduction
The explosive growth of non-fungible tokens (NFTs) present an opportunity for the industry to launch a decentralized paperless supply chain. We present a typical supply chain and attempt to map this on top of a blockchain, identifying potential directions for interoperability ahead.

Coded in Solidity with _OpenZeppelin_ libraries, _SupplyX_ provides a secure implementation and allow 3 different parities (buyer, seller and carrier) to complete the procure-to-pay process between 2 blockchains: *Ethereum* and *Polygon*. We also provide a *web3* interface to mint the initial order.

## API calls
A total 13 different API calls are introduced to complete the supply chain procure-to-pay process, from order creation to payment release.

* createOrder
* cancelOrder
* createInvoice
* cancelInvoice
* createLading
* assignTradeTerms
* negotiateTradeTerms
* determineLiability
* confirmShipment
* retrieveInvoice
* queryOrder
* queryInvoice
* queryLading

## Deployment
### Prerequistes
* Alchemy, Etherscan and Polygonscan API keys
* hardhat
* nodejs v16.13.1 LTS
* npm v8.1.2

### Instructions
1. Clone project
```bash
git clone https://github.com/limyz/supplyx
```

2. Usage
```bash 
cd SupplyX
npm i
```
Create .env file in root directory and include these variables: `API_URL`, `PRIVATE_KEY`, `ETHERSCAN_API_KEY`

3. Deploy to testnet
```bash 
npm hardhat test
npx hardhat run scripts/deploy.js --network goerli
npx hardhat verify --network goerli DEPLOYED_CONTRACT_ADDRESS
npx hardhat run scripts/deploy.js --network matic
npx hardhat verify --network matic DEPLOYED_CONTRACT_ADDRESS
```
Replace `DEPLOYED_CONTRACT_ADDRESS` with the given NFT address after running `./scripts/deploy.js`.

4. Mint Order 
```bash 
npx hardhat run scripts/createOrder.js --network goerli
````

5. Web3
```bash
cd Minter
npm i
```
Create .env file in root directory and include these variables: `REACT_APP_ALCHEMY_KEY` and `CONTRACT_ADDRESS`
```bash
npm start
```

6. PoS Bridge Mapping

Follow all instructions in https://docs.polygon.technology/docs/develop/ethereum-polygon/submit-mapping-request to complete the asset transfer.
