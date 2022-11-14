// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract RealEstate is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private _tokendIds;

    constructor() ERC721("Real EState", "RLESTATE"){};
    
    function mint(string memory tokenURI) public returns (uint256){
        _tokendIds.increment();
        uint256 newItemId = _tokendIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function totlaSupply() public view returns(uint256){
        return _tokendIds.current();
    }
}