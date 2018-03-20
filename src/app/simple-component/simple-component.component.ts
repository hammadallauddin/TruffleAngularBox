import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../shared/web3.service';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponentComponent implements OnInit {
	ngOnInit(): void {
		throw new Error("Method not implemented.");
	}
	data: string;
	id: number
	gid: number;
	output: any;
	
	constructor(private web3Service: Web3Service) { }

	setDATA() {
		this.web3Service.SimpleContract.deployed().then((instance) => {
			const id = this.id;
			const name = this.data;
			const account = this.web3Service.web3.eth.accounts[0];
			instance.setData(id, name, {from: account, gas: 500000});
			return instance.getData(id);
		}).then((result) => {
			this.output = result;
		});
	}
	getDATA() {
		this.web3Service.SimpleContract.deployed().then((instance) => {
			const gid = this.gid;
			return  instance.getData(gid);
		}).then((result) => {
			this.output = result;
		});
	}

	idGet(e) {
		this.id = e.target.value;
	}
	dataGet(e) {
		this.data = e.target.value;
	}

	gidGet(e) {
		this.gid = e.target.value;
	}

}
