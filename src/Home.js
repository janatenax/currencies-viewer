import React, { Component } from "react";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			rates: []
		};
	}

	componentDidMount() {
		fetch('https://api.fixer.io/latest')
		.then(response => response.json())
		.then(data => this.setState({ rates: data.rates }));
	}

	render() {
		const { rates } = this.state;
		const listCurrencies = Object.keys(rates).map((cur) => <li>{cur}</li>);
		const listRates = Object.values(rates).map((rate) => <li>{rate}</li>);

		return (
			<div>
				<h2>Home</h2>
				<p>Today's rates relative to Euro</p>
				<table className="main-table">
					<tr><td><ul className="table-data">{listCurrencies}</ul></td><td><ul className="table-data">{listRates}</ul></td></tr>
				</table>
			</div>
		);
	}
}

export default Home;