// nfts.forEach(nft => {
//     // ...
//     let auctionButton = document.createElement('button');
//     auctionButton.textContent = 'auction';
//     auctionButton.addEventListener('click', function () {
//       // 拍卖逻辑
//       const auctionFactoryContract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
  
//       const auctionData = {
//         nft: nftContractAddress, // NFT address
//         nftId: nft.id,           // NFT ID
//         startingBid: web3.utils.toWei(nft.priceInWei.toString(), 'ether'), // 起始出价
//         auctionDuration: 86400,  // duration time
//         authorizedAddress: current_address, // authorizedAddress
//         owner: current_address   // owner