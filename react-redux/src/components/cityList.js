import React from 'react';
import City from './city';

export default class CityList extends React.Component {
    render(){
        return (<div>
                    {this.props.cities.map((city, index)=><City key={index} city={city} removeCity={this.props.removeCity}/>)}
                </div>)
    }
}