import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({ type: "CHG_CURRENCY", payload: event.target.value });
    };

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="currencySelection">Currency</label>
            <select id='currencySelection' onChange={handleCurrencyChange} value={currency}>
                <option value="&#163;" name="Pound">(&#163; Pound)</option>
                <option value="&#8377;" name="Rupee">(&#8377; Rupee)</option>
                <option value="&#x24;" name="Dollar">(&#x24; Dollar)</option>
                <option value="&#8364;" name="Euro">(&#8364; Euro)</option>
            </select>
        </div>

    );
}

export default Currency;