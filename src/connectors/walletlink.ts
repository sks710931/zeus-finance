import {WalletLinkConnector} from "@web3-react/walletlink-connector";

export const walletlink= new WalletLinkConnector({
    url:"https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    appName:"Mint Wizard Creature",
    supportedChainIds:[1]
})