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
        currencies: {
            USD: {
                name: 'United States Dollar',
                visible: false,
                rate: null
            },
            CAD: {
                name: 'Canada Dollar',
                visible: false,
                rate: null
            },
            IDR: {
                name: 'Indonesian Rupiah',
                visible: true,
                rate: null
            },
            EUR: {
                name: 'Euro',
                visible: true,
                rate: null
            },
            GBP: {
                name: 'British Pound',
                visible: true,
                rate: null
            },
            CHF: {
                name: 'Swiss Franc',
                visible: false,
                rate: null
            },
            SGD: {
                name: 'Singapore Dollar',
                visible: true,
                rate: null
            },
            INR: {
                name: 'Indian Rupee',
                visible: false,
                rate: null
            },
            MYR: {
                name: 'Malaysian Ringgit',
                visible: false,
                rate: null
            },
            JPY: {
                name: 'Japanese Yen',
                visible: false,
                rate: null
            },
            KRW: {
                name: 'Korean Won',
                visible: false,
                rate: null
            }
        },
        hasLoaded: false
    }

    componentDidMount(){
        axios.get('https://api.exchangeratesapi.io/latest?base='+this.state.base.id)
            .then(response => {
                const updatedCurrencies = {
                    ...this.state.currencies
                }
                for(let idKey in updatedCurrencies){
                    // console.log(updatedCurrency);
                    updatedCurrencies[idKey] = {
                        ...this.state.currencies[idKey],
                        rate: response.data.rates[idKey]
                    }
                }
                console.log(response);
                this.setState({
                    currencies: updatedCurrencies,
                    hasLoaded: true
                });
            })
            .catch();
        console.log(this.state);
    }

    buttonClickedHandler = () => {
        console.log(this.state);
    }

    inputChangedHandler = (event) => {
        const re = /^[0-9\b]+$/;
        const updatedBase = {
            ...this.state.base
        }
        if(event.target.value==='' || re.test(event.target.value)){
            updatedBase.value = event.target.value;
            this.setState({
                base: updatedBase
            });
        }   
    }

    currencyHidHandler = (currencyKey) => {
        const updatedCurrencies = {
            ...this.state.currencies
        }
        const updatedCurrency={
            ...updatedCurrencies[currencyKey],
            visible: false
        }
        updatedCurrencies[currencyKey] = updatedCurrency;
        this.setState({
            currencies: updatedCurrencies
        })

    }

    render(){
        let currencies = <Spinner />
        if(this.state.hasLoaded===true){
            currencies = <Currencies 
                currencies={this.state.currencies} 
                value={this.state.base.value}
                hidCurrency={this.currencyHidHandler}
                />
        }
        return(
            <Aux>
                <Base 
                    base={this.state.base}
                    valueChanged={(event) => this.inputChangedHandler(event)}
                />
                {currencies}
                <button onClick={this.buttonClickedHandler}>click</button>
            </Aux>
            
        );
    }
}

export default Rates;