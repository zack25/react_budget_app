import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency, availableCurrencies } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        // alert(event.target.value.symbol);
        // alert(event.target.getAttribute('dataValue'));
        dispatch({ type: "CHG_CURRENCY", payload: JSON.parse(event.target.getAttribute('value')) });
    };
    // let test = [];
    // test = availableCurrencies.map((obj) => {
    //     return (<option key={obj.name} onClick={handleCurrencyChange} href="#">{obj.symbol} {obj.name}</option>);
    // })
    const dropdownMenu = availableCurrencies.map((obj, i) => {
        // alert(obj.symbol);
        // return <option key={i} class="dropdown-item" value={JSON.stringify(obj)}>{obj.symbol} {obj.name}</option>
        return <li><div key={i} className="dropdown-item" onClick={handleCurrencyChange} value={JSON.stringify(obj)}>{obj.symbol} {obj.name}</div></li>
    });

    return (

            <div className="alert alert-info dropdown">
                <button className="btn btn-secondary btn-sm dropdown-toggle" style={{backgroundColor:"darkBlue"}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({currency.symbol})
                </button>
                <ul className="dropdown-menu" style={{backgroundColor:"lightBlue"}} aria-labelledby="dropdownMenuButton">
                    {dropdownMenu}
                </ul>
            </div>
    
    );
}

export default Currency;