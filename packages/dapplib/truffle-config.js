require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strong radar toss hospital hunt desert flock slush'; 
let testAccounts = [
"0xda4ee797547ad9ad6909cee236d78bfb9c63876696543b1e1073e9f110badb3f",
"0xd4dcfb5f7f8d270e1883ff8b6459a0b9f1f6f82de8ce5c299a0d23af9397c9cf",
"0x6ac84eb889c4ab0c75f016a680b92b6994b699ea75768cd1efdb8f8bb417cc94",
"0x32f5b6104ee12046b2b78e032d2b3728f79f144ff91c8376f7de2c1d9ced90b2",
"0xce799330be325a28b7a24ea6478c66be604fdac46ecda913e5944188d44c73f3",
"0x1d3ae86f49d2dc2c6f79aa888d24dd308e04aea33717d46dd56678bcd07a959d",
"0x7e4aa7328157c8527482676c8c855f60da0e6a19a62f58b9d9e62b413ccea8e0",
"0xda168454a5cb2218400968f652e37e26742b8d33cbb57a14f68f04a98d592a3f",
"0x12994d845401bbe6bf1fe8c7cfc21fc151b67ae393094b2507c3f1c7fe5cb7d0",
"0xa68a678d9b0e5c978ed9bad0582c82c13fd6d3b2597cfda9db921d0a1d239931"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

