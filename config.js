export const config = {
    mainAccountPrivateKey: '0x763a56e41530781b61920a3728ace7f2c19dcdc7740b841fb915ea2e64a3f6d8',
    nftCountPerAccount: 3,
    aptosAmountPerAccount: { min: 0.03, max: 0.09 }, // increase the amount in proportion to NFT count
    gasUnitPrice: 100,
    maxGasAmount: 10000, // increase gas for faster transactions, strictly not recommended
    nodeUrl: "https://fullnode.testnet.aptoslabs.com"
}