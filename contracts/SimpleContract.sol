pragma solidity ^0.4.0;

contract SimpleContract {

	string data;
    mapping(uint => string) dataMap;

    uint[] public idList;

    function setData(uint _id, string _data) public {
        dataMap[_id] = _data;
        idList.push(_id)-1;
    }

    function getData(uint _id) public constant returns (string) {
        return (dataMap[_id]);
    }
}
