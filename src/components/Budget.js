import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget((_event) => {
            dispatch({ type: "SET_BUDGET", payload: event.target.value });
        });
    }
    return (

        <div className='alert alert-secondary'>
            <span>
                <label>Budget: {currency}</label><input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </span>
        </div>
    );
};
export default Budget;