

base_contract = """// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// importing all ERC and extension libraries here
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";



contract Token is {extensions} {
    constructor({constructor_args}) {constructor_extensions} {
    }

    {contract_body}

}
"""


features = ['burn', 'mint', 'pausable']  #, 'taxable']
from itertools import combinations

all_combinations = []
for i in range(1,len(features) + 1):
    all_combinations += list(combinations(features, i))


