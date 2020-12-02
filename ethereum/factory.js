import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    // '0x54820bF89d6c5c29bF8768196B062164C1801FC6' rinkeby
    '0x79965be4D2778A59F41618817Dcc283eE728E554'
);

export default instance;