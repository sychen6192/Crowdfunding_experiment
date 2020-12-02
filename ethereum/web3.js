import Web3 from 'web3';

let web3;
// window 2 times server side and client

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are in the server or the user is not running metamask
    // const provider = new Web3.providers.HttpProvider(
    // 'https://rinkeby.infura.io/v3/66fbccb2856b40b3a622d925568379e9'
    // );
    const provider = new Web3.providers.HttpProvider('http://iebilab.nctu.edu.tw:8545');
    web3 = new Web3(provider);
}


export default web3;