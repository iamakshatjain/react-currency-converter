import React from 'react';
import axios from 'axios';

import Input from './Input';
import Output from './Output';

class App extends React.Component{

	state = {
				amount : 0,
				value : 0,
				from : '',
				to : '' 
			};

	onFormSubmit = async (data) => {
		// console.log(data);

		var query = `${data.curr1}_${data.curr2}`;
		const response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=f806147ff199719caa7e`);
		this.setState({amount:data.amount, from:data.curr1, to:data.curr2, value : Math.round(response.data[query]*data.amount*100)/100});
	}

	render(){
		return (
			<div className ="ui container">
				<div className="ui segment" style={{margin:'10px', marginTop:'25vh', width:'70vw'}}>
					<Output data={this.state}/>
				</div>
				<div className="ui segment" style={{margin:'10px', width:'70vw'}}>
					<Input onFormSubmit={this.onFormSubmit}/>
				</div>
			</div>
			);
	}
}	

export default App;