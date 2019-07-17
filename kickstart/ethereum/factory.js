import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC9f432FA96da3A6A7c7727D94325EA3e418f0463'
);

export default instance;
