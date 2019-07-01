import React, { Component } from 'react';
import Base from '../components/Base/Base';
import axios from 'axios';
import Aux from '../hoc/Auxiliary';

class Rates extends Component {
    state = {
        base: {
            id: 'USD',
            name: 'United States Dollar',
            value: 10000
        },
        currency: [
            {
                id: 'USD',
                name: 'United States Dollar',
                visible: true,
                value: null,
                rates: null
            },
            {
                id: 'CAD',
                name: 'Canada Dollar',
                visible: false,
                value: null,
                rates: null
            },
            {
                id: 'IDR',
                name: 'Indonesian Rupiah',
                visible: true,
                value: null,
                rates: null
            },
            {
                id: 'EUR',
                name: 'Euro',
                visible: true,
                value: null,
                rates: null
            },
            {
                id: 'GBP',
                name: 'British Pound',
                visible: true,
                value: null,
                rates: null
            },
            {
                id: 'CHF',
                name: 'Swiss Franc',
                visible: false,
                value: null,
                rates: null
            },
            {
                id: 'SGD',
                name: 'Singapore Dollar',
                visible: true,
                value: null,
                rates: null
            },
            {
                id: 'INR',
                name: 'Indian Rupee',
                visible: false,
                value: null,
                rates: null
            },
            {
                id: 'MYR',
                name: 'Malaysian Ringgit',
                visible: false,
                value: null,
                rates: null
            },
            {
                id: 'JPY',
                name: 'Japanese Yen',
                visible: false,
                value: null,
                rates: null
            },
            {
                id: 'KRW',
                name: 'Korean Won',
                visible: false,
                value: null,
                rates: null
            },
        ],
        rates: null
    }

    componentDidMount(){
        axios.get('https://api.exchangeratesapi.io/latest?base=USD')
            .then(response => {
                console.log(response);
                this.setState({rates: response.data.rates})
            })
            .catch();
        console.log(this.state);
    }

    buttonClickedHandler = () => {
        console.log(this.state);
    }

    render(){
        return(
            <Aux>
                <Base />
                <button onClick={this.buttonClickedHandler}>click</button>
            </Aux>
            
        );
    }
}

export default Rates;