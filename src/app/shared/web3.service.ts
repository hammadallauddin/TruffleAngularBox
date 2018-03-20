import {Injectable} from '@angular/core';
import Web3 from 'web3';
import {default as contract} from 'truffle-contract';
import {Subject} from 'rxjs/Rx';
import simple_contract_artifact from '../../../build/contracts/SimpleContract.json';


@Injectable()
export class Web3Service {
	web3: Web3;
	SimpleContract: any;
	constructor() {
		if (typeof this.web3 !== 'undefined') {
			this.web3 = new Web3(this.web3.currentProvider);
		} else {
			this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
		}
		// tslint:disable-next-line:indent
		this.SimpleContract = contract(simple_contract_artifact);
		this.SimpleContract.setProvider(this.web3.currentProvider);
	}
}
