import React from 'react';

class Output extends React.Component{
	render(){
		// console.log(this.props.data);
		const {value,from,to,amount} = this.props.data;

		return(
				<div>
					<h5 className="meta">{amount} {from} equals</h5> 
					<h2>{value} {to}</h2>
				</div>
			);
		
	}
}

export default Output;