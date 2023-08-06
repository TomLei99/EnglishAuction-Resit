tokenAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "id_list",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
]
tokenAddress = "0x94c4031b8f5180B887BAcaC8d2202A06B3dE0d43"

auctionFactoryAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "auctionContract",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startingBid",
                "type": "uint256"
            }
        ],
        "name": "AuctionCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "nft",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nftId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startingBid",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "auctionDuration",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "authorizedAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "internalType": "struct AuctionFactory.AuctionData",
                "name": "data",
                "type": "tuple"
            }
        ],
        "name": "createAuction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "auctions",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllAuctions",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

auctionFactoryAddress = "0x51E0C40dEA6E49410DcC9c2Cd3F296e26a3E76E3"

auctionAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nft",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_nftId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startingBid",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_auctionDuration",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_authorizedAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "AuctionCanceled",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "bid",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Bid",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "cancelAuction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "end",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "highestBidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "End",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "start",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Start",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "auctionDuration",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "authorizedAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "bids",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "canceled",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endAt",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ended",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAuthorizedAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "highestBid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "highestBidder",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nft",
        "outputs": [
            {
                "internalType": "contract IERC721",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nftId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "started",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

async function getMyAuction() {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            // ask for authorized
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            const contract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
            const accounts = await web3.eth.getAccounts();
            const current_address = accounts[0]; // First account
            contract.methods.getAllAuctions().call()
                .then((datas) => {
                    let nfts = []
                    let container = document.getElementById('myAuction');
                    container.innerHTML = ''; // clean
                    datas.forEach((auction_address, index) => {
                        const auction_contract = new web3.eth.Contract(auctionAbi, auction_address);
                        // Get NFT ID
                        auction_contract.methods.nftId().call()
                            .then(nftId => {
                                // get the highest bidder
                                auction_contract.methods.highestBidder().call()
                                    .then(highestBidder => {
                                        auction_contract.methods.highestBid().call()
                                            .then(h_price => {
                                                console.log("NFT ID:", nftId);
                                                console.log("Highest Bidder:", highestBidder);
                                                console.log("Highest price:", h_price);
                                                
                                            

                                                let div = document.createElement('div');
                                                div.className = 'nft-item';

                                                let img = document.createElement('img');
                                                img.className = 'nft-image';
                                                img.src = "images/picture-01.jpg"
                                                div.appendChild(img);

                                                let details = document.createElement('div');
                                                details.className = 'nft-details';

                                                let idDiv = document.createElement('div');
                                                idDiv.textContent = 'NFT ID: ' + nftId;
                                                details.appendChild(idDiv);

                                                let h_id = document.createElement('div');
                                                h_id.textContent = 'highestBidder: ' + highestBidder;
                                                details.appendChild(h_id);

                                                let price = document.createElement('div');
                                                price.textContent = 'h_price: ' + h_price;
                                                details.appendChild(price);


                                                div.appendChild(details);

                                                container.appendChild(div);
                                            })
                                            .catch(error => {
                                                console.error(error);
                                            });

                                    })
                                    .catch(error => {
                                        console.error(error);
                                    });
                            })
                            .catch(error => {
                                console.error(error);
                            });



                    })
                })

        } catch (error) {
            console.error(error);
        }

    } else {
        console.log();
    }
}


async function fetchMyNFTs() {
    // Get all NFT
    var nfts = []
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
            const accounts = await web3.eth.getAccounts();
            const current_address = accounts[0]; // use the first account
            contract.methods.balanceOf(current_address).call()
                .then((balance) => {
                    const promises = [];
                    for (let i = 0; i < balance; i++) {
                        promises.push(contract.methods.id_list(i).call());
                    }
                    console.log(promises);
                    return Promise.all(promises);

                })
                .then((ids) => {
                    console.log('NFT IDs:', ids);
                    let nfts = []
                    ids.forEach((id, index) => {
                        nfts.push({
                            imageUrl: "images/picture-01.jpg",
                            id: id,
                            priceInWei: 1,
                            index: index
                        })
                    });

                    let container = document.getElementById('myNFT');
                    container.innerHTML = ''; // Clean the output

                    nfts.forEach(nft => {
                        let div = document.createElement('div');
                        div.className = 'nft-item';

                        let img = document.createElement('img');
                        img.className = 'nft-image';
                        img.src = nft.imageUrl; // Assuming image URL is in the nft object
                        div.appendChild(img);

                        let details = document.createElement('div');
                        details.className = 'nft-details';

                        let idDiv = document.createElement('div');
                        idDiv.textContent = 'NFT ID: ' + nft.id;
                        details.appendChild(idDiv);

                        let priceDiv = document.createElement('div');
                        priceDiv.className = 'nft-price';
                        priceDiv.textContent = 'Price: ';
                        let priceInput = document.createElement('input');
                        priceInput.type = 'text';
                        priceInput.value = nft.priceInWei; // Assuming price is in the nft object
                        priceDiv.appendChild(priceInput);
                        details.appendChild(priceDiv);

                        let dutationDiv = document.createElement('div');
                        dutationDiv.className = 'nft-duration';
                        dutationDiv.textContent = 'duration: ';
                        let dutationInput = document.createElement("input")
                        dutationInput.type = 'text';
                        dutationInput.value = 20
                        dutationDiv.append(dutationInput)
                        details.appendChild(dutationDiv);

                        let auctionButton = document.createElement('button');
                        auctionButton.textContent = 'Auction';
                        auctionButton.addEventListener('click', function () {
                            // Auction
                            console.log(nft.index);
                            const auctionFactoryContract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);

                            const auctionData = {
                                nft: tokenAddress, // NFT address
                                nftId: nft.id,           // NFT ID
                                startingBid: web3.utils.toWei($('.nft-item').eq(nft.index).find('.nft-price input').val(), 'ether'), // 起始出价
                                auctionDuration: $('.nft-item').eq(nft.index).find('.nft-duration input').val(),  // 拍卖持续时间（例如，24小时）
                                authorizedAddress: current_address, // authorized Address
                                owner: current_address   // seller
                            }
                            auctionFactoryContract.methods.createAuction(auctionData).send({ from: current_address })
                                .on('transactionHash', (hash) => {
                                    console.log('transactionHash:', hash);
                                })
                                .on('receipt', (receipt) => {
                                    console.log('Receipt:', receipt);
                                    alert('Auction created successfully!');
                                    // Get the address of auction
                                    factory_Contract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
                                    factory_Contract.methods.getAllAuctions().call()
                                        .then((datas) => {
                                            create_auction = datas[-1]
                                            // Get the address of auction
                                            token_Contract = new web3.eth.Contract(tokenAbi, tokenAddress);
                                            token_Contract.methods.approve(current_address, nft.id).send({ from: current_address })
                                                .on('transactionHash', function (hash) {
                                                    console.log("Transaction hash: " + hash);
                                                })
                                                .on('confirmation', function (confirmationNumber, receipt) {
                                                    console.log("Confirmation number: " + confirmationNumber);
                                                })
                                                .on('receipt', function (receipt) {
                                                    console.log("approve success");
                                                    // approve
                                                    auction_Contract = new web3.eth.Contract(auctionAbi, create_auction)
                                                    auction_Contract.methods.start().send({ from: current_address })
                                                        .then(receipt => {
                                                            console.log("Auction started!", receipt);
                                                        })
                                                        .catch(error => {
                                                            console.error(error);
                                                        });
                                                })
                                                .on('error', console.error); // for error
                                        })
                                    // token_contract = new web3.eth.Contract(tokenAbi, tokenAddress);

                                })
                                .on('error', (error) => {
                                    console.error('Error:', error);
                                    alert('Failed to create auction, try again later');
                                });
                        });
                        details.appendChild(auctionButton);

                        div.appendChild(details);

                        container.appendChild(div);
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('MetaMask not detected');
    }
}

(() => {
    $('#content > div').hide(); 
    $('#mintNFT').show(); 

    $('.nav-link').click(function () {
        var target = $(this).data('target');
        $('#content > div').hide(); 
        $('#' + target).show(); 
        if (target == "myNFT") {
            fetchMyNFTs()
        }
        if (target == "myAuction") {
            getMyAuction()

        }
    });

    $('#connectWallet').click(async function () {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(handleAccountsChanged)
                .catch(function (err) {
                    alert('An error occurred while connecting to the wallet: ' + err.message);
                });
        } else {
            alert('MetaMask is not installed. Please install it to connect your wallet.');
        }
    });

    // Handle account changes
    function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            alert('No account connected');
        } else {
            $('#connectWallet').hide();
            $('#walletAddress').text(accounts[0]); 
        }
    }

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    $('#mintButton').click(async function () {
        var nftId = $('#nftId').val();
        if (nftId == "") {
            alert("Please enter NFT id")
            return
        }

        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
                const accounts = await web3.eth.getAccounts();
                const current_address = accounts[0]; 

                if (nftId) {
                    console.log('Minting NFT with ID:', nftId);
                    contract.methods.mint(current_address, nftId).send({ from: current_address })
                        .on('transactionHash', (hash) => {
                            console.log('transactionHash:', hash);
                            alert("Created Successfully!")
                        })
                } else {
                    alert('Please enter an NFT ID');
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('MetaMask not detected');
        }
    });

})()