import React from 'react';

export default class City extends React.Component {
    render(){
        return (<div>{this.props.city.city} --- {this.props.city.state} --- <button onClick={()=>{this.props.removeCity(this.props.city)}}>REMOVE</button></div>)
    }
}