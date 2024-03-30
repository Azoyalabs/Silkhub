// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IcoController$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IcoController",
  "sourceName": "contracts/IcoController.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_icoToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenPriceInNative",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "CannotBuyZeroTokens",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentTime",
          "type": "uint256"
        }
      ],
      "name": "IcoClosed",
      "type": "error"
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
      "name": "IcoNotStarted",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "remaining",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "requested",
          "type": "uint256"
        }
      ],
      "name": "NotEnoughTokensRemainingToFillOrder",
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
      "inputs": [],
      "name": "WithdrawalOnlyAfterEndIco",
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
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "buy",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endTime",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "getClampedNumberTokensFromValue",
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
      "name": "getIcoStatus",
      "outputs": [
        {
          "internalType": "enum IcoStatus",
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
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "getNumberTokensFromValue",
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
      "name": "getOverview",
      "outputs": [
        {
          "internalType": "enum IcoStatus",
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
      "name": "getTokensRemaining",
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
      "name": "icoToken",
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
      "name": "oneTokenInWei",
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
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200146338038062001463833981810160405281019062000037919062000288565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a491906200030b565b60405180910390fd5b620000be816200011f60201b60201c565b5083600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260018190555081600381905550806004819055505050505062000328565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200021582620001e8565b9050919050565b620002278162000208565b81146200023357600080fd5b50565b60008151905062000247816200021c565b92915050565b6000819050919050565b62000262816200024d565b81146200026e57600080fd5b50565b600081519050620002828162000257565b92915050565b60008060008060808587031215620002a557620002a4620001e3565b5b6000620002b58782880162000236565b9450506020620002c88782880162000271565b9350506040620002db8782880162000271565b9250506060620002ee8782880162000271565b91505092959194509250565b620003058162000208565b82525050565b6000602082019050620003226000830184620002fa565b92915050565b61112b80620003386000396000f3fe6080604052600436106100e85760003560e01c806378e979251161008a578063a6f2ae3a11610059578063a6f2ae3a146102a1578063b264dcff146102ab578063dbc57971146102e8578063f2fde38b14610313576100e8565b806378e97925146101e357806384e3ac941461020e5780638da5cb5b146102395780639a297d7f14610264576100e8565b80633ccfd60b116100c65780633ccfd60b1461017357806344df8e701461018a57806346ad5859146101a1578063715018a6146101cc576100e8565b806320443e8d146100ed578063260c2cec1461011d5780633197cbb614610148575b600080fd5b3480156100f957600080fd5b5061010261033c565b60405161011496959493929190610ca5565b60405180910390f35b34801561012957600080fd5b50610132610429565b60405161013f9190610d65565b60405180910390f35b34801561015457600080fd5b5061015d61044f565b60405161016a9190610d80565b60405180910390f35b34801561017f57600080fd5b50610188610455565b005b34801561019657600080fd5b5061019f610511565b005b3480156101ad57600080fd5b506101b66106a8565b6040516101c39190610d80565b60405180910390f35b3480156101d857600080fd5b506101e161074b565b005b3480156101ef57600080fd5b506101f861075f565b6040516102059190610d80565b60405180910390f35b34801561021a57600080fd5b50610223610765565b6040516102309190610d80565b60405180910390f35b34801561024557600080fd5b5061024e61076b565b60405161025b9190610d9b565b60405180910390f35b34801561027057600080fd5b5061028b60048036038101906102869190610de7565b610794565b6040516102989190610d80565b60405180910390f35b6102a96107dd565b005b3480156102b757600080fd5b506102d260048036038101906102cd9190610de7565b6109b5565b6040516102df9190610d80565b60405180910390f35b3480156102f457600080fd5b506102fd6109cc565b60405161030a9190610e14565b60405180910390f35b34801561031f57600080fd5b5061033a60048036038101906103359190610e5b565b6109fb565b005b60008060008060008061034d6109cc565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354600454600154600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103d49190610d9b565b602060405180830381865afa1580156103f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104159190610e9d565b955095509550955095509550909192939495565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b61045d610a81565b6002808111156104705761046f610bd4565b5b6104786109cc565b600281111561048a57610489610bd4565b5b146104c1576040517f2bfd93d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c961076b565b73ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561050e573d6000803e3d6000fd5b50565b60028081111561052457610523610bd4565b5b61052c6109cc565b600281111561053e5761053d610bd4565b5b1461057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590610f4d565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c68600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106179190610d9b565b602060405180830381865afa158015610634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106589190610e9d565b6040518263ffffffff1660e01b81526004016106749190610d80565b600060405180830381600087803b15801561068e57600080fd5b505af11580156106a2573d6000803e3d6000fd5b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107059190610d9b565b602060405180830381865afa158015610722573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107469190610e9d565b905090565b610753610a81565b61075d6000610b08565b565b60035481565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600154600254846107a89190610f9c565b6107b2919061100d565b905060006107be6106a8565b9050808211156107d25780925050506107d8565b81925050505b919050565b60035442101561082857600354426040517f51b4d12000000000000000000000000000000000000000000000000000000000815260040161081f92919061103e565b60405180910390fd5b600454421061087257600454426040517f9673592100000000000000000000000000000000000000000000000000000000815260040161086992919061103e565b60405180910390fd5b600061087d346109b5565b9050600081036108b9576040517fd9f144e900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108c36106a8565b905081811061097257600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610929929190611067565b6020604051808303816000875af1158015610948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096c91906110c8565b506109b1565b80826040517f6ef64a350000000000000000000000000000000000000000000000000000000081526004016109a892919061103e565b60405180910390fd5b5050565b6000600154826109c5919061100d565b9050919050565b60006003544210156109e157600090506109f8565b60045442106109f357600290506109f8565b600190505b90565b610a03610a81565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a755760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a6c9190610d9b565b60405180910390fd5b610a7e81610b08565b50565b610a89610bcc565b73ffffffffffffffffffffffffffffffffffffffff16610aa761076b565b73ffffffffffffffffffffffffffffffffffffffff1614610b0657610aca610bcc565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610afd9190610d9b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610c1457610c13610bd4565b5b50565b6000819050610c2582610c03565b919050565b6000610c3582610c17565b9050919050565b610c4581610c2a565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c7682610c4b565b9050919050565b610c8681610c6b565b82525050565b6000819050919050565b610c9f81610c8c565b82525050565b600060c082019050610cba6000830189610c3c565b610cc76020830188610c7d565b610cd46040830187610c96565b610ce16060830186610c96565b610cee6080830185610c96565b610cfb60a0830184610c96565b979650505050505050565b6000819050919050565b6000610d2b610d26610d2184610c4b565b610d06565b610c4b565b9050919050565b6000610d3d82610d10565b9050919050565b6000610d4f82610d32565b9050919050565b610d5f81610d44565b82525050565b6000602082019050610d7a6000830184610d56565b92915050565b6000602082019050610d956000830184610c96565b92915050565b6000602082019050610db06000830184610c7d565b92915050565b600080fd5b610dc481610c8c565b8114610dcf57600080fd5b50565b600081359050610de181610dbb565b92915050565b600060208284031215610dfd57610dfc610db6565b5b6000610e0b84828501610dd2565b91505092915050565b6000602082019050610e296000830184610c3c565b92915050565b610e3881610c6b565b8114610e4357600080fd5b50565b600081359050610e5581610e2f565b92915050565b600060208284031215610e7157610e70610db6565b5b6000610e7f84828501610e46565b91505092915050565b600081519050610e9781610dbb565b92915050565b600060208284031215610eb357610eb2610db6565b5b6000610ec184828501610e88565b91505092915050565b600082825260208201905092915050565b7f43616e206f6e6c79206275726e206f6e63652049636f2069732066696e69736860008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b6000610f37602283610eca565b9150610f4282610edb565b604082019050919050565b60006020820190508181036000830152610f6681610f2a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fa782610c8c565b9150610fb283610c8c565b9250828202610fc081610c8c565b91508282048414831517610fd757610fd6610f6d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061101882610c8c565b915061102383610c8c565b92508261103357611032610fde565b5b828204905092915050565b60006040820190506110536000830185610c96565b6110606020830184610c96565b9392505050565b600060408201905061107c6000830185610c7d565b6110896020830184610c96565b9392505050565b60008115159050919050565b6110a581611090565b81146110b057600080fd5b50565b6000815190506110c28161109c565b92915050565b6000602082840312156110de576110dd610db6565b5b60006110ec848285016110b3565b9150509291505056fea2646970667358221220264cd7ce4110d57203923f2b36768c01c608347a01c7598b9c26594e12f007a164736f6c63430008160033",
  "deployedBytecode": "0x6080604052600436106100e85760003560e01c806378e979251161008a578063a6f2ae3a11610059578063a6f2ae3a146102a1578063b264dcff146102ab578063dbc57971146102e8578063f2fde38b14610313576100e8565b806378e97925146101e357806384e3ac941461020e5780638da5cb5b146102395780639a297d7f14610264576100e8565b80633ccfd60b116100c65780633ccfd60b1461017357806344df8e701461018a57806346ad5859146101a1578063715018a6146101cc576100e8565b806320443e8d146100ed578063260c2cec1461011d5780633197cbb614610148575b600080fd5b3480156100f957600080fd5b5061010261033c565b60405161011496959493929190610ca5565b60405180910390f35b34801561012957600080fd5b50610132610429565b60405161013f9190610d65565b60405180910390f35b34801561015457600080fd5b5061015d61044f565b60405161016a9190610d80565b60405180910390f35b34801561017f57600080fd5b50610188610455565b005b34801561019657600080fd5b5061019f610511565b005b3480156101ad57600080fd5b506101b66106a8565b6040516101c39190610d80565b60405180910390f35b3480156101d857600080fd5b506101e161074b565b005b3480156101ef57600080fd5b506101f861075f565b6040516102059190610d80565b60405180910390f35b34801561021a57600080fd5b50610223610765565b6040516102309190610d80565b60405180910390f35b34801561024557600080fd5b5061024e61076b565b60405161025b9190610d9b565b60405180910390f35b34801561027057600080fd5b5061028b60048036038101906102869190610de7565b610794565b6040516102989190610d80565b60405180910390f35b6102a96107dd565b005b3480156102b757600080fd5b506102d260048036038101906102cd9190610de7565b6109b5565b6040516102df9190610d80565b60405180910390f35b3480156102f457600080fd5b506102fd6109cc565b60405161030a9190610e14565b60405180910390f35b34801561031f57600080fd5b5061033a60048036038101906103359190610e5b565b6109fb565b005b60008060008060008061034d6109cc565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354600454600154600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103d49190610d9b565b602060405180830381865afa1580156103f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104159190610e9d565b955095509550955095509550909192939495565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b61045d610a81565b6002808111156104705761046f610bd4565b5b6104786109cc565b600281111561048a57610489610bd4565b5b146104c1576040517f2bfd93d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c961076b565b73ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561050e573d6000803e3d6000fd5b50565b60028081111561052457610523610bd4565b5b61052c6109cc565b600281111561053e5761053d610bd4565b5b1461057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590610f4d565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c68600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016106179190610d9b565b602060405180830381865afa158015610634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106589190610e9d565b6040518263ffffffff1660e01b81526004016106749190610d80565b600060405180830381600087803b15801561068e57600080fd5b505af11580156106a2573d6000803e3d6000fd5b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107059190610d9b565b602060405180830381865afa158015610722573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107469190610e9d565b905090565b610753610a81565b61075d6000610b08565b565b60035481565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600154600254846107a89190610f9c565b6107b2919061100d565b905060006107be6106a8565b9050808211156107d25780925050506107d8565b81925050505b919050565b60035442101561082857600354426040517f51b4d12000000000000000000000000000000000000000000000000000000000815260040161081f92919061103e565b60405180910390fd5b600454421061087257600454426040517f9673592100000000000000000000000000000000000000000000000000000000815260040161086992919061103e565b60405180910390fd5b600061087d346109b5565b9050600081036108b9576040517fd9f144e900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108c36106a8565b905081811061097257600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610929929190611067565b6020604051808303816000875af1158015610948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096c91906110c8565b506109b1565b80826040517f6ef64a350000000000000000000000000000000000000000000000000000000081526004016109a892919061103e565b60405180910390fd5b5050565b6000600154826109c5919061100d565b9050919050565b60006003544210156109e157600090506109f8565b60045442106109f357600290506109f8565b600190505b90565b610a03610a81565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a755760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a6c9190610d9b565b60405180910390fd5b610a7e81610b08565b50565b610a89610bcc565b73ffffffffffffffffffffffffffffffffffffffff16610aa761076b565b73ffffffffffffffffffffffffffffffffffffffff1614610b0657610aca610bcc565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610afd9190610d9b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610c1457610c13610bd4565b5b50565b6000819050610c2582610c03565b919050565b6000610c3582610c17565b9050919050565b610c4581610c2a565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c7682610c4b565b9050919050565b610c8681610c6b565b82525050565b6000819050919050565b610c9f81610c8c565b82525050565b600060c082019050610cba6000830189610c3c565b610cc76020830188610c7d565b610cd46040830187610c96565b610ce16060830186610c96565b610cee6080830185610c96565b610cfb60a0830184610c96565b979650505050505050565b6000819050919050565b6000610d2b610d26610d2184610c4b565b610d06565b610c4b565b9050919050565b6000610d3d82610d10565b9050919050565b6000610d4f82610d32565b9050919050565b610d5f81610d44565b82525050565b6000602082019050610d7a6000830184610d56565b92915050565b6000602082019050610d956000830184610c96565b92915050565b6000602082019050610db06000830184610c7d565b92915050565b600080fd5b610dc481610c8c565b8114610dcf57600080fd5b50565b600081359050610de181610dbb565b92915050565b600060208284031215610dfd57610dfc610db6565b5b6000610e0b84828501610dd2565b91505092915050565b6000602082019050610e296000830184610c3c565b92915050565b610e3881610c6b565b8114610e4357600080fd5b50565b600081359050610e5581610e2f565b92915050565b600060208284031215610e7157610e70610db6565b5b6000610e7f84828501610e46565b91505092915050565b600081519050610e9781610dbb565b92915050565b600060208284031215610eb357610eb2610db6565b5b6000610ec184828501610e88565b91505092915050565b600082825260208201905092915050565b7f43616e206f6e6c79206275726e206f6e63652049636f2069732066696e69736860008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b6000610f37602283610eca565b9150610f4282610edb565b604082019050919050565b60006020820190508181036000830152610f6681610f2a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fa782610c8c565b9150610fb283610c8c565b9250828202610fc081610c8c565b91508282048414831517610fd757610fd6610f6d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061101882610c8c565b915061102383610c8c565b92508261103357611032610fde565b5b828204905092915050565b60006040820190506110536000830185610c96565b6110606020830184610c96565b9392505050565b600060408201905061107c6000830185610c7d565b6110896020830184610c96565b9392505050565b60008115159050919050565b6110a581611090565b81146110b057600080fd5b50565b6000815190506110c28161109c565b92915050565b6000602082840312156110de576110dd610db6565b5b60006110ec848285016110b3565b9150509291505056fea2646970667358221220264cd7ce4110d57203923f2b36768c01c608347a01c7598b9c26594e12f007a164736f6c63430008160033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "IcoController",
    constructorArgs: [_icoToken: AbiParameterToPrimitiveType<{"name":"_icoToken","type":"address"}>, _tokenPriceInNative: AbiParameterToPrimitiveType<{"name":"_tokenPriceInNative","type":"uint256"}>, _startTime: AbiParameterToPrimitiveType<{"name":"_startTime","type":"uint256"}>, _endTime: AbiParameterToPrimitiveType<{"name":"_endTime","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IcoController$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/IcoController.sol:IcoController",
    constructorArgs: [_icoToken: AbiParameterToPrimitiveType<{"name":"_icoToken","type":"address"}>, _tokenPriceInNative: AbiParameterToPrimitiveType<{"name":"_tokenPriceInNative","type":"uint256"}>, _startTime: AbiParameterToPrimitiveType<{"name":"_startTime","type":"uint256"}>, _endTime: AbiParameterToPrimitiveType<{"name":"_endTime","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IcoController$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IcoController",
    constructorArgs: [_icoToken: AbiParameterToPrimitiveType<{"name":"_icoToken","type":"address"}>, _tokenPriceInNative: AbiParameterToPrimitiveType<{"name":"_tokenPriceInNative","type":"uint256"}>, _startTime: AbiParameterToPrimitiveType<{"name":"_startTime","type":"uint256"}>, _endTime: AbiParameterToPrimitiveType<{"name":"_endTime","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IcoController$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/IcoController.sol:IcoController",
    constructorArgs: [_icoToken: AbiParameterToPrimitiveType<{"name":"_icoToken","type":"address"}>, _tokenPriceInNative: AbiParameterToPrimitiveType<{"name":"_tokenPriceInNative","type":"uint256"}>, _startTime: AbiParameterToPrimitiveType<{"name":"_startTime","type":"uint256"}>, _endTime: AbiParameterToPrimitiveType<{"name":"_endTime","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IcoController$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IcoController",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IcoController$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/IcoController.sol:IcoController",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IcoController$Type["abi"]>>;
}