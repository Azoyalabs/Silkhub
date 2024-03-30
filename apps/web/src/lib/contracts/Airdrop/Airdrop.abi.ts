export const ABI = {
    "_format": "hh-sol-artifact-1",
    "contractName": "Airdrop",
    "sourceName": "contracts/Airdrop.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_startTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "currentTime",
            "type": "uint256"
          }
        ],
        "name": "AirdropNotStarted",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "airdropToken",
        "outputs": [
          {
            "internalType": "contract ERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "amountWhitelisted",
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
            "internalType": "address[]",
            "name": "beneficiaries",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          }
        ],
        "name": "batchSetAllowance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "claim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "claimed",
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
        "name": "getAirdropStatus",
        "outputs": [
          {
            "internalType": "enum Airdrop.AirdropStatus",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "target",
            "type": "address"
          }
        ],
        "name": "getClaimableAmount",
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
            "name": "user",
            "type": "address"
          }
        ],
        "name": "getIsClaimableAndAmount",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          },
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
        "name": "getOverview",
        "outputs": [
          {
            "internalType": "enum Airdrop.AirdropStatus",
            "name": "",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
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
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "setAllowance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "startTime",
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
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b50604051620014a0380380620014a0833981810160405281019062000037919062000278565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a49190620002d0565b60405180910390fd5b620000be816200010f60201b60201c565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055505050620002ed565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200020582620001d8565b9050919050565b6200021781620001f8565b81146200022357600080fd5b50565b60008151905062000237816200020c565b92915050565b6000819050919050565b62000252816200023d565b81146200025e57600080fd5b50565b600081519050620002728162000247565b92915050565b60008060408385031215620002925762000291620001d3565b5b6000620002a28582860162000226565b9250506020620002b58582860162000261565b9150509250929050565b620002ca81620001f8565b82525050565b6000602082019050620002e76000830184620002bf565b92915050565b6111a380620002fd6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063d97f7bd111610066578063d97f7bd114610209578063e12f3a6114610225578063e834a83414610255578063f2fde38b14610273576100ea565b80638da5cb5b1461019c578063c2ff9e89146101ba578063c9dd3d6d146101eb576100ea565b80634e71d92d116100c85780634e71d92d1461014c578063715018a61461015657806378e979251461016057806383f090371461017e576100ea565b806320443e8d146100ef578063310ec4a7146101125780634d06068a1461012e575b600080fd5b6100f761028f565b60405161010996959493929190610b30565b60405180910390f35b61012c60048036038101906101279190610bf3565b61037c565b005b610136610467565b6040516101439190610c92565b60405180910390f35b61015461048d565b005b61015e610661565b005b610168610675565b6040516101759190610cad565b60405180910390f35b61018661067b565b6040516101939190610cad565b60405180910390f35b6101a4610681565b6040516101b19190610cc8565b60405180910390f35b6101d460048036038101906101cf9190610ce3565b6106aa565b6040516101e2929190610d2b565b60405180910390f35b6101f3610724565b6040516102009190610d54565b60405180910390f35b610223600480360381019061021e9190610e2a565b610741565b005b61023f600480360381019061023a9190610ce3565b610837565b60405161024c9190610cad565b60405180910390f35b61025d610880565b60405161026a9190610cad565b60405180910390f35b61028d60048036038101906102889190610ce3565b610886565b005b6000806000806000806102a0610724565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103219190610cc8565b602060405180830381865afa15801561033e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103629190610ec0565b600454600354955095509550955095509550909192939495565b61038461090c565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808211156103f95780826103dc9190610f1c565b600460008282546103ed9190610f50565b9250508190555061041e565b81816104059190610f1c565b600460008282546104169190610f1c565b925050819055505b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002544210156104d857600254426040517fde871b5e0000000000000000000000000000000000000000000000000000000081526004016104cf929190610f84565b60405180910390fd5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811161055f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105569061100a565b60405180910390fd5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600360008282546105b69190610f50565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161061a92919061102a565b6020604051808303816000875af1158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d919061107f565b5050565b61066961090c565b6106736000610993565b565b60025481565b60045481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806001808111156106c0576106bf610a5f565b5b6106c8610724565b60018111156106da576106d9610a5f565b5b14600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491509150915091565b6000600254421015610739576000905061073e565b600190505b90565b61074961090c565b818190508484905014610791576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107889061111e565b60405180910390fd5b60005b84849050811015610830578282828181106107b2576107b161113e565b5b90506020020135600560008787858181106107d0576107cf61113e565b5b90506020020160208101906107e59190610ce3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050610794565b5050505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60035481565b61088e61090c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109005760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108f79190610cc8565b60405180910390fd5b61090981610993565b50565b610914610a57565b73ffffffffffffffffffffffffffffffffffffffff16610932610681565b73ffffffffffffffffffffffffffffffffffffffff161461099157610955610a57565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109889190610cc8565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610a9f57610a9e610a5f565b5b50565b6000819050610ab082610a8e565b919050565b6000610ac082610aa2565b9050919050565b610ad081610ab5565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b0182610ad6565b9050919050565b610b1181610af6565b82525050565b6000819050919050565b610b2a81610b17565b82525050565b600060c082019050610b456000830189610ac7565b610b526020830188610b08565b610b5f6040830187610b21565b610b6c6060830186610b21565b610b796080830185610b21565b610b8660a0830184610b21565b979650505050505050565b600080fd5b600080fd5b610ba481610af6565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b610bd081610b17565b8114610bdb57600080fd5b50565b600081359050610bed81610bc7565b92915050565b60008060408385031215610c0a57610c09610b91565b5b6000610c1885828601610bb2565b9250506020610c2985828601610bde565b9150509250929050565b6000819050919050565b6000610c58610c53610c4e84610ad6565b610c33565b610ad6565b9050919050565b6000610c6a82610c3d565b9050919050565b6000610c7c82610c5f565b9050919050565b610c8c81610c71565b82525050565b6000602082019050610ca76000830184610c83565b92915050565b6000602082019050610cc26000830184610b21565b92915050565b6000602082019050610cdd6000830184610b08565b92915050565b600060208284031215610cf957610cf8610b91565b5b6000610d0784828501610bb2565b91505092915050565b60008115159050919050565b610d2581610d10565b82525050565b6000604082019050610d406000830185610d1c565b610d4d6020830184610b21565b9392505050565b6000602082019050610d696000830184610ac7565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610d9457610d93610d6f565b5b8235905067ffffffffffffffff811115610db157610db0610d74565b5b602083019150836020820283011115610dcd57610dcc610d79565b5b9250929050565b60008083601f840112610dea57610de9610d6f565b5b8235905067ffffffffffffffff811115610e0757610e06610d74565b5b602083019150836020820283011115610e2357610e22610d79565b5b9250929050565b60008060008060408587031215610e4457610e43610b91565b5b600085013567ffffffffffffffff811115610e6257610e61610b96565b5b610e6e87828801610d7e565b9450945050602085013567ffffffffffffffff811115610e9157610e90610b96565b5b610e9d87828801610dd4565b925092505092959194509250565b600081519050610eba81610bc7565b92915050565b600060208284031215610ed657610ed5610b91565b5b6000610ee484828501610eab565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f2782610b17565b9150610f3283610b17565b9250828203905081811115610f4a57610f49610eed565b5b92915050565b6000610f5b82610b17565b9150610f6683610b17565b9250828201905080821115610f7e57610f7d610eed565b5b92915050565b6000604082019050610f996000830185610b21565b610fa66020830184610b21565b9392505050565b600082825260208201905092915050565b7f4e6f7468696e6720746f20636c61696d00000000000000000000000000000000600082015250565b6000610ff4601083610fad565b9150610fff82610fbe565b602082019050919050565b6000602082019050818103600083015261102381610fe7565b9050919050565b600060408201905061103f6000830185610b08565b61104c6020830184610b21565b9392505050565b61105c81610d10565b811461106757600080fd5b50565b60008151905061107981611053565b92915050565b60006020828403121561109557611094610b91565b5b60006110a38482850161106a565b91505092915050565b7f4d69736d61746368206c656e6774682062656e6566696369617269657320616e60008201527f6420616d6f756e74730000000000000000000000000000000000000000000000602082015250565b6000611108602983610fad565b9150611113826110ac565b604082019050919050565b60006020820190508181036000830152611137816110fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fc3e890dbabbfa97073ef501b1aa27076b46920110a818494c699c6560cba53264736f6c63430008160033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063d97f7bd111610066578063d97f7bd114610209578063e12f3a6114610225578063e834a83414610255578063f2fde38b14610273576100ea565b80638da5cb5b1461019c578063c2ff9e89146101ba578063c9dd3d6d146101eb576100ea565b80634e71d92d116100c85780634e71d92d1461014c578063715018a61461015657806378e979251461016057806383f090371461017e576100ea565b806320443e8d146100ef578063310ec4a7146101125780634d06068a1461012e575b600080fd5b6100f761028f565b60405161010996959493929190610b30565b60405180910390f35b61012c60048036038101906101279190610bf3565b61037c565b005b610136610467565b6040516101439190610c92565b60405180910390f35b61015461048d565b005b61015e610661565b005b610168610675565b6040516101759190610cad565b60405180910390f35b61018661067b565b6040516101939190610cad565b60405180910390f35b6101a4610681565b6040516101b19190610cc8565b60405180910390f35b6101d460048036038101906101cf9190610ce3565b6106aa565b6040516101e2929190610d2b565b60405180910390f35b6101f3610724565b6040516102009190610d54565b60405180910390f35b610223600480360381019061021e9190610e2a565b610741565b005b61023f600480360381019061023a9190610ce3565b610837565b60405161024c9190610cad565b60405180910390f35b61025d610880565b60405161026a9190610cad565b60405180910390f35b61028d60048036038101906102889190610ce3565b610886565b005b6000806000806000806102a0610724565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103219190610cc8565b602060405180830381865afa15801561033e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103629190610ec0565b600454600354955095509550955095509550909192939495565b61038461090c565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808211156103f95780826103dc9190610f1c565b600460008282546103ed9190610f50565b9250508190555061041e565b81816104059190610f1c565b600460008282546104169190610f1c565b925050819055505b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002544210156104d857600254426040517fde871b5e0000000000000000000000000000000000000000000000000000000081526004016104cf929190610f84565b60405180910390fd5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811161055f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105569061100a565b60405180910390fd5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600360008282546105b69190610f50565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161061a92919061102a565b6020604051808303816000875af1158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d919061107f565b5050565b61066961090c565b6106736000610993565b565b60025481565b60045481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806001808111156106c0576106bf610a5f565b5b6106c8610724565b60018111156106da576106d9610a5f565b5b14600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491509150915091565b6000600254421015610739576000905061073e565b600190505b90565b61074961090c565b818190508484905014610791576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107889061111e565b60405180910390fd5b60005b84849050811015610830578282828181106107b2576107b161113e565b5b90506020020135600560008787858181106107d0576107cf61113e565b5b90506020020160208101906107e59190610ce3565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050610794565b5050505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60035481565b61088e61090c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109005760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016108f79190610cc8565b60405180910390fd5b61090981610993565b50565b610914610a57565b73ffffffffffffffffffffffffffffffffffffffff16610932610681565b73ffffffffffffffffffffffffffffffffffffffff161461099157610955610a57565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109889190610cc8565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610a9f57610a9e610a5f565b5b50565b6000819050610ab082610a8e565b919050565b6000610ac082610aa2565b9050919050565b610ad081610ab5565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b0182610ad6565b9050919050565b610b1181610af6565b82525050565b6000819050919050565b610b2a81610b17565b82525050565b600060c082019050610b456000830189610ac7565b610b526020830188610b08565b610b5f6040830187610b21565b610b6c6060830186610b21565b610b796080830185610b21565b610b8660a0830184610b21565b979650505050505050565b600080fd5b600080fd5b610ba481610af6565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b610bd081610b17565b8114610bdb57600080fd5b50565b600081359050610bed81610bc7565b92915050565b60008060408385031215610c0a57610c09610b91565b5b6000610c1885828601610bb2565b9250506020610c2985828601610bde565b9150509250929050565b6000819050919050565b6000610c58610c53610c4e84610ad6565b610c33565b610ad6565b9050919050565b6000610c6a82610c3d565b9050919050565b6000610c7c82610c5f565b9050919050565b610c8c81610c71565b82525050565b6000602082019050610ca76000830184610c83565b92915050565b6000602082019050610cc26000830184610b21565b92915050565b6000602082019050610cdd6000830184610b08565b92915050565b600060208284031215610cf957610cf8610b91565b5b6000610d0784828501610bb2565b91505092915050565b60008115159050919050565b610d2581610d10565b82525050565b6000604082019050610d406000830185610d1c565b610d4d6020830184610b21565b9392505050565b6000602082019050610d696000830184610ac7565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610d9457610d93610d6f565b5b8235905067ffffffffffffffff811115610db157610db0610d74565b5b602083019150836020820283011115610dcd57610dcc610d79565b5b9250929050565b60008083601f840112610dea57610de9610d6f565b5b8235905067ffffffffffffffff811115610e0757610e06610d74565b5b602083019150836020820283011115610e2357610e22610d79565b5b9250929050565b60008060008060408587031215610e4457610e43610b91565b5b600085013567ffffffffffffffff811115610e6257610e61610b96565b5b610e6e87828801610d7e565b9450945050602085013567ffffffffffffffff811115610e9157610e90610b96565b5b610e9d87828801610dd4565b925092505092959194509250565b600081519050610eba81610bc7565b92915050565b600060208284031215610ed657610ed5610b91565b5b6000610ee484828501610eab565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f2782610b17565b9150610f3283610b17565b9250828203905081811115610f4a57610f49610eed565b5b92915050565b6000610f5b82610b17565b9150610f6683610b17565b9250828201905080821115610f7e57610f7d610eed565b5b92915050565b6000604082019050610f996000830185610b21565b610fa66020830184610b21565b9392505050565b600082825260208201905092915050565b7f4e6f7468696e6720746f20636c61696d00000000000000000000000000000000600082015250565b6000610ff4601083610fad565b9150610fff82610fbe565b602082019050919050565b6000602082019050818103600083015261102381610fe7565b9050919050565b600060408201905061103f6000830185610b08565b61104c6020830184610b21565b9392505050565b61105c81610d10565b811461106757600080fd5b50565b60008151905061107981611053565b92915050565b60006020828403121561109557611094610b91565b5b60006110a38482850161106a565b91505092915050565b7f4d69736d61746368206c656e6774682062656e6566696369617269657320616e60008201527f6420616d6f756e74730000000000000000000000000000000000000000000000602082015250565b6000611108602983610fad565b9150611113826110ac565b604082019050919050565b60006020820190508181036000830152611137816110fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fc3e890dbabbfa97073ef501b1aa27076b46920110a818494c699c6560cba53264736f6c63430008160033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  } as const;