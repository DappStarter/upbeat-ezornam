require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift razor trust unusual hover arena equal genre'; 
let testAccounts = [
"0x9a5c2cb101db270710a61326c039898269942e25a8a2729fd24e7b10441f0d3c",
"0x31f6aff2daa9674f305f11478c5e9a5ef7956f2d8972748247b504167bb0a1d8",
"0xf13e0f614a8eb774dcc32f69a81438f5e1746bcf980e4fb4a1112f6d9ced03c3",
"0x7b6485d5a6a2c39c9db6ae87308fff5f9e301be13df74ea0016caf84fd1a923d",
"0x347141ca3c83232b6542b2203e8a5059391fc7201729b27da74c5c5aa906183c",
"0x4f8c54637889e1a656366f7e9bf0650dcc0fc70d5697387700a3d524e5afdb40",
"0x2de94d2f2bb1d95a229a264dd85aa7cff56d6ad4d2d5112d1b0a873163952f93",
"0x665d75a5e9baff34dbe1c32787b1761467f90991d0ba311dd411cba3a5f4a52d",
"0x1b41b4dcd74e48b6238d0a7db0aec92a8ae085e42adde5bac3fe426886eea511",
"0x2141d00d9d69fb4b0313e8588af3414cc4b30fe3532e742c13078a1a47989a01"
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
            version: '^0.5.11'
        }
    }
};
