import React, { Component } from 'react';
import Base from '../components/Base/Base';
import axios from 'axios';
import Aux from '../hoc/Auxiliary';
import Spinner from '../components/UI/Spinner/Spinner';
import Currencies from '../components/Currencies/Currencies';
import Dropdown from '../components/UI/Dropdown/Dropdown';

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
        hasLoaded: false,
        dropdown: {
            value: '',
            options: [
                {value: '', displayedValue: '( + ) Add More Currencies'}
            ]
        }

    }

    componentDidMount(){
        // Dynamically add more dropdown options 
        const addedOptions = [...this.state.dropdown.options];
        Object.keys(this.state.currencies)
            .map(curKey => {
                addedOptions.push({
                    value: curKey,
                    displayedValue: curKey
                })
            })
        const updatedDropdown = {
            ...this.state.dropdown,
            options: addedOptions
        }
        this.setState({
            dropdown: updatedDropdown
        })

        // Update exchange rate from API
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
                //console.log(response);
                this.setState({
                    currencies: updatedCurrencies,
                    hasLoaded: true
                });
            })
            .catch(err => console.log(err));
    }

    //Handling base value input
    inputChangedHandler = (event) => {
        const re = /^[0-9\b]+$/;
        const updatedBase = {
            ...this.state.base
        }
        if(event.target.value ==='' || re.test(event.target.value)){
            updatedBase.value = event.target.value;
            this.setState({
                base: updatedBase
            });
        }   
    }

    //handling dropdown when value changed
    dropdownChangedHandler = (event) => {
        const updatedDropdown = {
            ...this.state.dropdown,
            value: event.target.value
        }
        this.setState({
            dropdown: updatedDropdown
        })
    }

    //handling submit button for dropdown
    currencyAddedHandler = (currencyKey) => {
        const updatedCurrencies = {
            ...this.state.currencies
        }
        if(updatedCurrencies[currencyKey]){
            const updatedCurrency = {
                ...updatedCurrencies[currencyKey],
                visible: true
            }
            updatedCurrencies[currencyKey] = updatedCurrency;
            this.setState({
                currencies: updatedCurrencies
            })
        }
    }

    //handling remove currency button (only hide)
    currencyHidHandler = (currencyKey) => {
        const updatedCurrencies = {
            ...this.state.currencies
        }
        const updatedCurrency = {
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
        if(this.state.hasLoaded === true){
            currencies = <Currencies 
                currencies = {this.state.currencies} 
                value = {this.state.base.value}
                hidCurrency = {this.currencyHidHandler}
                />
        }
        return(
            <Aux>
                <Base 
                    id = {this.state.base.id}
                    name = {this.state.base.name}
                    value = {this.state.base.value}
                    valueChanged={(event) => this.inputChangedHandler(event)}
                />
                {currencies}
                <Dropdown
                    options={this.state.dropdown.options} 
                    value={this.state.dropdown.value}
                    onChange={(event) => this.dropdownChangedHandler(event)}
                    onClickBtn={() => this.currencyAddedHandler(this.state.dropdown.value)}/>
                
            </Aux>
            
        );
    }
}

export default Rates;