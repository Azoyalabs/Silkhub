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
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620016d1380380620016d183398181016040528101906200003791906200030e565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000391565b60405180910390fd5b620000be81620001a560201b60201c565b5083600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826001819055508373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000153573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001799190620003ec565b600a620001879190620005a1565b600281905550816003819055508060048190555050505050620005f2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200029b826200026e565b9050919050565b620002ad816200028e565b8114620002b957600080fd5b50565b600081519050620002cd81620002a2565b92915050565b6000819050919050565b620002e881620002d3565b8114620002f457600080fd5b50565b6000815190506200030881620002dd565b92915050565b600080600080608085870312156200032b576200032a62000269565b5b60006200033b87828801620002bc565b94505060206200034e87828801620002f7565b93505060406200036187828801620002f7565b92505060606200037487828801620002f7565b91505092959194509250565b6200038b816200028e565b82525050565b6000602082019050620003a8600083018462000380565b92915050565b600060ff82169050919050565b620003c681620003ae565b8114620003d257600080fd5b50565b600081519050620003e681620003bb565b92915050565b60006020828403121562000405576200040462000269565b5b60006200041584828501620003d5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620004ac578086048111156200048457620004836200041e565b5b6001851615620004945780820291505b8081029050620004a4856200044d565b945062000464565b94509492505050565b600082620004c757600190506200059a565b81620004d757600090506200059a565b8160018114620004f05760028114620004fb5762000531565b60019150506200059a565b60ff84111562000510576200050f6200041e565b5b8360020a9150848211156200052a57620005296200041e565b5b506200059a565b5060208310610133831016604e8410600b84101617156200056b5782820a9050838111156200056557620005646200041e565b5b6200059a565b6200057a84848460016200045a565b925090508184048111156200059457620005936200041e565b5b81810290505b9392505050565b6000620005ae82620002d3565b9150620005bb83620003ae565b9250620005ea7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620004b5565b905092915050565b6110cf80620006026000396000f3fe6080604052600436106100dd5760003560e01c806384e3ac941161007f578063a6f2ae3a11610059578063a6f2ae3a1461027f578063b264dcff14610289578063dbc57971146102c6578063f2fde38b146102f1576100dd565b806384e3ac94146101ec5780638da5cb5b146102175780639a297d7f14610242576100dd565b806344df8e70116100bb57806344df8e701461016857806346ad58591461017f578063715018a6146101aa57806378e97925146101c1576100dd565b806320443e8d146100e2578063260c2cec146101125780633197cbb61461013d575b600080fd5b3480156100ee57600080fd5b506100f761031a565b60405161010996959493929190610bb7565b60405180910390f35b34801561011e57600080fd5b50610127610407565b6040516101349190610c77565b60405180910390f35b34801561014957600080fd5b5061015261042d565b60405161015f9190610c92565b60405180910390f35b34801561017457600080fd5b5061017d610433565b005b34801561018b57600080fd5b506101946105df565b6040516101a19190610c92565b60405180910390f35b3480156101b657600080fd5b506101bf610682565b005b3480156101cd57600080fd5b506101d6610696565b6040516101e39190610c92565b60405180910390f35b3480156101f857600080fd5b5061020161069c565b60405161020e9190610c92565b60405180910390f35b34801561022357600080fd5b5061022c6106a2565b6040516102399190610cad565b60405180910390f35b34801561024e57600080fd5b5061026960048036038101906102649190610cf9565b6106cb565b6040516102769190610c92565b60405180910390f35b610287610714565b005b34801561029557600080fd5b506102b060048036038101906102ab9190610cf9565b6108ba565b6040516102bd9190610c92565b60405180910390f35b3480156102d257600080fd5b506102db6108de565b6040516102e89190610d26565b60405180910390f35b3480156102fd57600080fd5b5061031860048036038101906103139190610d6d565b61090d565b005b60008060008060008061032b6108de565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354600454600154600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103b29190610cad565b602060405180830381865afa1580156103cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f39190610daf565b955095509550955095509550909192939495565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60028081111561044657610445610ae6565b5b61044e6108de565b60028111156104605761045f610ae6565b5b146104a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049790610e5f565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161053b9190610cad565b602060405180830381865afa158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c9190610daf565b6040518363ffffffff1660e01b8152600401610599929190610e7f565b6020604051808303816000875af11580156105b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dc9190610ee0565b50565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161063c9190610cad565b602060405180830381865afa158015610659573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067d9190610daf565b905090565b61068a610993565b6106946000610a1a565b565b60035481565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600154600254846106df9190610f3c565b6106e99190610fad565b905060006106f56105df565b90508082111561070957809250505061070f565b81925050505b919050565b600354421061075e57600354426040517f51b4d120000000000000000000000000000000000000000000000000000000008152600401610755929190610fde565b60405180910390fd5b6004544210156107a957600454426040517f967359210000000000000000000000000000000000000000000000000000000081526004016107a0929190610fde565b60405180910390fd5b6000600154600254346107bc9190610f3c565b6107c69190610fad565b9050806107d16105df565b1061087c57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610833929190610e7f565b6020604051808303816000875af1158015610852573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108769190610ee0565b506108b7565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ae90611079565b60405180910390fd5b50565b6000600154600254836108cd9190610f3c565b6108d79190610fad565b9050919050565b60006003544210156108f3576000905061090a565b6004544210610905576002905061090a565b600190505b90565b610915610993565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109875760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161097e9190610cad565b60405180910390fd5b61099081610a1a565b50565b61099b610ade565b73ffffffffffffffffffffffffffffffffffffffff166109b96106a2565b73ffffffffffffffffffffffffffffffffffffffff1614610a18576109dc610ade565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610a0f9190610cad565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610b2657610b25610ae6565b5b50565b6000819050610b3782610b15565b919050565b6000610b4782610b29565b9050919050565b610b5781610b3c565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b8882610b5d565b9050919050565b610b9881610b7d565b82525050565b6000819050919050565b610bb181610b9e565b82525050565b600060c082019050610bcc6000830189610b4e565b610bd96020830188610b8f565b610be66040830187610ba8565b610bf36060830186610ba8565b610c006080830185610ba8565b610c0d60a0830184610ba8565b979650505050505050565b6000819050919050565b6000610c3d610c38610c3384610b5d565b610c18565b610b5d565b9050919050565b6000610c4f82610c22565b9050919050565b6000610c6182610c44565b9050919050565b610c7181610c56565b82525050565b6000602082019050610c8c6000830184610c68565b92915050565b6000602082019050610ca76000830184610ba8565b92915050565b6000602082019050610cc26000830184610b8f565b92915050565b600080fd5b610cd681610b9e565b8114610ce157600080fd5b50565b600081359050610cf381610ccd565b92915050565b600060208284031215610d0f57610d0e610cc8565b5b6000610d1d84828501610ce4565b91505092915050565b6000602082019050610d3b6000830184610b4e565b92915050565b610d4a81610b7d565b8114610d5557600080fd5b50565b600081359050610d6781610d41565b92915050565b600060208284031215610d8357610d82610cc8565b5b6000610d9184828501610d58565b91505092915050565b600081519050610da981610ccd565b92915050565b600060208284031215610dc557610dc4610cc8565b5b6000610dd384828501610d9a565b91505092915050565b600082825260208201905092915050565b7f43616e206f6e6c79206275726e206f6e63652049636f2069732066696e69736860008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b6000610e49602283610ddc565b9150610e5482610ded565b604082019050919050565b60006020820190508181036000830152610e7881610e3c565b9050919050565b6000604082019050610e946000830185610b8f565b610ea16020830184610ba8565b9392505050565b60008115159050919050565b610ebd81610ea8565b8114610ec857600080fd5b50565b600081519050610eda81610eb4565b92915050565b600060208284031215610ef657610ef5610cc8565b5b6000610f0484828501610ecb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f4782610b9e565b9150610f5283610b9e565b9250828202610f6081610b9e565b91508282048414831517610f7757610f76610f0d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610fb882610b9e565b9150610fc383610b9e565b925082610fd357610fd2610f7e565b5b828204905092915050565b6000604082019050610ff36000830185610ba8565b6110006020830184610ba8565b9392505050565b7f4e6f7420656e6f75676820746f6b656e732072656d61696e696e6720746f206660008201527f696c6c206f726465720000000000000000000000000000000000000000000000602082015250565b6000611063602983610ddc565b915061106e82611007565b604082019050919050565b6000602082019050818103600083015261109281611056565b905091905056fea26469706673582212200d7cdafaf491b712eee9db6851fa045597255c314e6704e52c07dccc1a7ba7e364736f6c63430008160033",
  "deployedBytecode": "0x6080604052600436106100dd5760003560e01c806384e3ac941161007f578063a6f2ae3a11610059578063a6f2ae3a1461027f578063b264dcff14610289578063dbc57971146102c6578063f2fde38b146102f1576100dd565b806384e3ac94146101ec5780638da5cb5b146102175780639a297d7f14610242576100dd565b806344df8e70116100bb57806344df8e701461016857806346ad58591461017f578063715018a6146101aa57806378e97925146101c1576100dd565b806320443e8d146100e2578063260c2cec146101125780633197cbb61461013d575b600080fd5b3480156100ee57600080fd5b506100f761031a565b60405161010996959493929190610bb7565b60405180910390f35b34801561011e57600080fd5b50610127610407565b6040516101349190610c77565b60405180910390f35b34801561014957600080fd5b5061015261042d565b60405161015f9190610c92565b60405180910390f35b34801561017457600080fd5b5061017d610433565b005b34801561018b57600080fd5b506101946105df565b6040516101a19190610c92565b60405180910390f35b3480156101b657600080fd5b506101bf610682565b005b3480156101cd57600080fd5b506101d6610696565b6040516101e39190610c92565b60405180910390f35b3480156101f857600080fd5b5061020161069c565b60405161020e9190610c92565b60405180910390f35b34801561022357600080fd5b5061022c6106a2565b6040516102399190610cad565b60405180910390f35b34801561024e57600080fd5b5061026960048036038101906102649190610cf9565b6106cb565b6040516102769190610c92565b60405180910390f35b610287610714565b005b34801561029557600080fd5b506102b060048036038101906102ab9190610cf9565b6108ba565b6040516102bd9190610c92565b60405180910390f35b3480156102d257600080fd5b506102db6108de565b6040516102e89190610d26565b60405180910390f35b3480156102fd57600080fd5b5061031860048036038101906103139190610d6d565b61090d565b005b60008060008060008061032b6108de565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354600454600154600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103b29190610cad565b602060405180830381865afa1580156103cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f39190610daf565b955095509550955095509550909192939495565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60028081111561044657610445610ae6565b5b61044e6108de565b60028111156104605761045f610ae6565b5b146104a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049790610e5f565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161053b9190610cad565b602060405180830381865afa158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c9190610daf565b6040518363ffffffff1660e01b8152600401610599929190610e7f565b6020604051808303816000875af11580156105b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dc9190610ee0565b50565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161063c9190610cad565b602060405180830381865afa158015610659573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067d9190610daf565b905090565b61068a610993565b6106946000610a1a565b565b60035481565b60025481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600154600254846106df9190610f3c565b6106e99190610fad565b905060006106f56105df565b90508082111561070957809250505061070f565b81925050505b919050565b600354421061075e57600354426040517f51b4d120000000000000000000000000000000000000000000000000000000008152600401610755929190610fde565b60405180910390fd5b6004544210156107a957600454426040517f967359210000000000000000000000000000000000000000000000000000000081526004016107a0929190610fde565b60405180910390fd5b6000600154600254346107bc9190610f3c565b6107c69190610fad565b9050806107d16105df565b1061087c57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610833929190610e7f565b6020604051808303816000875af1158015610852573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108769190610ee0565b506108b7565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ae90611079565b60405180910390fd5b50565b6000600154600254836108cd9190610f3c565b6108d79190610fad565b9050919050565b60006003544210156108f3576000905061090a565b6004544210610905576002905061090a565b600190505b90565b610915610993565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109875760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161097e9190610cad565b60405180910390fd5b61099081610a1a565b50565b61099b610ade565b73ffffffffffffffffffffffffffffffffffffffff166109b96106a2565b73ffffffffffffffffffffffffffffffffffffffff1614610a18576109dc610ade565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610a0f9190610cad565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610b2657610b25610ae6565b5b50565b6000819050610b3782610b15565b919050565b6000610b4782610b29565b9050919050565b610b5781610b3c565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b8882610b5d565b9050919050565b610b9881610b7d565b82525050565b6000819050919050565b610bb181610b9e565b82525050565b600060c082019050610bcc6000830189610b4e565b610bd96020830188610b8f565b610be66040830187610ba8565b610bf36060830186610ba8565b610c006080830185610ba8565b610c0d60a0830184610ba8565b979650505050505050565b6000819050919050565b6000610c3d610c38610c3384610b5d565b610c18565b610b5d565b9050919050565b6000610c4f82610c22565b9050919050565b6000610c6182610c44565b9050919050565b610c7181610c56565b82525050565b6000602082019050610c8c6000830184610c68565b92915050565b6000602082019050610ca76000830184610ba8565b92915050565b6000602082019050610cc26000830184610b8f565b92915050565b600080fd5b610cd681610b9e565b8114610ce157600080fd5b50565b600081359050610cf381610ccd565b92915050565b600060208284031215610d0f57610d0e610cc8565b5b6000610d1d84828501610ce4565b91505092915050565b6000602082019050610d3b6000830184610b4e565b92915050565b610d4a81610b7d565b8114610d5557600080fd5b50565b600081359050610d6781610d41565b92915050565b600060208284031215610d8357610d82610cc8565b5b6000610d9184828501610d58565b91505092915050565b600081519050610da981610ccd565b92915050565b600060208284031215610dc557610dc4610cc8565b5b6000610dd384828501610d9a565b91505092915050565b600082825260208201905092915050565b7f43616e206f6e6c79206275726e206f6e63652049636f2069732066696e69736860008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b6000610e49602283610ddc565b9150610e5482610ded565b604082019050919050565b60006020820190508181036000830152610e7881610e3c565b9050919050565b6000604082019050610e946000830185610b8f565b610ea16020830184610ba8565b9392505050565b60008115159050919050565b610ebd81610ea8565b8114610ec857600080fd5b50565b600081519050610eda81610eb4565b92915050565b600060208284031215610ef657610ef5610cc8565b5b6000610f0484828501610ecb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f4782610b9e565b9150610f5283610b9e565b9250828202610f6081610b9e565b91508282048414831517610f7757610f76610f0d565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610fb882610b9e565b9150610fc383610b9e565b925082610fd357610fd2610f7e565b5b828204905092915050565b6000604082019050610ff36000830185610ba8565b6110006020830184610ba8565b9392505050565b7f4e6f7420656e6f75676820746f6b656e732072656d61696e696e6720746f206660008201527f696c6c206f726465720000000000000000000000000000000000000000000000602082015250565b6000611063602983610ddc565b915061106e82611007565b604082019050919050565b6000602082019050818103600083015261109281611056565b905091905056fea26469706673582212200d7cdafaf491b712eee9db6851fa045597255c314e6704e52c07dccc1a7ba7e364736f6c63430008160033",
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
