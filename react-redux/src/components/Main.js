import React from 'react';
import Title from './title';
import CityList from './cityList';
import Cities from '../data';

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            cities: Cities
        }
    }
    removeCity(removedCity){
        console.log("11111111111111",removedCity);
    }
    render(){
        return (<div>
                    <Title title={'City'} />
                    <CityList cities={this.state.cities} removeCity={this.removeCity}/>
                </div>)
    }
}