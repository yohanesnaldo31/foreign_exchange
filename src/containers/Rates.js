import React, { Component } from 'react';
import Base from '../components/Base/Base';
import axios from 'axios';
import Aux from '../hoc/Auxiliary';
import Spinner from '../components/UI/Spinner/Spinner';
import Currencies from '../components/Currencies/Currencies';

class Rates extends Component {
    state = {
        base: {
            id: 'USD',
            name: 'United States Dollar',
            value: 10
        },
        currency: {
            USD: {
                name: 'United States Dollar',
                visible: true,
                rates: null
            },
            CAD: {
                name: 'Canada Dollar',
                visible: false,
                rates: null
            },
            IDR: {
                name: 'Indonesian Rupiah',
                visible: true,
                rates: null
            },
            EUR: {
                name: 'Euro',
                visible: true,
                rates: null
            },
            GBP: {
                name: 'British Pound',
                visible: true,
                rates: null
            },
            CHF: {
                name: 'Swiss Franc',
                visible: false,
                rates: null
            },
            SGD: {
                name: 'Singapore Dollar',
                visible: true,
                rates: null
            },
            INR: {
                name: 'Indian Rupee',
                visible: false,
                rates: null
            },
            MYR: {
                name: 'Malaysian Ringgit',
                visible: false,
                rates: null
            },
            JPY: {
                name: 'Japanese Yen',
                visible: false,
                rates: null
            },
            KRW: {
                name: 'Korean Won',
                visible: false,
                rates: null
            }
        },
        hasLoaded: false
    }

    componentDidMount(){
        axios.get('https://api.exchangeratesapi.io/latest?base='+this.state.base.id)
            .then(response => {
                const updatedCurrency = {
                    ...this.state.currency
                }
                for(let idKey in updatedCurrency){
                    // console.log(updatedCurrency);
                    updatedCurrency[idKey] = {
                        ...this.state.currency[idKey],
                        rates: response.data.rates[idKey]
                    }
                }
                console.log(response);
                this.setState({
                    currency: updatedCurrency,
                });
            })
            .catch();
        console.log(this.state);
    }

    buttonClickedHandler = () => {
        console.log(this.state);
    }

    render(){
        let currencies = <Currencies />
        if(this.state.hasLoaded===true){

        }
        return(
            <Aux>
                <Base />
                {currencies}
                <button onClick={this.buttonClickedHandler}>click</button>
            </Aux>
            
        );
    }
}

export default Rates;