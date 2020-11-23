const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'mention party butter stadium scissors obscure cave service fine hobby trap organ',
	'https://rinkeby.infura.io/v3/66fbccb2856b40b3a622d925568379e9'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });
// const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
//     .deploy({ data: '0x' + compiledFactory.bytecode }) // add bytecode
//     .send({ from: accounts[0] }); // remove gas

  console.log('Contract deployed to', result.options.address);
};
deploy();