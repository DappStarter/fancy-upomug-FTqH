require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture struggle return sad push grunt light army giant'; 
let testAccounts = [
"0xbb999186573524934bdeec9962dcca5a0d29f33159b6b0e413757907ef250dee",
"0x5380fbd28da12fd9c06f85e04f41c0554c39465616f067acf88a9fe6de1f0a21",
"0x57704b5469d8a187ecd71c0c36c4168eb6a4db16c2cdd06fa2654ba486343151",
"0x9684c364b777925e70a3fdf35cca98673247333d6f8eff56e118f8d0e406234d",
"0x59510b68b14148c893c78dd328458f65e91eefa51c4afc4b04eed2fa8cd9cacc",
"0x21481c326c48460c102330050443f5b3d00a3eada6ad2a3f0c13ddf6817243d7",
"0x3ce83a604c5901620ee1c590753cb26acbd8a98f64f9469ac1abd17cf89214b2",
"0xeb96ab022065c616c839a9768e1ea186f807c7a25bf6c399ad9bc3fac1a2bc48",
"0xff5b058155f1d7f18326f43a0daa8cfe187d3e1c4208a9454fca853a722e914a",
"0x2b83e2aeda52f33e4e17c436e863d41cbfbc9448618cf1c11f39cdc0a003ba7b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

